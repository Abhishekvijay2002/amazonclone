import React from "react";
import BrowsingHistory from "../components/BrowsingHistory";
import MainFooter from "../components/MainFooter";
import MainHeader from "../components/MainHeader";

export default function ExactAmazonCart() {
  return (
    <div>
    <div className="min-h-screen bg-[#f3f3f3] py-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-12 gap-4">

        {/* LEFT SIDE */}
        <div className="col-span-9 space-y-4">

          {/* CART BOX */}
          <div className="bg-white border border-gray-300">
            {/* Header */}
            <div className="flex justify-between px-5 py-3 border-b border-gray-200">
              <h1 className="text-lg font-semibold">Shopping Cart</h1>
              <span className="text-sm text-gray-600">Price</span>
            </div>

            {/* Product row */}
            <div className="px-5 py-4 flex gap-4">
              {/* Image */}
              <img
                src="/mnt/data/1a794396-b39f-425f-a775-9cd269d626e8.png"
                className="w-[120px] object-contain"
                alt="product"
              />

              {/* Content */}
              <div className="flex-1 text-sm leading-5">
                <p className="font-semibold">
                  WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress, Black, L
                </p>

                <p className="text-red-600 text-xs mt-1">
                  Usually ships within 4 to 5 days
                </p>

                <p className="text-xs text-[#007185]">Sold by: Monka LLC</p>
                <p className="text-xs">Size: L</p>
                <p className="text-xs">Color: Black</p>

                {/* Qty + actions */}
                <div className="flex items-center gap-3 mt-2 text-xs">
                  <div className="flex items-center gap-1">
                    <span>Qty:</span>
                    <select className="border border-gray-400 rounded px-1 py-[2px] text-xs">
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>

                  <button className="hover:underline">Delete</button>
                  <button className="hover:underline">Save for later</button>
                  <button className="text-[#007185] hover:underline">
                    Share
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-sm font-semibold whitespace-nowrap">
                SAR 203.14
              </div>
            </div>

            {/* Subtotal row */}
            <div className="text-right px-5 py-3 border-t border-gray-200 text-sm">
              Subtotal (1 item):{" "}
              <span className="font-semibold">SAR 203.14</span>
            </div>
          </div>

          {/* INFO BOX */}
          <div className="  px-5 py-4 text-xs text-gray-700 leading-5">
            <p>
              The price and availability of items at Amazon.sa are subject to change.
              The Cart is a temporary place to store a list of your items and reflects each item's most recent price.
            </p>
            <p className="mt-2">
              Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-span-3 space-y-4">

          {/* Subtotal box */}
          <div className="bg-white border border-gray-300 px-4 py-4">
            <p className="text-sm">
              Subtotal (1 item):{" "}
              <span className="font-semibold">SAR 203.14</span>
            </p>

            <button className="mt-3 w-full bg-[#ffd814] hover:bg-[#f7ca00] text-sm font-semibold py-[6px] rounded-full">
              Proceed to Buy
            </button>
          </div>

          {/* Customers also bought */}
          <div className="bg-white border border-gray-300 px-4 py-4">
            <h2 className="text-sm font-semibold mb-3">
              Customers Who Bought Items in Your Recent History Also Bought
            </h2>

            {/* Item 1 */}
            <div className="flex gap-3 mb-4">
              <img
                src="/mnt/data/1a794396-b39f-425f-a775-9cd269d626e8.png"
                className="w-[50px] object-contain"
                alt=""
              />
              <div className="text-xs">
                <p className="text-[#007185]">
                  Trendyol womens Seasonal Fashion Dress...
                </p>
                <p className="text-[#ffa41c]">★★★★☆ 43</p>
                <p>SAR 69.70</p>
                <button className="border border-gray-400 rounded-full px-2 py-1 mt-1 text-xs">
                  See all buying options
                </button>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-3">
              <img
                src="/mnt/data/1a794396-b39f-425f-a775-9cd269d626e8.png"
                className="w-[50px] object-contain"
                alt=""
              />
              <div className="text-xs">
                <p className="text-[#007185]">
                  Tommy Hilfiger Women's Sleeveless Fit and Flare Dress
                </p>
                <p className="text-[#ffa41c]">★★★☆☆ 29</p>
                <p>
                  <span className="text-red-600">SAR 469.70</span>{" "}
                  <span className="line-through text-gray-500">
                    SAR 657.00
                  </span>
                </p>
                <button className="border border-gray-400 rounded-full px-2 py-1 mt-1 text-xs">
                  See all buying options
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <BrowsingHistory/>
    </div>
  );
}



  