const userModel = require("../models/userModel");
const { createToken } = require("../Utilities/generateToken");
const { hashPassword,comparePassword} = require("../Utilities/passwordUtilities");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const axios = require("axios");


// REGISTER
const register = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;

    if (!name || !email || !password || !confirmpassword) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmpassword) {
      return res
        .status(400)
        .json({ error: "Password and confirm password must match" });
    }

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ error: "User already exists with this email" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

//LOGIN 
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const userExist = await userModel.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ error: "User not found with this email" });
    }

    const passwordMatch = await comparePassword(
      password,
      userExist.password
    );
    if (!passwordMatch) {
      return res.status(400).json({ error: "Invalid password" });
    }

    const userObject = userExist.toObject();
    delete userObject.password;

    const token = createToken(userExist.id, userExist.role);

    res.cookie("token", token, {
    httpOnly: true,
    secure: false,       
    sameSite: "lax",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });

    res.status(200).json({
      message: "Login successful",
      user: userObject,
      token,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),   // expire immediately
      sameSite: "lax",
      secure: false,          // true in production
    });

    return res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    return res.status(500).json({ error: "Logout failed" });
  }
};

// GOOGLE AUTH 


// GOOGLE AUTH WITH CLIENT SECRET (AUTH CODE FLOW)
const googleAuth = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Authorization code is required" });
    }

    // 1️⃣ Exchange code for tokens
    const tokenRes = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: "authorization_code",
      },
      { headers: { "Content-Type": "application/json" } }
    );

    const { id_token, access_token } = tokenRes.data;

    // 2️⃣ Verify ID token (more secure)
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email, name, sub } = payload;

    if (!email) {
      return res.status(400).json({ error: "No email returned from Google" });
    }

    // 3️⃣ Find or create user
    let user = await userModel.findOne({ email });

    if (!user) {
      user = new userModel({
        name: name || "Google User",
        email,
        password: "GOOGLE_USER",
        googleId: sub,
      });
      await user.save();
    }

    const userObj = user.toObject();
    delete userObj.password;

    // 4️⃣ Create your own JWT
    const jwtToken = createToken(user._id, user.role);

    return res.status(200).json({
      message: "Google login successful",
      user: userObj,
      token: jwtToken,
    });
  } catch (error) {
    console.error("Google auth error:", error.response?.data || error.message);
    return res.status(500).json({ error: "Google authentication failed" });
  }
};

module.exports = { googleAuth };


// GET USER PROFILE 
const getuser = async (req, res) => {
  try {
    const userId = req.userId.id;

    const userExist = await userModel.findById(userId).select("-password");
    if (!userExist) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(userExist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//  UPDATE USER 
const updateuser = async (req, res) => {
  try {
    const { name } = req.body;

    const updates = {};
    if (name) updates.name = name;

    const user = await userModel
      .findByIdAndUpdate(req.userId.id, updates, { new: true })
      .select("-password");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// DELETE USER 
const deleteUser = async (req, res) => {
  try {
    let userId = req.userId.id;

    if (req.userId.role === "admin" && req.params.id) {
      userId = req.params.id;
    }

    const userExist = await userModel.findById(userId);
    if (!userExist) {
      return res.status(404).json({ error: "User not found" });
    }

    await userModel.findByIdAndDelete(userId);

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const GetallUsers = async (req, res) => {
  try {
    const users = await userModel
      .find({ role: { $ne: "admin" } })
      .select("-password");

    if (!users || users.length === 0) {
      return res.status(404).json({ error: "Users not found" });
    }

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  register,
  login,
  googleAuth,
  getuser,
  updateuser,
  deleteUser,
  GetallUsers,
  logout
};
