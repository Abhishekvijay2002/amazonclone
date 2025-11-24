import React from "react";

export default function LargeAppliancesMegaMenu() {
  return (
    <div
      className="absolute left-0 top-full mt-1 w-[950px] bg-white shadow-lg
                 p-6 z-50 hidden group-hover:flex gap-8"
    >

      <div className="flex-1 grid grid-cols-3 gap-8 text-sm text-gray-800">

        <div>
          <h3 className="font-bold mb-1">Air Conditioners</h3>
          <ul className="space-y-1 mb-3">
            <li>Split ACs</li>
            <li>Window ACs</li>
            <li>Inverter ACs</li>
          </ul>

          <h3 className="font-bold mb-1 mt-3">Shop by brand</h3>
          <ul className="space-y-1">
            <li>LG</li>
            <li>Voltas</li>
            <li>Carrier</li>
            <li>Blue Star</li>
            <li>BPL</li>
            <li>Samsung</li>
          </ul>

          <h3 className="font-bold mb-1 mt-4">Microwave Ovens</h3>
          <ul className="space-y-1">
            <li>Solo</li>
            <li>Convection</li>
            <li>Grill</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-1">Refrigerators</h3>
          <ul className="space-y-1 mb-3">
            <li>Single Door</li>
            <li>Double Door</li>
            <li>Triple Door</li>
            <li>Side By Side</li>
          </ul>

          <h3 className="font-bold mb-1 mt-3">Shop by brand</h3>
          <ul className="space-y-1 mb-3">
            <li>Samsung</li>
            <li>LG</li>
            <li>Whirlpool</li>
            <li>Godrej</li>
            <li>Mitashi</li>
            <li>BPL</li>
            <li>Haier</li>
            <li>Bosch</li>
          </ul>

          <h3 className="font-bold mb-1 mt-3">Dishwashers</h3>
        </div>

        <div>
          <h3 className="font-bold mb-1">Washing Machines</h3>
          <ul className="space-y-1 mb-3">
            <li>Fully Automatic Front Load</li>
            <li>Fully Automatic Top Load</li>
            <li>Semi Automatic Top Load</li>
            <li>Dryers</li>
          </ul>

          <h3 className="font-bold mb-1 mt-3">Shop by brand</h3>
          <ul className="space-y-1 mb-3">
            <li>Samsung</li>
            <li>LG</li>
            <li>Whirlpool</li>
            <li>Godrej</li>
            <li>IFB</li>
            <li>BPL</li>
            <li>Haier</li>
            <li>Bosch</li>
          </ul>

          <h3 className="font-bold mb-1 mt-3">Chimneys</h3>
        </div>
      </div>

      <div className="w-[360px] flex gap-4 text-center text-sm">
        <div className="flex-1">
          <img
            src="https://m.media-amazon.com/images/I/41p7zEgFyjL._SX342_SY445_QL70_FMwebp_.jpg"
            alt="No Cost EMI"
            className="w-full h-40 object-cover mb-2"
          />
          <p className="font-semibold">No Cost emi</p>
          <button className="text-[#007185] text-xs mt-1">Learn more</button>
        </div>

        <div className="flex-1">
          <img
            src="https://m.media-amazon.com/images/I/41lEyYkN4gL._SX342_SY445_QL70_FMwebp_.jpg"
            alt="7 reasons to buy"
            className="w-full h-40 object-cover mb-2"
          />
          <p className="font-semibold">7 reasons to buy from us</p>
          <button className="text-[#007185] text-xs mt-1">Learn more</button>
        </div>

        <div className="flex-1">
          <img
            src="https://m.media-amazon.com/images/I/41AAsQiTpkL._SX342_SY445_QL70_FMwebp_.jpg"
            alt="Refrigerators"
            className="w-full h-40 object-cover mb-2"
          />
          <p className="font-semibold">Refrigerators</p>
          <button className="text-[#007185] text-xs mt-1">Learn more</button>
        </div>
      </div>
    </div>
  );
}
