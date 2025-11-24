import React from "react";

export default function Fourgridtype2() {
  return (
    <div className="bg-gray-700 py-4">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">

        {/* Card 1 – Pick up where you left */}
        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3">
            Pick up where you left off
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              { img: "sandbox:/mnt/data/0224d904-320a-4e84-ad0d-023dc749f33d.png", price: "₹389" },
              { img: "sandbox:/mnt/data/0224d904-320a-4e84-ad0d-023dc749f33d.png", price: "₹499" },
              { img: "sandbox:/mnt/data/0224d904-320a-4e84-ad0d-023dc749f33d.png", price: "₹499" },
              { img: "sandbox:/mnt/data/0224d904-320a-4e84-ad0d-023dc749f33d.png", price: "₹2,650" },
            ].map((item, i) => (
              <div key={i}>
                <div className="border border-gray-200 h-[140px] flex items-center justify-center bg-white">
                  <img src={item.img} className="h-full object-contain" />
                </div>
                <p className="text-xs mt-1">{item.price}</p>
              </div>
            ))}
          </div>

          <button className="text-sm text-[#007185] mt-3">See more</button>
        </div>


        {/* Card 2 – Streaming */}
        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3">
            Yeh Meri Family | Season 4 | Streaming Now
          </h2>

          <div className="border border-gray-200 h-60 flex items-center justify-center bg-white">
            <img
              src="sandbox:/mnt/data/0224d904-320a-4e84-ad0d-023dc749f33d.png"
              className="h-full object-cover"
            />
          </div>

          <p className="text-sm text-[#007185] mt-3">
            Check out other exciting shows on miniTV
          </p>
        </div>


        {/* Card 3 – Sports product */}
        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3">
            Best Sellers in Sports, Fitness & Outdoors
          </h2>

          <div className="border border-gray-200 h-60 flex items-center justify-center bg-white">
            <img
              src="sandbox:/mnt/data/0224d904-320a-4e84-ad0d-023dc749f33d.png"
              className="h-full object-contain"
            />
          </div>

          <p className="text-sm mt-3">
            Lifelong PVC Hex Dumbbells Pack of 2...
          </p>

          <p className="font-semibold mt-1">₹509.00</p>

          <div className="flex gap-2 mt-3">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="border border-blue-400 w-10 h-10 rounded flex items-center justify-center"
              >
                <img
                  src="sandbox:/mnt/data/0224d904-320a-4e84-ad0d-023dc749f33d.png"
                  className="w-6"
                />
              </div>
            ))}
          </div>
        </div>


        {/* Card 4 – Offer product */}
        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3">
            Up to 70% off | IDAM natural wellness
          </h2>

          <div className="border border-gray-200 h-60 flex items-center justify-center bg-white">
            <img
              src="sandbox:/mnt/data/0224d904-320a-4e84-ad0d-023dc749f33d.png"
              className="h-full object-cover"
            />
          </div>

          <button className="text-sm text-[#007185] mt-3">
            See more
          </button>
        </div>

      </div>
    </div>
  );
}
