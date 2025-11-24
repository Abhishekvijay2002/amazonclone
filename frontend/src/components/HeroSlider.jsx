import { useState } from "react";

const slides = [
  {
    id: 1,
    img: "/images/slide1.jpg", // put your Great Indian Festival banner here
    alt: "Great Indian Festival 1",
  },
  {
    id: 2,
    img: "/images/slide2.jpg",
    alt: "Great Indian Festival 2",
  },
  {
    id: 3,
    img: "/images/slide3.jpg",
    alt: "Great Indian Festival 3",
  },
  {
    id: 4,
    img: "/images/slide4.jpg",
    alt: "Great Indian Festival 4",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full bg-white">
      {/* Slider area */}
      <div className="relative max-w-[1500px] mx-auto">

        {/* Banner image */}
        <img
          src={slides[currentIndex].img}
          alt={slides[currentIndex].alt}
          className="w-full h-[360px] object-cover"
        />

        {/* Left arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 h-16 w-8 bg-white/80 hover:bg-white border border-gray-300 rounded-r flex items-center justify-center shadow"
        >
          <span className="text-2xl font-bold text-gray-700">‹</span>
        </button>

        {/* Right arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 h-16 w-8 bg-white/80 hover:bg-white border border-gray-300 rounded-l flex items-center justify-center shadow"
        >
          <span className="text-2xl font-bold text-gray-700">›</span>
        </button>
      </div>

      {/* Bottom white section with dots (like your image) */}
      <div className="w-full bg-white py-4 flex flex-col items-center gap-3">
        {/* (Optional) put bank offer text / logos here */}
        {/* <p className="text-xs text-gray-600">
          SBI Debit Card | 10% Instant Discount*
        </p> */}

        {/* Dots */}
        <div className="flex items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full border ${
                index === currentIndex
                  ? "bg-black border-black"
                  : "bg-gray-300 border-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
