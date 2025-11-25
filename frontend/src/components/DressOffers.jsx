import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function DressOffers() {
  const sliderRef = useRef(null);
   const navigate = useNavigate();


  const products = [
    {
      image: "https://previews.123rf.com/images/catalin205/catalin2051502/catalin205150200078/36344765-male-model-wearing-casual-business-clothes-and-shades-on-white-background.jpg",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/03/33/97/58/360_F_333975812_9ihpONGUuPzvsNhAp2ef89Fru79IcOkb.jpg",
    },
    {
      image: "https://images.pexels.com/photos/17311570/pexels-photo-17311570/free-photo-of-smiling-young-man-in-suit-posing-on-white-studio-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYF4pMgPkIUJFzZfqs0Mrgrf8P5kpth72kDQ&s",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkeJcA8E7ywosIqB6ZskA70FYBS3JCLQdw-Q&s",
    },
    {
      image:
        "https://styleunion.in/cdn/shop/files/SMCS00158BISON_1.jpg?v=1749377698&width=1024",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq6wmxtRsHR3aeWIrL0joG76a42EhrqnGOw&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvu1RklDU9DaOj_EbxlYW1MUVEnx9_FzjHckuUw2MWj80Km-v5XLxsCJXN-i_zDcqQluw&usqp=CAU",
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
         Bestselling in Clothing and Accessories
        </div>
        <a
          onClick={() => navigate("/product")}
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
              key={index} onClick={() => navigate("/product")}
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