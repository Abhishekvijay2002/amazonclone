import React, { useState } from "react";

const stores = [
  {
    name: "Gifting Store",
    img: "https://images.pexels.com/photos/1303081/pexels-photo-1303081.jpeg",
  },
  {
    name: "NEXT GEN STORE",
    img: "https://images.pexels.com/photos/7940622/pexels-photo-7940622.jpeg",
  },
  {
    name: "foreverwear",
    img: "https://images.pexels.com/photos/7671166/pexels-photo-7671166.jpeg",
  },
  {
    name: "THE TRAVEL STORE",
    img: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg",
  },
  {
    name: "Amazon Brands & More",
    img: "https://images.pexels.com/photos/3760851/pexels-photo-3760851.jpeg",
  },
  {
    name: "Customers’ Most-loved",
    img: "https://images.pexels.com/photos/1648383/pexels-photo-1648383.jpeg",
  },
  // extra items (for 2nd dot / page, optional)
  {
    name: "Kids Fashion Store",
    img: "https://images.pexels.com/photos/3662840/pexels-photo-3662840.jpeg",
  },
  {
    name: "Home Decor Store",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
];

const VISIBLE_COUNT = 6;

export default function ExploreMoreStoresSlider() {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(stores.length - VISIBLE_COUNT, 0);
  const pages = Math.max(Math.ceil(stores.length / VISIBLE_COUNT), 1);
  const currentPage = Math.floor(index / VISIBLE_COUNT);

  const handlePrev = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <div className="w-full bg-orange-500 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-semibold text-black mb-6">
          Explore More Stores
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10
                       bg-white bg-opacity-90 border border-gray-300
                       w-10 h-24 flex items-center justify-center
                       shadow hover:bg-gray-100"
          >
            <span className="text-2xl">&lt;</span>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10
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
                transform: `translateX(-${
                  index * (100 / VISIBLE_COUNT)
                }%)`,
              }}
            >
              {stores.map((store, i) => (
                <div
                  key={i}
                  style={{ flex: `0 0 ${100 / VISIBLE_COUNT}%` }}
                  className="px-2"
                >
                  <div className="bg-white h-full relative flex items-end overflow-hidden">
                    {/* Image */}
                    <img
                      src={store.img}
                      alt={store.name}
                      className="w-full h-full object-cover"
                    />

                    {/* White pill label at bottom */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                      <div className="bg-white rounded-full px-6 py-2 shadow text-center">
                        <p className="text-base font-semibold text-gray-800">
                          {store.name}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-6">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                onClick={() =>
                  setIndex(Math.min(i * VISIBLE_COUNT, maxIndex))
                }
                className={`w-3 h-3 rounded-full ${
                  i === currentPage ? "bg-black" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
