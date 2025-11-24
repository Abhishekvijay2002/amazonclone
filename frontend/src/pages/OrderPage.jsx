import React from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import BrowsingHistory from "../components/BrowsingHistory";

export default function YourOrdersPage() {

      const items = [
    "https://m.media-amazon.com/images/I/61njt1l6IEL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61Z72KpZuqL._AC_SY200_.jpg",
  ];
  return (
    <div>
    <div className="bg-white">
      {/* Wrapper */}
      <div className="max-w-5xl mx-auto px-4 py-6">

        {/* Breadcrumb */}
        <div className="text-xs text-[#007185] mb-2">
          <span className="cursor-pointer hover:underline">Your Account</span>
          <span className="text-gray-500"> › </span>
          <span className="text-orange-500">Your Orders</span>
        </div>

        {/* Page title */}
        <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>

        {/* Tabs + Search row */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-2">
          {/* Tabs */}
          <div className="flex gap-4 text-sm">
            <button className="pb-1 border-b-2 border-black font-semibold">
              Orders
            </button>
            <button className="pb-1 text-[#007185] hover:text-[#c7511f]">
              Buy Again
            </button>
            <button className="pb-1 text-[#007185] hover:text-[#c7511f]">
              Not Yet Shipped
            </button>
            <button className="pb-1 text-[#007185] hover:text-[#c7511f]">
              Cancelled Orders
            </button>
          </div>

          {/* Search box */}
          <div className="flex gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search all orders"
              className="flex-1 md:w-64 border border-gray-400 px-3 py-1 text-sm outline-none focus:ring-1 focus:ring-black"
            />
            <button className="bg-black text-white text-xs px-4 py-1 rounded-full">
              Search Orders
            </button>
          </div>
        </div>

        {/* Thin divider */}
        <div className="border-b border-gray-200 mb-6" />

        {/* Filter + count row */}
        <div className="flex items-center gap-2 text-sm mb-10">
          <span className="font-semibold">0 orders</span>
          <span>placed in</span>
          <select className="border border-gray-400 px-2 py-[2px] text-sm rounded-sm">
            <option>past 3 months</option>
            <option>past 6 months</option>
            <option>past year</option>
            <option>2024</option>
          </select>
        </div>

        {/* Center message */}
        <div className="text-center text-sm text-gray-700">
          Looks like you haven’t placed an order in the last 3 months.{" "}
          <button className="text-[#007185] hover:text-[#c7511f]">
            View orders in 2024
          </button>
        </div>
      </div>
    </div>
    <BrowsingHistory/>
    <BrowsingHistory/>
      <div className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-4 py-4">
        {/* Title */}
        <h2 className="text-sm font-semibold mb-4">
          Your browsing history
        </h2>

        {/* Items */}
        <div className="flex gap-8">
          {items.map((src, i) => (
            <div
              key={i}
              className="h-24 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`history-${i}`}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
