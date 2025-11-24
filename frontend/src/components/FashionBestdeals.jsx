import { useRef } from "react";

export default function FashionBestdeals() {
  const sliderRef = useRef(null);

  const products = [
    {
      image: "https://thumbs.dreamstime.com/b/fashion-pretty-cool-youngwith-shopping-bags-wearing-black-hat-white-pants-over-colorful-orange-background-79063329.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAKBDu1xJFda9CrR5H99Ae6VBUzjdhhMpqUw&s",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6S9pnV2qoOWDjpRUOVPFMsNaASvd87IjrOJhPTCWEiDczBQN4gTtJ6Y0KgIirs7lGFMc&usqp=CAU",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBIZ0H0IL55MLCOCyWOIErq-mlsk1GZwjDwSCHolxs4LSjmWP",
    },
    {
      image: "https://img.freepik.com/free-photo/fashion-girl-posing-studio-wearing-smart-casual-sportive-outfit-business-style-sweet-pastel-colors-sunglasses-backpack-denim-jacket-mint-background-stylish-woman_291049-1800.jpg",
    },
    {
      image:
        "https://sewguide.com/wp-content/uploads/2018/11/fashion-style144.jpg",
    },
    {
      image:
        "https://i.pinimg.com/736x/10/a5/2d/10a52d42256c7c43461bc79b4f0ec491.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD-M1fCPnfPDUgktHETxynrIvY-s0g_VVs3w&s",
    },
  ];

  const handleScroll = (direction) => {
    if (!sliderRef.current) return;
    const container = sliderRef.current;
    const scrollAmount =
      direction === "left" ? -container.clientWidth : container.clientWidth;

    container.scrollTo({
      left: container.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white border border-gray-300 mx-6 my-4 px-6 py-4">

      <div className="flex items-center justify-between mb-3">
        <div className="text-xl font-semibold">
         More items to consider 
        </div>
        <a
          href="#"
          className="text-sm text-[#007185] hover:text-[#c7511f]"
        >
          See all
        </a>
      </div>

      <div className="relative">

        <button
          onClick={() => handleScroll("left")}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-10 border border-gray-400 bg-white hover:bg-gray-100"
        >
          ‹
        </button>

        <div
          ref={sliderRef}
          className="flex gap-10 overflow-x-scroll scrollbar-hide scroll-smooth px-12 py-4"
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="min-w-[250px] flex items-center justify-center"
            >
              <img
                src={item.image}
                alt="product"
                className="h-64 object-contain"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll("right")}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-10 h-12 w-10 border border-gray-400 bg-white hover:bg-gray-100"
        >
          ›
        </button>
      </div>
    </div>
  );
}