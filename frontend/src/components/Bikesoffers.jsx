import { useRef } from "react";

export default function Bikesoffers() {
  const sliderRef = useRef(null);

  const products = [
    {
      image: "https://cdn.bajajauto.com/-/media/images/bajajauto/bikes-container/pulsar-n160.webp",
    },
    {
      image:
        "https://shop.yamaha-motor-india.com/cdn/shop/files/METALLIC_SILVER_CYAN_1200x.webp?v=1754026443",
    },
    {
      image: "https://5.imimg.com/data5/SELLER/Default/2023/3/296512301/KC/YS/RW/187114653/yamaha-fz-x-ride-free-bike-500x500.jpg",
    },
    {
      image:
        "https://quickinsure.s3.ap-south-1.amazonaws.com/uploads/static_page/a83d207a-a933-41ac-a446-db9d23682693/Ktm%20Upcoming%20Bikes%20In%20India%202023%20New%20Launches%20And%20Bike%20Insurance.png",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdXE55THweUtTDWHUza8xNbnbIYMMCjfMn2g&s",
    },
    {
      image:
        "https://imgd.aeplcdn.com/664x374/n/ppdtkgb_1848454.jpg?q=80",
    },
    {
      image:
        "https://imgd.aeplcdn.com/664x374/n/lwasnfb_1825021.jpg?q=80",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJfLtba0f0GDjvqhM-3cTdu5fjE6Z6WpEuw&s",
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
          NO cost EMI up to 24 months | starting at ₹4,433 INR per month
        </div>
        <a
          href="#"
          className="text-sm text-[#007185] hover:text-[#c7511f]"
        >
          See all offers
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
