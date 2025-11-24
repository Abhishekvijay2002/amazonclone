import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const slides = [
  {
    bg: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/ITD25/Thailand_Hero_PC_Imposible_3000x1200._CB778644489_.jpg",
  },
  {
    bg: "https://m.media-amazon.com/images/I/713Ok1LEUoL._SX3000_.jpg",
  },
  {
    bg: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg",
  },
];

export default function HeroBackgroundSlider() {

  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // optional: auto-play
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">

      {slides.map((slide, i) => (
        <div
          key={i}
          onClick={() => navigate("/product")}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-700 ease-out
          ${i === index ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
      ))}


      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-linear-to-t from-[#e3e6e6] to-transparent" />

      {/* Left arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-[20%]
                   h-24 w-12 sm:h-28 sm:w-14
                   flex items-center justify-center 
                   text-3xl sm:text-4xl font-light 
                   bg-black/10 hover:bg-black/20
                   rounded-sm"
      >
        ‹
      </button>

      {/* Right arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-[20%]
                   h-24 w-12 sm:h-28 sm:w-14
                   flex items-center justify-center 
                   text-3xl sm:text-4xl font-light 
                   bg-black/10 hover:bg-black/20
                   rounded-sm"
      >
        ›
      </button>
    </div>
  );
}
