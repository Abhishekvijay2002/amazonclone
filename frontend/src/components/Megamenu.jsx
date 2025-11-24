export default function AccountMegaMenu() {
  return (
    <div className="relative group">
      {/* Trigger */}
      <button className="text-sm leading-tight">
        <div className="flex flex-col text-xs leading-tight mx-3">
          <span className="text-base">Hello, sign in</span>
          <span className="font-semibold text-lg flex items-center">
            Account & Lists
            <img src="./downarrow.png" className="w-2 h-2 mt-1 ml-1" />
          </span>
        </div>
      </button>

      {/* Mega menu */}
      <div
        className="
    invisible opacity-0 scale-95
    group-hover:visible group-hover:opacity-100 group-hover:scale-100
    transition-all duration-150 origin-top
    absolute left-1/2 -translate-x-[40%] top-full mt-2 z-50
  "
      >

        {/* Panel with arrow INSIDE */}
        <div className="relative bg-white rounded shadow-lg w-[520px]">

          {/* Arrow */}
          <div className="absolute -top-2 right-[239px] w-4 h-4">
            <div className="w-4 h-4 bg-white rotate-45"></div>
          </div>


          {/* Sign in */}
          <div className="flex flex-col items-center pt-6 px-6">
            <button className="w-64 bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] text-sm font-semibold py-2 rounded-sm text-black">
              Sign in
            </button>
            <p className="text-xs mt-2 mb-4">
              New customer?{" "}
              <a href="#" className="text-[#0066c0] hover:underline">
                Start here.
              </a>
            </p>
          </div>

          <hr className="my-3 border-gray-200" />

          {/* Lists + Account columns */}
          <div className="flex px-8 pb-6 gap-10 text-sm">

            {/* Left column */}
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

            {/* Divider */}
            <div className="w-px bg-gray-200" />

            {/* Right column */}
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
                <li>Manage Your Content and <br/> Devices</li>
                <li>Your Free Amazon Business Account</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
