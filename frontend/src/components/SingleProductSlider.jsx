import React, { useState, useEffect } from "react";

const products = [
  {
    title:
      "CHKOKKO Women's Round Neck Full Sleeves Gym Sports Regular Fit T-Shirt",
    rating: 3.9,
    ratingCount: "1,319",
    price: "₹509.00",
    extra: "Save ₹100 with coupon",
    img: "https://m.media-amazon.com/images/I/41WI7u+JDNL._AC_UY1100_.jpg",
  },
  {
    title: "Women's Active Dryfit Running T-Shirt",
    rating: 4.2,
    ratingCount: "2,014",
    price: "₹699.00",
    extra: "Limited time deal",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB4r2HXmos3qCede9cimp3mnSPCj4fVXIWLw&s",
  },
  {
    title: "Women's Long Sleeve Sports Top",
    rating: 4.0,
    ratingCount: "980",
    price: "₹599.00",
    extra: "FREE delivery by Tomorrow",
    img: "https://m.media-amazon.com/images/I/31Au3JXaK2L.jpg",
  },
];

export default function SingleProductSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === products.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const product = products[index];

  return (
    <div className="w-full bg-gray-700 py-6">
      <div className="max-w-5xl mx-auto">

        <div className="bg-white flex items-center gap-6 px-8 py-6 shadow transition-all duration-500">
      
          <div className="w-40 h-40 flex items-center justify-center">
            <img
              src={product.img}
              alt={product.title}
              className="h-full w-auto object-contain"
            />
          </div>

          <div className="flex-1 text-sm">
            <h2 className="font-semibold text-base mb-1">
              {product.title}
            </h2>

            <div className="flex items-center gap-1 text-xs mb-1">
              <span>{product.rating}</span>
              <span className="text-yellow-500">★★★★☆</span>
              <span className="text-[#007185]">
                {product.ratingCount}
              </span>
            </div>

            <p className="text-lg font-bold">{product.price}</p>
            <p className="mt-1 text-xs">{product.extra}</p>
          </div>

        </div>
      </div>
    </div>
  );
}
