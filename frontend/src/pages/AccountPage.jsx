import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AccountPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch (err) {
        console.error("Error parsing user data", err);
      }
    }
  }, []);

  const firstName = user?.name?.split(" ")[0] || "Guest";

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_role");

    document.cookie = "token=; Max-Age=0; path=/;";

    alert("Logged out successfully ✅");

    navigate("/");
  };

  return (
    <div className="h-[400px] bg-white">
      <div className="max-w-6xl mx-auto pt-12 px-6">

        <h1 className="text-3xl font-semibold mb-1">
          Hello, {firstName} 👋
        </h1>
        <p className="text-gray-600 text-lg mb-8">Welcome</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <button
            onClick={() => navigate("/order")}
            className="flex items-center gap-5 border border-gray-300 rounded-xl p-6 hover:shadow-sm text-left bg-white"
          >
            <div className="w-16 h-16 rounded-lg flex items-center justify-center">
              <img
                src="https://i.pinimg.com/1200x/9f/eb/99/9feb99dd578326f60c625dd0397c5b87.jpg"
                alt="Orders"
                className="w-15 h-15 object-contain"
              />
            </div>

            <div>
              <h2 className="text-lg font-semibold">Your Orders</h2>
              <p className="text-sm text-gray-600">
                Track your Order here 
              </p>
            </div>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-5 border border-gray-300 rounded-xl p-6 hover:shadow-sm text-left bg-white"
          >
            <div className="w-16 h-16 border rounded-lg flex items-center justify-center">
              <img
                src="https://cdn3.iconfinder.com/data/icons/signs-8/52/sign-08-1024.png"
                alt="Logout"
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Log Out</h2>
              <p className="text-sm text-gray-600">
                See you next time!
              </p>
            </div>
          </button>

        </div>
      </div>
    </div>
  );
}

export default AccountPage;
