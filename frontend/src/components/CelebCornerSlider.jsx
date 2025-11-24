import React, { useState } from "react";

const celebs = [
  {
    celebText: "From Kiara Advani’s Wardrobe",
    offer: "Starting ₹399",
    brand: "Libas",
    img: "https://m.media-amazon.com/images/I/71g8yA1QXcL._AC_UL480_.jpg",
  },
  {
    celebText: "From Arjun Rampal’s Wardrobe",
    offer: "Under ₹699",
    brand: "U.S. Polo Assn.",
    img: "https://m.media-amazon.com/images/I/81wVY36t3cL._AC_UL480_.jpg",
  },
  {
    celebText: "From MS Dhoni’s Wardrobe",
    offer: "Under ₹699",
    brand: "asian",
    img: "https://m.media-amazon.com/images/I/81h1zsL2PWL._AC_UL480_.jpg",
  },
  {
    celebText: "From Ananya Panday’s Wardrobe",
    offer: "Under ₹1,699",
    brand: "Timex",
    img: "https://m.media-amazon.com/images/I/71OS-XH3mVL._AC_UL480_.jpg",
  },
  {
    celebText: "From Varun Dhawan’s Wardrobe",
    offer: "Up To 70% Off",
    brand: "Skybags",
    img: "https://m.media-amazon.com/images/I/71vBIv2vl0L._AC_UL480_.jpg",
  },
  {
    celebText: "From Karishma Kapoor’s Wardrobe",
    offer: "Starting ₹199",
    brand: "Sukkhi",
    img: "https://m.media-amazon.com/images/I/71R4E0oSbML._AC_UL480_.jpg",
  },
];

const VISIBLE_COUNT = 6;

export default function CelebCornerSlider() {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(celebs.length - VISIBLE_COUNT, 0);
  const pages = Math.max(Math.ceil(celebs.length / VISIBLE_COUNT), 1);
  const currentPage = Math.floor(index / VISIBLE_COUNT);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className="w-full bg-black py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-white mb-6">Celeb Corner</h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       bg-white bg-opacity-90 border border-gray-300
                       w-10 h-24 flex items-center justify-center
                       shadow hover:bg-gray-100"
          >
            <span className="text-2xl">&lt;</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       bg-white bg-opacity-90 border border-gray-300
                       w-10 h-24 flex items-center justify-center
                       shadow hover:bg-gray-100"
          >
            <span className="text-2xl">&gt;</span>
          </button>

          {/* Viewport */}
          <div className="overflow-hidden px-12">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(celebs.length / VISIBLE_COUNT) * 100}%`,
                transform: `translateX(-${index * (100 / VISIBLE_COUNT)}%)`,
              }}
            >
              {celebs.map((item, i) => (
                <div
                  key={i}
                  className="px-2"
                  style={{
                    width: `${(VISIBLE_COUNT / celebs.length) * 100}%`,
                  }}
                >
                  <div className="bg-white flex flex-col h-full">
                    {/* Image + overlays */}
                    <div className="relative w-full h-80 overflow-hidden">
                      <img
                        src={item.img}
                        alt={item.celebText}
                        className="w-full h-full object-cover"
                      />

                      {/* SPONSORED tag */}
                      <div className="absolute bottom-16 left-0 bg-orange-500 text-white text-[10px] px-2 py-1 font-semibold">
                        SPONSORED
                      </div>

                      {/* Brand logo box */}
                      <div className="absolute bottom-4 left-0 bg-white px-3 py-1 text-xs font-semibold shadow">
                        {item.brand}
                      </div>
                    </div>

                    {/* Text area */}
                    <div className="bg-[#ffe9d6] px-3 py-3">
                      <p className="text-sm text-gray-800 mb-1">
                        {item.celebText}
                      </p>
                      <p className="text-lg font-semibold text-orange-500">
                        {item.offer}
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
                  i === currentPage ? "bg-white" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
