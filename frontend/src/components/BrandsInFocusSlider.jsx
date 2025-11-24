import React, { useState } from "react";

const brands = [
  {
    name: "ONLY",
    category: "SHIRTS, T-SHIRTS & MORE",
    offer: "Min. 50% Off",
    img: "https://m.media-amazon.com/images/I/71wVhODQGPL._AC_UL480_.jpg",
  },
  {
    name: "CROCS",
    category: "FOOTWEAR",
    offer: "Up To 60% Off",
    img: "https://m.media-amazon.com/images/I/71vmJmQxQML._AC_UL480_.jpg",
  },
  {
    name: "Dove",
    category: "BEAUTY",
    offer: "Up To 50% Off",
    img: "https://m.media-amazon.com/images/I/71jLQ4t9QPL._AC_UL480_.jpg",
  },
  {
    name: "Montley Trent",
    category: "WATCHES",
    offer: "Up To 40% Off",
    img: "https://m.media-amazon.com/images/I/61HPhkvtcVL._AC_UL480_.jpg",
  },
  {
    name: "RENÉE",
    category: "BEAUTY",
    offer: "Up To 30% Off",
    img: "https://m.media-amazon.com/images/I/61n5gpUO8VL._AC_UL480_.jpg",
  },
  {
    name: "DELSEY PARIS",
    category: "LUGGAGE",
    offer: "Up To 50% Off",
    img: "https://m.media-amazon.com/images/I/61Pr-Q6fSxL._AC_UL480_.jpg",
  },
];

const VISIBLE_COUNT = 6;

export default function BrandsInFocusSlider() {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(brands.length - VISIBLE_COUNT, 0);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const pages = Math.max(Math.ceil(brands.length / VISIBLE_COUNT), 1);
  const currentPage = Math.floor(index / VISIBLE_COUNT);

  return (
    <div className="w-full bg-white py-6">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-4">Brands in Focus</h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-md border border-gray-200
                       w-8 h-16 flex items-center justify-center
                       hover:bg-gray-100"
          >
            <span className="text-xl">&lt;</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-md border border-gray-200
                       w-8 h-16 flex items-center justify-center
                       hover:bg-gray-100"
          >
            <span className="text-xl">&gt;</span>
          </button>

          {/* Viewport */}
          <div className="overflow-hidden px-10">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(brands.length / VISIBLE_COUNT) * 100}%`,
                transform: `translateX(-${index * (100 / brands.length)}%)`,
              }}
            >
              {brands.map((brand, i) => (
                <div
                  key={i}
                  className="px-2"
                  style={{ width: `${100 / brands.length}%` }}
                >
                  <div className="bg-white border border-gray-200 shadow-sm flex flex-col h-full">
                    {/* Image with overlays */}
                    <div className="relative w-full overflow-hidden">
                      <img
                        src={brand.img}
                        alt={brand.name}
                        className="w-full h-56 object-cover"
                      />

                      {/* SPONSORED tag */}
                      <div className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] px-2 py-1 font-semibold">
                        SPONSORED
                      </div>

                      {/* Brand logo strip */}
                      <div className="absolute bottom-2 left-2 bg-white px-3 py-1 text-xs font-semibold shadow">
                        {brand.name}
                      </div>
                    </div>

                    {/* Text area */}
                    <div className="bg-[#f6e7d8] px-3 py-3">
                      <p className="text-xs tracking-wide text-gray-700 uppercase">
                        {brand.category}
                      </p>
                      <p className="text-sm font-semibold mt-1">
                        {brand.offer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-3 mt-3">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i * VISIBLE_COUNT)}
                className={`w-2.5 h-2.5 rounded-full ${
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
