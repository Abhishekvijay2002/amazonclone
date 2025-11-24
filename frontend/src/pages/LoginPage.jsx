
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GoogleAuthButton from "../components/google/GoogleAuthButton";
import { userLogin } from "../Services/UserApi";

function LoginPage() {
  const navigate = useNavigate();

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1); 
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      if (!emailOrPhone.trim()) {
        alert("Please enter your email or mobile phone number.");
        return;
      }
      setStep(2);
      return;
    }

    if (!password.trim()) {
      alert("Please enter your password.");
      return;
    }

    try {
      setLoading(true);

      const res = await userLogin({
        email: emailOrPhone, 
        password,
      });

      localStorage.setItem("token", res.data.token);

      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful ✅");
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      const msg =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        "Login failed. Please check your credentials.";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">

      <div className="flex justify-center mt-4 ">
        <img src="/Amazonlogo2.png" alt="Amazon" className="w-75" />
      </div>


      <div className="flex items-center justify-center font-amazon">
        <form
          className="w-[568px] h-[540px] border border-gray-300 rounded-2xl p-9 mb-6"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold mb-6 mt-2">Sign in</h1>

          <label className="text-2xl my-4 font-semibold block">
            Email or mobile phone number
          </label>
          <input
            type="text"
            className="border border-gray-400 rounded-sm p-3 w-full mb-4"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
          />

          {step === 2 && (
            <>
              <label className="text-2xl my-4 font-semibold block">
                Password
              </label>
              <input
                type="password"
                className="border border-gray-400 rounded-sm p-3 w-full mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#FFD814] hover:bg-[#CFAF11] disabled:opacity-70 disabled:cursor-not-allowed text-black font-medium py-3 px-4 rounded-xl w-full mb-4"
          >
            {step === 1
              ? "Continue"
              : loading
              ? "Signing in..."
              : "Sign in"}
          </button>

          <p className="text-lg text-gray-600 mb-4">
            By continuing, you agree to Amazon&apos;s{" "}
            <span className="text-blue-600 underline hover:text-[#ff9900]">
              Conditions of Use
            </span>
            <br />
            and{" "}
            <span className="text-blue-600 underline hover:text-[#ff9900]">
              Privacy Notice
            </span>
            .
          </p>

          <p className="flex items-center text-lg text-blue-600 mb-6 cursor-pointer hover:underline hover:text-[#ff9900]">
            <img src="/Arrow.png" alt="Arrow" className="w-4 h-4 mr-1" />
            Need help?
          </p>

          <hr className="my-6 border-gray-200" />

          <p className="text-2xl font-semibold mb-1">Buying for work?</p>
          <p className="text-lg text-blue-600 mb-4 cursor-pointer hover:underline hover:text-[#ff9900]">
            Shop on Amazon Business
          </p>
        </form>
      </div>


      <div className="flex items-center justify-center font-amazon">
        <div className="w-[568px] h-[220px] mb-6 mt-2">
          <div className="flex items-center my-5">
            <div className="grow h-px bg-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">New to Amazon?</span>
            <div className="grow h-px bg-gray-300"></div>
          </div>

          <button
            onClick={() => navigate("/register/signup")}
            className="border border-gray-400 rounded-xl py-2 px-4 w-full mb-4"
          >
            Create your Amazon account
          </button>

          <div className="flex items-center my-4">
            <div className="grow h-px bg-gray-300"></div>
            <span className="px-2 text-sm text-gray-500">or</span>
            <div className="grow h-px bg-gray-300"></div>
          </div>

          {/* Google Login */}
          <GoogleAuthButton />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
