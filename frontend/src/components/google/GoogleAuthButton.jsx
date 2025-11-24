import { useGoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../../Services/UserApi"; 
// import { useNavigate } from "react-router-dom";

const GoogleAuthButton = () => {

    //  const navigate = useNavigate();

  const login = useGoogleLogin({
    flow: "auth-code",          // 👈 IMPORTANT: use auth-code flow
    onSuccess: async (tokenResponse) => {
      try {
        // tokenResponse will contain a "code"
        const { code } = tokenResponse;

        // send the code to backend (NOT access_token)
        const res = await googleLogin(code);

        localStorage.setItem("token", res.data.token);
        console.log("Google login success:", res.data);
        alert("Google login successful ✅");
        navigate("/");  
      } catch (err) {
        console.error("Backend Google login error:", err);
        alert("Google login failed");
      }
    },
    onError: () => {
      console.error("Google login popup failed");
      alert("Google login failed");
    },
  });

  // ⭐ Your styling stays exactly the same
  return (
    <button
      type="button"
      onClick={() => login()}
      className="relative flex items-center justify-center gap-2 border border-gray-400 rounded py-2 px-4 w-full mb-6"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
        className="w-5 h-5 absolute left-4"
        alt="Google logo"
      />
      Login with Google
    </button>
  );
};

export default GoogleAuthButton;

