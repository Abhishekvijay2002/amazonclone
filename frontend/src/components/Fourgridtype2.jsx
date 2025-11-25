import React from "react";
import { useNavigate } from "react-router-dom";

export default function Fourgridtype2() {
   const navigate = useNavigate();

  return (
    <div className="bg-gray-700 py-4">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">

        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3">
            Pick up where you left off
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              { img: "https://image.made-in-china.com/43f34j00JFpqocmDLTuk/Bandage-Dress-Manufacturer-European-and-American-Foreign-Trade-High-End-Dress-Spot-Wholesale-New-Style-Jacquard-Hip-Bandage-Skirt-White.jpg", price: "₹389" },
              { img: "https://static.zara.net/assets/public/f957/6faf/ff4e413098df/073986892342/06147092427-p/06147092427-p.jpg?ts=1749197247080&w=744&f=auto", price: "₹499" },
              { img: "https://static.zara.net/assets/public/5f6f/1b78/4ff84d1e85d1/c110dbf8ab77/07484088400-p/07484088400-p.jpg?ts=1750242196841&w=744&f=auto", price: "₹499" },
              { img: "https://static.zara.net/assets/public/b13d/2f63/3165481a82c6/62837dbe8d2a/08346774093-p/08346774093-p.jpg?ts=1753383119491&w=744&f=auto", price: "₹2,650" },
            ].map((item, i) => (
              <div key={i} onClick={() => navigate("/product")}>
                <div className="border border-gray-200 h-[140px] flex items-center justify-center bg-white">
                  <img src={item.img} className="h-full object-contain" />
                </div>
                <p className="text-xs mt-1">{item.price}</p>
              </div>
            ))}
          </div>

          <button className="text-sm text-[#007185] mt-3" onClick={() => navigate("/product")}>See more</button>
        </div>

        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3">
            Yeh Meri Family | Season 4 | Streaming Now
          </h2>

          <div className="border border-gray-200 h-60 flex items-center justify-center bg-white">
            <img
              src="https://images.indianexpress.com/2018/07/yeh-759.jpg"
              className="h-full object-cover" onClick={() => navigate("/product")}
            />
          </div>

          <p className="text-sm text-[#007185] mt-3">
            Check out other exciting shows on miniTV
          </p>
        </div>

        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3">
            Best Sellers in Sports, Fitness & Outdoors
          </h2>

          <div className="border border-gray-200 h-60 flex items-center justify-center bg-white" onClick={() => navigate("/product")}>
            <img
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPOB1XC8835jygGmdssvYDyO1XRKJprVRJrjJCFFb-4ofA9s6eNDc6MLfoIPPsRH7vLR5hTPLtJnIKXEdvVWV7uIPM25ljFKOaQm2RwsQ_jDT2boNKoBg2FQ"
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
                key={i} onClick={() => navigate("/product")}
                className="border border-blue-400 w-10 h-10 rounded flex items-center justify-center"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQPOB1XC8835jygGmdssvYDyO1XRKJprVRJrjJCFFb-4ofA9s6eNDc6MLfoIPPsRH7vLR5hTPLtJnIKXEdvVWV7uIPM25ljFKOaQm2RwsQ_jDT2boNKoBg2FQ"
                  className="w-6"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3">
            Up to 70% off | IDAM natural wellness
          </h2>

          <div className="border border-gray-200 h-60 flex items-center justify-center bg-white">
            <img onClick={() => navigate("/product")}
              src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS-yDMpZhSCq5mcmBZoL-PVONtmEtJ5zJqRV4YV79pE2pA11iOJ9ooK3R_Qf4u1DLx7asS19xsrlHz56Q2yIMhjMltXgTxCtyWmhD-7s3sL19aA5cBvnk5l_A"
              className="h-full object-cover"
            />
          </div>

          <button className="text-sm text-[#007185] mt-3" onClick={() => navigate("/product")}>
            See more
          </button>
        </div>

      </div>
    </div>
  );
}
