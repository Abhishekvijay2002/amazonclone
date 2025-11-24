import { useRef } from "react";

export default function KitchDealsSlider() {
  const sliderRef = useRef(null);

  const products = [
    {
      image: "https://m.media-amazon.com/images/I/71F3SBaazKL._SY879_.jpg",
    },
    {
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240222/AW2Z/65d7794605ac7d77bb71a39d/-473Wx593H-467096814-black-MODEL.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/71t3Xd7WglL._AC_SY741_.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBIZ0H0IL55MLCOCyWOIErq-mlsk1GZwjDwSCHolxs4LSjmWP",
    },
    {
      image: "https://m.media-amazon.com/images/I/71KVfHeBlbL._AC_SY550_.jpg",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDDyVrT2ksX5NfLfhI43UF_lTTr_qK4kTKYEVjAGQ70_F8Yk-U",
    },
    {
      image:
        "https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fdetailed%2F93%2Fcarlotta-4a1.jpg&w=3840&q=100",
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQEB8nps-fWgF-PEoiP51nO5oMp1jTUTxmFjTPW-xgzykrLoc5Z",
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
          Min. 50% off | Unique kitchen finds | Amazon Brands & more
        </div>
        <a
          href="#"
          className="text-sm text-[#007185] hover:text-[#c7511f]"
        >
          See all
        </a>
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
