import React, { useState } from "react";

const categories = [
  {
    title: "Sarees",
    priceLabel: "Under ₹499",
    img: "https://m.media-amazon.com/images/I/71hZD+1p4gL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Dresses",
    priceLabel: "Under ₹699",
    img: "https://m.media-amazon.com/images/I/81AkWhriEfL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Kurta Sets",
    priceLabel: "Under ₹499",
    img: "https://m.media-amazon.com/images/I/61HH50Vk2YL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Tops & T-Shirts",
    priceLabel: "Under ₹499",
    img: "https://m.media-amazon.com/images/I/81e09H5HnOL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "T-Shirt & Polos",
    priceLabel: "Under ₹399",
    img: "https://m.media-amazon.com/images/I/71zxv0a4FPL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    title: "Shirts",
    priceLabel: "Under ₹599",
    img: "https://m.media-amazon.com/images/I/6192-28IQ3L._AC_UL480_FMwebp_QL65_.jpg",
  },
];

const VISIBLE_COUNT = 4; // how many cards visible at once (desktop)

export default function DiscountedClothingSlider() {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(categories.length - VISIBLE_COUNT, 0);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // for bottom dots – number of "pages"
  const pages = Math.max(Math.ceil(categories.length / VISIBLE_COUNT), 1);
  const currentPage = Math.floor(index / VISIBLE_COUNT);

  return (
    <div className="w-full bg-orange-500 py-8">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Heading */}
        <h2 className="text-2xl font-semibold mb-6 text-black">
          Discounted Clothing
        </h2>

        {/* Slider wrapper */}
        <div className="relative">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-md border border-gray-200
                       w-10 h-20 flex items-center justify-center
                       hover:bg-gray-100"
          >
            <span className="text-2xl">&lt;</span>
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                       bg-white shadow-md border border-gray-200
                       w-10 h-20 flex items-center justify-center
                       hover:bg-gray-100"
          >
            <span className="text-2xl">&gt;</span>
          </button>

          {/* Visible area */}
          <div className="overflow-hidden px-12">
            {/* Track */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                width: `${(categories.length / VISIBLE_COUNT) * 100}%`,
                transform: `translateX(-${index * (100 / VISIBLE_COUNT)}%)`,
              }}
            >
              {categories.map((item, i) => (
                <div key={i} className="w-1/4 px-3">
                  <div className="bg-white flex flex-col items-center justify-between h-full">
                    {/* Image */}
                    <div className="w-full flex-1 flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="object-contain max-h-72"
                      />
                    </div>

                    {/* Text area */}
                    <div className="w-full text-center pb-6 pt-4 bg-[#fff5ed]">
                      <p className="text-2xl font-semibold mb-2">
                        {item.title}
                      </p>
                      <p className="text-xl text-orange-500 font-semibold">
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
