// src/pages/SignupPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleAuthButton from "../components/google/GoogleAuthButton";
import { userRegister } from "../Services/UserApi";


function SignupPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirmpassword: "",
  });

  const [errors, setErrors] = useState({
    passwordMatch: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const updatedForm = { ...form, [e.target.name]: e.target.value };
    setForm(updatedForm);

    // live password = confirm check
    if (
      (e.target.name === "password" ||
        e.target.name === "confirmpassword") &&
      updatedForm.confirmpassword
    ) {
      if (updatedForm.password !== updatedForm.confirmpassword) {
        setErrors({ passwordMatch: "Passwords do not match" });
      } else {
        setErrors({ passwordMatch: "" });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.mobile || !form.password || !form.confirmpassword) {
      alert("All fields are required.");
      return;
    }

    if (form.password !== form.confirmpassword) {
      setErrors({ passwordMatch: "Passwords do not match" });
      return;
    }

    // Decide email vs phone from one field
    const isEmail = form.mobile.includes("@");

    const payload = {
      name: form.name,
      password: form.password,
      confirmpassword: form.confirmpassword,
      ...(isEmail ? { email: form.mobile } : { phone: form.mobile }),
    };

    try {
      setLoading(true);
      const res = await userRegister(payload);

      alert(res?.data?.message || "Account created successfully ✅");
      navigate("/login");
    } catch (err) {
      console.error("Signup error:", err);
      const msg =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        "Signup failed. Please try again.";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <div>
        <div className="flex justify-center mt-4">
          <img src="/Amazonlogo2.png" alt="Amazon" className="w-75" />
        </div>

        <div className="flex items-center justify-center font-amazon">
          <div className="w-[568px] h-[850px] border border-gray-300 rounded-2xl p-9 mb-6">
            <h2 className="text-4xl font-semibold mb-6">Create Account</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xl font-semibold mb-1">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-xl font-semibold mb-1">
                  Email or mobile number
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-xl font-semibold mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-xl font-semibold mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmpassword"
                  value={form.confirmpassword}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-3 border border-gray-500 rounded focus:outline-none focus:ring focus:ring-yellow-400"
                />

                {errors.passwordMatch && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.passwordMatch}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#FFD814] hover:bg-[#CFAF11] text-black font-semibold text-xl py-3 rounded-xl mt-1 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Creating account..." : "Create account"}
              </button>
            </form>

            <hr className="my-5 border-gray-300" />

            <p className="font-semibold text-2xl my-2">
              Buying for work?
              <br />
            </p>
            <p>
              <a
                href="#"
                className="text-blue-600 hover:underline hover:text-[#ff9900] text-xl"
              >
                Create a free business account
              </a>
            </p>

            <div className="max-w-[92%] mx-auto h-[3px] bg-linear-to-r from-transparent via-gray-300 to-transparent my-6" />

            <p className="text-xl">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/register/login")}
                className="text-blue-600 inline-flex items-center hover:underline hover:text-[#ff9900]"
              >
                Sign in{" "}
                <img
                  src="/bluearrow.png"
                  alt="Arrow"
                  className="w-4 h-4 ml-1 mt-1"
                />
              </button>

            </p>

            <p className="text-lg mt-4">
              By creating an account or logging in, you agree to Amazon&apos;s
              <br />
              <a
                href="#"
                className="text-blue-600 underline hover:text-[#ff9900]"
              >
                Conditions of Use
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 underline hover:text-[#ff9900]"
              >
                Privacy Notice
              </a>
              .
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center font-amazon">
          <div className="w-[568px] h-[110px] mb-6 mt-2">
            <div className="flex items-center my-4">
              <div className="grow h-px bg-gray-300"></div>
              <span className="px-2 text-sm text-gray-500">or</span>
              <div className="grow h-px bg-gray-300"></div>
            </div>

            <GoogleAuthButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
