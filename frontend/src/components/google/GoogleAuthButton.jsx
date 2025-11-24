
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../../Services/UserApi";

function GoogleAuthButton() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);


  const loginWithGoogle = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      try {
        setLoading(true);
        console.log("Google OAuth success, code:", codeResponse);

 
        const res = await googleLogin(codeResponse.code);
        console.log("Google login success:", res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        alert("Google login successful ✅");
        navigate("/"); 
      } catch (err) {
        console.error("Backend Google login error:", err);
        const msg =
          err?.response?.data?.error ||
          err?.response?.data?.message ||
          "Google login failed. Please try again.";
        alert(msg);
      } finally {
        setLoading(false);
      }
    },
    onError: (err) => {
      console.error("Google OAuth error:", err);
      alert("Google sign-in was cancelled or failed.");
    },
  });

  return (
    <button
      type="button"
      onClick={() => loginWithGoogle()}
      disabled={loading}
      className="relative flex items-center justify-center gap-2 border border-gray-400 rounded py-2 px-4 w-full mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
        className="w-5 h-5 absolute left-4"
        alt="Google logo"
      />
      {loading ? "Signing in with Google..." : "Login with Google"}
    </button>
  );
}

export default GoogleAuthButton;
