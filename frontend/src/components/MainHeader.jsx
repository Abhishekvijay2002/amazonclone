import { useEffect, useState } from "react";
import AccountMegaMenu from "./Megamenu";
import { Link } from "react-router-dom";


function MainHeader() {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem("user");
      return stored ? JSON.parse(stored) : null;
    } catch (err) {
      console.error("Error parsing stored user on init:", err);
      return null;
    }
  });

  useEffect(() => {
  }, [user]);

  return (
    <div>
      <div>
        <div className="bg-[#131921] text-white  py-2 h-[75px]">
          <div className="flex items-center ml-7 gap-5">

            <img
              src="/amazonlogo3.png"
              alt="amazon logo"
              className="h-12 w-auto my-2 hover:border hover:border-white px-1 py-1"
            />

            <div className="flex flex-col text-xs  py-1 px-1 leading-tight hover:border hover:border-white">
              <span className="text-gray-400 pl-6 text-base">
                Delivering to Surat 394210
              </span>
              <span className="text-lg flex items-center gap-1">
                <img src="/location.png" className="w-5 h-5" /> Update location
              </span>
            </div>

            <div className="flex grow max-w-lg  h-13 bg-white rounded-3xl">
              <select className="bg-gray-200 text-black px-1 rounded-l text-xl">
                <option>All</option>
              </select>

              <input
                type="text"
                placeholder="Search Amazon.in"
                className="grow px-3 text-xl text-black outline-none"
              />

              <button className="bg-[#ffd500ed] px-3 rounded-r  border-black border-l">
                <img src="/search.png" className="w-6 h-6" />
              </button>
            </div>

            <div className="flex items-center gap-1 px-3 py-2 hover:border hover:border-white">
              <img src="https://flagcdn.com/w40/in.png" className="w-7 h-6" />
              <span className="text-xl">EN</span>
            </div>

            <AccountMegaMenu user={user} />

            <Link
              to="/order"
              className="flex flex-col text-xl leading-tight px-1  py-1 cursor-pointer hover:border hover:border-white"
            >
              <span>Returns</span>
              <span className="text-xl">& Orders</span>
            </Link>

            <Link
              to="/cart"
              className="flex items-center gap-1 font-semibold text-xl cursor-pointer hover:border hover:border-white py-1 px-1"
            >
              <img src="/cart.png" className="w-15 h-15" />
              Cart
            </Link>

          </div>
        </div>
      </div>

      <div className="grid grid-cols-[auto,1fr,auto] px-4 bg-[#232f3e]">
        <div className="flex  text-white text-lg py-1 whitespace-nowrap overflow-hidden">
          <span className="font-bold flex items-center hover:border hover:border-white px-2 py-2">☰ All</span>
          <span className="hover:border hover:border-white px-2 py-2">Amazon miniTV</span>
          <span className="hover:border hover:border-white px-2 py-2">Sell</span>
          <span className="hover:border hover:border-white px-2 py-2">Best Sellers</span>
          <span className="hover:border hover:border-white px-2 py-2">Today's Deals</span>
          <span className="hover:border hover:border-white px-2 py-2">Mobiles</span>
          <span className="hover:border hover:border-white px-2 py-2">Customer Service</span>
          <span className="hover:border hover:border-white px-2 py-2">Prime</span>
          <span className="hover:border hover:border-white px-2 py-2">Electronics</span>
          <span className="hover:border hover:border-white px-2 py-2">Fashion</span>
          <span className="hover:border hover:border-white px-2 py-2">New Releases</span>
          <span className="hover:border hover:border-white px-2 py-2">Home & Kitchen</span>
          <span className="hover:border hover:border-white px-2 py-2">Amazon Pay</span>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
