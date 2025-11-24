import React from "react";

export default function FourGridStyle3() {
  // you can replace all these image URLs + texts
  const keepShopping = [
    {
      img: "https://m.media-amazon.com/images/I/71vH7UuNGrL._AC_SY550_.jpg",
      title: "COOL AND CASUAL Dress",
      price: "₹639.00",
    },
    {
      img: "https://m.media-amazon.com/images/I/81t6A9tX7zL._AC_SY550_.jpg",
      title: "Leriya Fashion Midi…",
      price: "₹509.00",
    },
    {
      img: "https://m.media-amazon.com/images/I/71y7JtD3CGL._AC_SY550_.jpg",
      title: "Lymio Women Maxi…",
      price: "₹839.00",
    },
    {
      img: "https://m.media-amazon.com/images/I/71l8x3mXPiL._AC_SY550_.jpg",
      title: "Dream Beauty Fashio…",
      price: "₹264.00",
    },
  ];

  const mostLovedFashion = [
    "https://m.media-amazon.com/images/I/71vH7UuNGrL._AC_SY550_.jpg",
    "https://m.media-amazon.com/images/I/81t6A9tX7zL._AC_SY550_.jpg",
    "https://m.media-amazon.com/images/I/71y7JtD3CGL._AC_SY550_.jpg",
    "https://m.media-amazon.com/images/I/71l8x3mXPiL._AC_SY550_.jpg",
  ];

  return (
    <div className="bg-gray-700 py-4">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">

        {/* Card 1 – Keep shopping for */}
        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3">
            Keep shopping for
          </h2>

          <div className="space-y-3">
            {keepShopping.map((item, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-[90px] h-[100px] border border-gray-200 flex items-center justify-center bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-auto object-contain"
                  />
                </div>
                <div className="flex flex-col justify-between text-xs">
                  <p className="line-clamp-2">{item.title}</p>
                  <p className="font-semibold mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="text-sm text-[#007185] mt-4">
            See more
          </button>
        </div>

        {/* Card 2 – Indoor plants offer */}
        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3 leading-snug">
            Minimum 50% off | <br />
            Indoor plants
          </h2>

          <div className="border border-gray-200 h-[300px] flex items-center justify-center bg-white">
            <img
              src="https://m.media-amazon.com/images/I/71eQvTs56UL._AC_SY550_.jpg"
              alt="Indoor plants"
              className="h-full w-auto object-cover"
            />
          </div>

          <button className="text-sm text-[#007185] mt-4">
            See more
          </button>
        </div>

        {/* Card 3 – Customer Most-Loved Fashion for you */}
        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3 leading-snug">
            Customer Most-Loved <br />
            Fashion for you
          </h2>

          <div className="grid grid-cols-2 gap-4 mt-2 mb-6">
            {mostLovedFashion.map((img, i) => (
              <div
                key={i}
                className="h-[140px] flex items-center justify-center"
              >
                <img
                  src={img}
                  alt="fashion"
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>

          <button className="text-sm text-[#007185]">
            Explore more
          </button>
        </div>

        {/* Card 4 – International brands */}
        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="font-bold text-lg mb-3 leading-snug">
            Up to 50% off | <br />
            International brands
          </h2>

          <div className="border border-gray-200 h-[300px] flex items-center justify-center bg-white">
            <img
              src="https://m.media-amazon.com/images/I/71KYI8cdxHL._AC_SY550_.jpg"
              alt="International brands"
              className="h-full w-auto object-cover"
            />
          </div>

          <button className="text-sm text-[#007185] mt-4">
            See all offers
          </button>
        </div>
      </div>
    </div>
  );
}
