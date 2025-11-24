import React, { useState } from "react";

const products = [
  {
    title: "Red Tape Casual Lifestyle Sneakers",
    price: "₹1,701",
    mrp: "₹5,690.00",
    img: "https://m.media-amazon.com/images/I/71vJ2tD52gL._AC_UL480_.jpg",
  },
  {
    title: "Puma Unisex Popcat 20 RES Slide",
    price: "₹1,000",
    mrp: "₹1,999.00",
    img: "https://m.media-amazon.com/images/I/61J9u3bRZcL._AC_UL480_.jpg",
  },
  {
    title: "Puma Unisex Badminton Smash",
    price: "₹2,241",
    mrp: "₹4,690.00",
    img: "https://m.media-amazon.com/images/I/71mXkR4Wq3L._AC_UL480_.jpg",
  },
  {
    title: "Amico Men's & Boys Multicolor Shoes",
    price: "₹519",
    mrp: "₹2,490.00",
    img: "https://m.media-amazon.com/images/I/71QOXxS2z3L._AC_UL480_.jpg",
  },
  {
    title: "Campus Men's Oxyfit Running Shoes",
    price: "₹1,299",
    mrp: "₹2,499.00",
    img: "https://m.media-amazon.com/images/I/71fAJZici2L._AC_UL480_.jpg",
  },
  {
    title: "ASIAN Casual Sneakers for Men",
    price: "₹899",
    mrp: "₹1,999.00",
    img: "https://m.media-amazon.com/images/I/71Fl1D5D7aL._AC_UL480_.jpg",
  },
];

const VISIBLE_COUNT = 5;

export default function FootwearHandbagsSlider() {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.max(products.length - VISIBLE_COUNT, 0);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className="w-full bg-[#6ca6aa] py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-black mb-6">
          Footwear &amp; Handbags | <span className="font-bold">Up to 70% off</span>
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                       bg-white bg-opacity-90 border border-gray-300
                       w-10 h-24 flex items-center justify-center
                       shadow hover:bg-gray-100"
          >
            <span className="text-2xl">&lt;</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                       bg-white bg-opacity-90 border border-gray-300
                       w-10 h-24 flex items-center justify-center
                       shadow hover:bg-gray-100"
          >
            <span className="text-2xl">&gt;</span>
          </button>

          {/* Viewport */}
          <div className="overflow-hidden px-8">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(products.length / VISIBLE_COUNT) * 100}%`,
                transform: `translateX(-${index * (100 / VISIBLE_COUNT)}%)`,
              }}
            >
              {products.map((item, i) => (
                <div key={i} className="w-1/5 px-2">
                  <div className="bg-white flex flex-col h-full">
                    {/* Image */}
                    <div className="w-full h-64 flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Text */}
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-800 line-clamp-2">
                        {item.title}
                      </p>

                      <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-xl font-semibold">{item.price}</span>
                        <span className="text-xs text-gray-500">
                          M.R.P:{" "}
                          <span className="line-through">{item.mrp}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
