import { useRef } from "react";

export default function BrowsingHistory() {
  const sliderRef = useRef(null);

  const products = [
    {
      title:
        "COOL AND CASUAL Beach Wear for Women Co Ord Set 2 Piece Dress Shirt and Short Beach Dress",
      price: "₹714.00",
      ratings: "319 ratings",
      delivery: "FREE Delivery by Amazon",
      image: "https://m.media-amazon.com/images/I/71F3SBaazKL._SY879_.jpg",
    },
    {
      title:
        "Aahwan Solid Ditzy Floral Print Shirred Mini Cami Dress For Women's & Girl's",
      price: "₹499.00",
      ratings: "200+ ratings last month",
      delivery: "FREE Delivery",
      image:
        "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240222/AW2Z/65d7794605ac7d77bb71a39d/-473Wx593H-467096814-black-MODEL.jpg",
    },
    {
      title:
        "Indiglam Styles Beach Wear Multicolor Co Ord Set Two Piece Dress Top Short for Women",
      price: "₹989.00",
      ratings: "300+ viewed in past month",
      delivery: "FREE Delivery",
      image: "https://m.media-amazon.com/images/I/71t3Xd7WglL._AC_SY741_.jpg",
    },
    {
      title:
        "ALL YOURS Women's Floral Printed Dress | Floral Dresses for Women",
      price: "₹517.00",
      ratings: "60 ratings",
      delivery: "FREE Delivery by Amazon",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKBIZ0H0IL55MLCOCyWOIErq-mlsk1GZwjDwSCHolxs4LSjmWP",
    },
    {
      title: "Aahwan Women's Midi Fit And Flare Dress",
      price: "₹429.00",
      ratings: "200+ viewed in past month",
      delivery: "FREE Delivery",
      image: "https://m.media-amazon.com/images/I/71KVfHeBlbL._AC_SY550_.jpg",
    },
    {
      title:
        "Beach Dresses for Women Co Ord Set 2 Piece Dress Shirt and Short Beach Wear",
      price: "₹424.00 - ₹1,000.00",
      ratings: "200+ viewed in past month",
      delivery: "FREE Delivery",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTDDyVrT2ksX5NfLfhI43UF_lTTr_qK4kTKYEVjAGQ70_F8Yk-U",
    },
    {
      title:
        "SIGHTBOMB Tie Front Lace Up Back Fit And Flare Corset Elegance Chic Babydoll Dress",
      price: "₹799.00",
      ratings: "3.8 stars by 600+ viewers",
      delivery: "FREE Delivery",
      image:
        "https://dsh6y5eym1jrl.cloudfront.net/_next/image?url=https%3A%2F%2Fd166chel5lrjm5.cloudfront.net%2Fimages%2Fdetailed%2F93%2Fcarlotta-4a1.jpg&w=3840&q=100",
    },
    {
      title:
        "SERA Women's Soft Rayon Two Pc Summer Co-Ordinate Set Dress",
      price: "₹747.00 - ₹799.00",
      ratings: "3.9 stars by 1000+ viewers",
      delivery: "FREE Delivery",
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
    <div className="bg-white border border-gray-200 px-6 py-4">
      <h2 className="text-xl font-semibold mb-4">
        Inspired by your browsing history
      </h2>

      <div className="relative">
        {/* center dashed divider */}
        <div className="pointer-events-none absolute top-3 bottom-3 left-1/2 border-l border-dashed border-gray-300" />

        {/* Left arrow */}
        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 h-15 w-8 border border-gray-400 bg-white hover:bg-gray-100"
        >
          ‹
        </button>

        {/* SLIDER */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth px-10 py-2"
        >
          {products.map((item, index) => (
            <div
              key={index}
              className="min-w-[230px] max-w-[230px] shrink-0"
            >
              <div className="h-56 flex items-center justify-center mb-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full object-contain"
                />
              </div>

              <h3 className="text-xs text-[#007185] leading-tight line-clamp-2 hover:underline cursor-pointer">
                {item.title}
              </h3>

              <p className="mt-1 text-xs text-gray-700">
                ★★★★☆ {item.ratings}
              </p>

              <p className="text-base font-semibold mt-1">{item.price}</p>

              {item.delivery && (
                <p className="text-xs text-gray-700 mt-1">{item.delivery}</p>
              )}
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 h-15 w-8 border border-gray-400 bg-white hover:bg-gray-100"
        >
          ›
        </button>
      </div>
    </div>
  );
}
