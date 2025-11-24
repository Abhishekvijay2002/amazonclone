import React from "react";

export default function FourGridCategories() {
  const cards = [
    {
      title: "Automotive essentials| Up to 60% off",
      linkText: "See more",
      items: [
        {
          label: "Cleaning accessories",
          img: "https://m.media-amazon.com/images/I/71oUtxKQfTL._AC_SY200_.jpg",
        },
        {
          label: "Tyre & rim care",
          img: "https://m.media-amazon.com/images/I/81Uw1pT9pHL._AC_SY200_.jpg",
        },
        {
          label: "Helmets",
          img: "https://m.media-amazon.com/images/I/61ZrP5iK3ML._AC_SY200_.jpg",
        },
        {
          label: "Vacuum cleaner",
          img: "https://m.media-amazon.com/images/I/61rQYz9Qe+L._AC_SY200_.jpg",
        },
      ],
    },
    {
      title: "Up to 60% off | Styles for women",
      linkText: "End of season sale",
      items: [
        {
          label: "Women's Clothing",
          img: "https://m.media-amazon.com/images/I/71vH7UuNGrL._AC_SY200_.jpg",
        },
        {
          label: "Footwear+Handbags",
          img: "https://m.media-amazon.com/images/I/71t9dQ4F7IL._AC_SY200_.jpg",
        },
        {
          label: "Watches",
          img: "https://m.media-amazon.com/images/I/71IqV9vrFdL._AC_SY200_.jpg",
        },
        {
          label: "Fashion jewellery",
          img: "https://m.media-amazon.com/images/I/71T2Z+S0w-L._AC_SY200_.jpg",
        },
      ],
    },
    {
      title: "Starting ₹199 | Amazon Brands & more",
      linkText: "See more",
      items: [
        {
          label: "Starting ₹199 | Bedsheets",
          img: "https://m.media-amazon.com/images/I/81bL+np1uBL._AC_SY200_.jpg",
        },
        {
          label: "Starting ₹199 | Curtains",
          img: "https://m.media-amazon.com/images/I/81JYppVd7TL._AC_SY200_.jpg",
        },
        {
          label: "Minimum 40% off | Ironing board & more",
          img: "https://m.media-amazon.com/images/I/71Vx3F7Tz6L._AC_SY200_.jpg",
        },
        {
          label: "Up to 60% off | Home decor",
          img: "https://m.media-amazon.com/images/I/71n3CdpIc6L._AC_SY200_.jpg",
        },
      ],
    },
    {
      title: "Starting ₹99 | Home improvement essentials",
      linkText: "Explore more",
      items: [
        {
          label: "Spin mops, wipes & more",
          img: "https://m.media-amazon.com/images/I/71NwR2QUpPL._AC_SY200_.jpg",
        },
        {
          label: "Bathroom hardware & accessories",
          img: "https://m.media-amazon.com/images/I/71uZ2GvHdXL._AC_SY200_.jpg",
        },
        {
          label: "Hammers, screwdrivers & more",
          img: "https://m.media-amazon.com/images/I/71Rz9H2lM5L._AC_SY200_.jpg",
        },
        {
          label: "Extension boards, plugs & more",
          img: "https://m.media-amazon.com/images/I/61JYh7b1sBL._AC_SY200_.jpg",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-700 py-4">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white p-4 min-h-[460px]">
            {/* Title */}
            <h2 className="font-bold text-lg mb-3 leading-snug">
              {card.title}
            </h2>

            {/* 2x2 grid of categories */}
            <div className="grid grid-cols-2 gap-3">
              {card.items.map((item, i) => (
                <div key={i} className="w-full">
                  <div className="h-[120px] w-full flex items-center justify-center bg-white">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="text-xs mt-1 text-gray-800">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Link */}
            <button className="text-sm text-[#007185] mt-4">
              {card.linkText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
