import React from "react";

export default function KitchenMegaMenu() {
  return (
    <div
      className="absolute left-0 top-full mt-1 w-[950px] bg-white  shadow-lg
                 p-6 z-50 hidden group-hover:flex gap-8"
    >
   
      <div className="flex-1 grid grid-cols-3 gap-8 text-sm text-gray-800">

        <div>
          <h3 className="font-bold mb-1">Kitchen Appliances</h3>
          <ul className="space-y-1">
            <li>Mixer Grinders</li>
            <li>Juicers</li>
            <li>Hand Blenders</li>
            <li>Food Processors</li>
            <li>Oven Toaster Grills</li>
            <li>Toaster</li>
            <li>Rice &amp; Pasta Cookers</li>
            <li>Deep Fryers</li>
            <li>Hand Mixers</li>
            <li>Coffee Machines</li>
            <li>Induction Cooktops</li>
            <li>Sandwich Makers</li>
            <li>Electric Kettles</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-1">Home Appliances</h3>
          <ul className="space-y-1 mb-3">
            <li>Water Purifiers</li>
            <li>Irons</li>
            <li>Sewing Machines &amp; Accessories</li>
            <li>Vacuum Cleaners</li>
            <li>Inverters</li>
          </ul>

          <h3 className="font-bold mb-1">Heating, Cooling &amp; Air Quality</h3>
          <ul className="space-y-1">
            <li>Fans</li>
            <li>Water Heaters</li>
            <li>Air Coolers</li>
            <li>Air Purifiers</li>
            <li>Dehumidifiers</li>
            <li>Humidifiers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-1">Shop By Brand</h3>
          <ul className="space-y-1">
            <li>Philips</li>
            <li>Bajaj</li>
            <li>Prestige</li>
            <li>Eureka Forbes</li>
            <li>Kent</li>
            <li>Orpat</li>
            <li>Symphony</li>
            <li>Preethi</li>
            <li>Usha</li>
            <li>Morphy Richards</li>
            <li>Wonderchef</li>
            <li>Pigeon</li>
          </ul>
        </div>
      </div>

      <div className="w-[360px] flex gap-4 text-center text-sm">
        <div className="flex-1">
          <img
            src="https://m.media-amazon.com/images/I/41PFfgE1TxL._SY300_SX300_QL70_FMwebp_.jpg"
            alt="Recipe Corner"
            className="w-full h-40 object-cover mb-2"
          />
          <p className="font-semibold">Recipe Corner</p>
          <button className="text-[#007185] text-xs mt-1">See more</button>
        </div>

        <div className="flex-1">
          <img
            src="https://m.media-amazon.com/images/I/61xHtK5uyLL._SX679_.jpg"
            alt="Fans Buying Guide"
            className="w-full h-40 object-cover mb-2"
          />
          <p className="font-semibold">Fans Buying Guide</p>
          <button className="text-[#007185] text-xs mt-1">Learn more</button>
        </div>

        <div className="flex-1">
          <img
            src="https://m.media-amazon.com/images/I/61Zs92-i2cL._SX679_.jpg"
            alt="Coolers Buying Guide"
            className="w-full h-40 object-cover mb-2"
          />
          <p className="font-semibold">Coolers Buying Guide</p>
          <button className="text-[#007185] text-xs mt-1">Learn more</button>
        </div>
      </div>
    </div>
  );
}
