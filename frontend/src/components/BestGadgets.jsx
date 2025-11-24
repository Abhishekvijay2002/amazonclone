import { useRef } from "react";

export default function BestGadgets() {
  const sliderRef = useRef(null);

  const products = [
    {
      image: "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Computer%20Accessories%20and%20Tablets%20Accessories/Images/235874_tbvej8.png",
    },
    {
      image:
        "https://dlcdnwebimgs.asus.com/gain/B7AAEDB5-B790-4C4E-B921-296749E4C3EA/w717/h525",
    },
    {
      image: "https://m.media-amazon.com/images/I/61-K2lXmHQL.jpg",
    },
    {
      image:
        "https://m.media-amazon.com/images/I/61ERDR3tATL.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/81VKxjrWZdL.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYC-baXVP4MtQ8CC4bsRg2cY3lXNaGJJkEBQ&s",
    },
    {
      image:"https://www.coconutlife.in/cdn/shop/files/jpeg-optimizer_K20Wired.jpg?v=1703142603",
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/1603/9553/files/computer_accessories_for_vader_pro_wireless_mouse_480x480.webp?v=1726470102",
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

      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-xl font-semibold">
          Best Sellers in Computers and Accessories
        </div>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll("left")}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-10 h-12 w-10 border border-gray-400 bg-white hover:bg-gray-100"
        >
          ‹
        </button>

        {/* Image Slider */}
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

        {/* Right Arrow */}
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