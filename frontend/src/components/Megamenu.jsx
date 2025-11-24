
import { useNavigate } from "react-router-dom";

export default function AccountMegaMenu({ user }) {
  const navigate = useNavigate();

  const isLoggedIn = !!user;
  const firstName = user?.name?.split(" ")[0] || user?.name || "sign in";

  const handleTriggerClick = () => {
    if (isLoggedIn) {
      navigate("/account");
    } else {
      navigate("/register/login");
    }
  };

  const handleSignInClick = (e) => {
    e.stopPropagation();
    navigate("/register/login");
  };

  return (
    <div className="relative group">
      <button className="text-sm leading-tight" onClick={handleTriggerClick}>
        <div className="flex flex-col text-xs leading-tight mx-3 hover:border hover:border-white px-1 py-1">
          <span className="text-base">
            {isLoggedIn ? `Hello, ${firstName}` : "Hello, sign in"}
          </span>
          <span className="font-semibold text-lg flex items-center">
            Account &amp; Lists
            <img src="./downarrow.png" className="w-2 h-2 mt-1 ml-1" />
          </span>
        </div>
      </button>

      <div
        className="
          invisible opacity-0 scale-95
          group-hover:visible group-hover:opacity-100 group-hover:scale-100
          transition-all duration-150 origin-top
          absolute left-1/2 -translate-x-[40%] top-full mt-2 z-50
        "
      >
        <div className="relative bg-white rounded shadow-lg w-[520px]">
          <div className="absolute -top-2 right-[239px] w-4 h-4">
            <div className="w-4 h-4 bg-white rotate-45"></div>
          </div>

          {isLoggedIn ? (
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">Your Account</h3>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <button
                  className="flex flex-col items-start  border border-gray-200 rounded-lg px-4 py-3 hover:border-[#f5a623] hover:shadow-sm text-left"
                  onClick={() => navigate("/order")}
                >
                  <span className="font-semibold text-base text-black">Your Orders</span>
                  <span className="text-2xl text-gray-600 text-center">
                    Track, return
                  </span>
                </button> 

                <button
                  className="flex flex-col items-start  border border-gray-200 rounded-lg px-4 py-3 hover:border-[#f5a623] hover:shadow-sm text-left"
                  onClick={() => navigate("/account")}
                >
                  <span className="font-semibold text-base text-black">
                    Login &amp; 
                  </span>
                  <span className="text-2xl text-gray-600 text-center">
                  view your profile
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex flex-col items-center pt-6 px-6">
                <button
                  className="w-64 bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] text-sm font-semibold py-2 rounded-sm text-black"
                  onClick={handleSignInClick}
                >
                  Sign in
                </button>
                <p className="text-xs mt-2 mb-4">
                  New customer?{" "}
                  <a
                    href="/register/signup"
                    className="text-[#0066c0] hover:underline"
                  >
                    Start here.
                  </a>
                </p>
              </div>

              <hr className="my-3 border-gray-200" />

              <div className="flex px-8 pb-6 gap-10 text-sm">

                <div className="flex-1">
                  <h3 className="font-semibold mb-2">Your Lists</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>Create a Wish List</li>
                    <li>Wish from Any Website</li>
                    <li>Baby Wishlist</li>
                    <li>Discover Your Style</li>
                    <li>Explore Showroom</li>
                  </ul>
                </div>

                <div className="w-px bg-gray-200" />

                <div className="flex-[1.4]">
                  <h3 className="font-semibold mb-2">Your Account</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>Your Account</li>
                    <li>Your Orders</li>
                    <li>Your Wish List</li>
                    <li>Keep Shopping</li>
                    <li>Your Recommendations</li>
                    <li>Your Prime membership</li>
                    <li>Your Prime Video</li>
                    <li>Your Subscribe &amp; Save Items</li>
                    <li>Your Seller Account</li>
                    <li>Memberships &amp; Subscriptions</li>
                    <li>
                      Manage Your Content and <br />
                      Devices
                    </li>
                    <li>Your Free Amazon Business Account</li>
                  </ul>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
