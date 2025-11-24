import React, { useState } from "react";

const footwearItems = [
  {
    title: "Men’s Flip-Flops",
    priceLabel: "Under ₹399",
    img: "https://m.media-amazon.com/images/I/61H1dIgBq5L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Men’s Casual Footware",
    priceLabel: "Under ₹499",
    img: "https://m.media-amazon.com/images/I/71tUvFUt71L._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Men’s Sports Shoes",
    priceLabel: "Under ₹799",
    img: "https://m.media-amazon.com/images/I/71is9P6zCrL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Fashion Slippers",
    priceLabel: "Under ₹499",
    img: "https://m.media-amazon.com/images/I/71-lsFfV4aL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Heels & Sandals",
    priceLabel: "Under ₹499",
    img: "https://m.media-amazon.com/images/I/71eNw6dGpRL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Women’s Sports Shoes",
    priceLabel: "Under ₹799",
    img: "https://m.media-amazon.com/images/I/81g+R4ThZDL._AC_UL480_FMwebp_QL65_.jpg",
  },
];

const VISIBLE_COUNT = 4; // cards visible on desktop

export default function BestFootwearSlider() {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(footwearItems.length - VISIBLE_COUNT, 0);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const pages = Math.max(Math.ceil(footwearItems.length / VISIBLE_COUNT), 1);
  const currentPage = Math.floor(index / VISIBLE_COUNT);

  return (
    <div className="w-full bg-[#ffe2c9] py-8">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Heading */}
        <h2 className="text-3xl font-semibold mb-6 text-black">
          Best Of Footwear
        </h2>

        {/* Slider */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-md border border-gray-200
                       w-10 h-20 flex items-center justify-center
                       hover:bg-gray-100"
          >
            <span className="text-2xl">&lt;</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-md border border-gray-200
                       w-10 h-20 flex items-center justify-center
                       hover:bg-gray-100"
          >
            <span className="text-2xl">&gt;</span>
          </button>

          {/* Viewport */}
          <div className="overflow-hidden px-12">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(footwearItems.length / VISIBLE_COUNT) * 100}%`,
                transform: `translateX(-${index * (100 / VISIBLE_COUNT)}%)`,
              }}
            >
              {footwearItems.map((item, i) => (
                <div key={i} className="w-1/4 px-3">
                  <div className="bg-white rounded-3xl overflow-hidden flex flex-col h-full">
                    {/* Image area */}
                    <div className="flex-1 flex items-center justify-center py-6 bg-white">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="object-contain max-h-72"
                      />
                    </div>

                    {/* Title */}
                    <div className="bg-[#ffe2c9] text-center py-4">
                      <p className="text-xl font-medium text-gray-800">
                        {item.title}
                      </p>
                    </div>

                    {/* Price bar */}
                    <div className="bg-white text-center py-4">
                      <p className="text-2xl font-semibold text-orange-500">
                        {item.priceLabel}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-4">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i * VISIBLE_COUNT)}
                className={`w-3 h-3 rounded-full ${
                  i === currentPage ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
