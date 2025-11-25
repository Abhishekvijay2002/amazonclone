const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config()

const authenticateRole = (allowedRoles) => (req, res, next) => {
  try {
    // const token = req.headers["authorization"]; 
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ msg: "JWT token not found" });
    }

    const formattedToken = token.startsWith("Bearer ") ? token.slice(7) : token;

    const verifiedToken = jwt.verify(formattedToken, process.env.JWT_SECRET);
    if (!verifiedToken) {
      return res.status(401).json({ msg: "Token verification failed" });
    }

    if (!allowedRoles.includes(verifiedToken.role)) {
      return res
        .status(403)
        .json({ msg: "Access denied. Not authorized for this action." });
    }

    req.userId = { id: verifiedToken.id, role: verifiedToken.role };
    next();
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
};

module.exports = { 
  authAdmin: authenticateRole(["admin"]),
  authUser: authenticateRole(["user"]),
  authAdminOrUser: authenticateRole(["admin", "user",]),
};
