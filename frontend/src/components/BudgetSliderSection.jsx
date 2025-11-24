import React, { useState } from "react";

const slides = [
  {
    title: "Starting ₹99",
    subtitle: "Budget store",
    line2: "Home, Kitchen & outdoor",
    bg: "https://images.pexels.com/photos/3736819/pexels-photo-3736819.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Starting ₹149",
    subtitle: "Big savings",
    line2: "Electronics & accessories",
    bg: "https://images.pexels.com/photos/3738115/pexels-photo-3738115.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Up to 70% off",
    subtitle: "Deals of the day",
    line2: "Fashion, beauty & more",
    bg: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

export default function BudgetSliderSection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides wrapper */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-[360px] md:h-[420px] bg-cover bg-center flex items-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
          >
            {/* Text box */}
            <div className="ml-6 md:ml-16 bg-white/85 px-5 py-4 max-w-md">
              <h2 className="text-2xl md:text-4xl font-bold">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg font-semibold mt-1">
                {slide.subtitle}
              </p>
              <p className="mt-1 text-sm md:text-base">{slide.line2}</p>

              <div className="flex flex-wrap gap-2 mt-4 text-[11px] md:text-xs">
                <span className="px-3 py-1 bg-yellow-400 font-semibold">
                  PAY ON DELIVERY
                </span>
                <span className="px-3 py-1 bg-yellow-400 font-semibold">
                  WIDE SELECTION
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left arrow */}
      <button
  onClick={prevSlide}
  className="absolute left-4 top-[35%] 
             -translate-y-1/2 
             h-24 w-12 
             flex items-center justify-center 
             border-none 
             text-4xl font-light 
             rounded-sm"
>
  ‹
</button>


 <button
  onClick={nextSlide}
  className="absolute right-4 top-[35%] 
             -translate-y-1/2 
             h-24 w-12 
             flex items-center justify-center 
             border-none 
             text-4xl font-light 
             rounded-sm"
>
  ›
</button>

    </div>
  );
}

