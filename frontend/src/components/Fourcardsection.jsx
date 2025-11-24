import React from "react";

export default function FourSectionGrid() {
  const data = [
    {
      title: "Best Sellers in Toys & Games",
      bigImage:
        "https://m.media-amazon.com/images/I/61YVqHdFRxL._AC_SY679_.jpg",
      description:
        "Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing Cactus Toys...",
      price: "₹319.00",
      smallImages: [
        "https://m.media-amazon.com/images/I/71S5k9HGxTL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71WuX7VkqWL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/61Xxr6xkTLL._AC_SY200_.jpg",
        "https://m.media-amazon.com/images/I/71cQMXCLSvL._AC_SY200_.jpg",
      ],
      link: "Explore more",
    },
    {
      title: "Customers’ Most-Loved Products",
      images: [
        "https://m.media-amazon.com/images/I/71uVVaGKuIL._AC_SY679_.jpg",
        "https://m.media-amazon.com/images/I/71tO6N9J3rL._AC_SY679_.jpg",
        "https://m.media-amazon.com/images/I/71E+E7Ad5yL._AC_SY679_.jpg",
        "https://m.media-amazon.com/images/I/71YBKF7eGQL._AC_SY679_.jpg",
      ],
      link: "Explore more",
    },
    {
      title: "Best Sellers in Beauty",
      images: [
        "https://m.media-amazon.com/images/I/61l3j8DNtJL._AC_SY679_.jpg",
        "https://m.media-amazon.com/images/I/61XhQFDZf8L._AC_SY679_.jpg",
        "https://m.media-amazon.com/images/I/71vZk4CwKYL._AC_SY679_.jpg",
        "https://m.media-amazon.com/images/I/81zIcQx9x1L._AC_SY679_.jpg",
      ],
      link: "Shop now",
    },
    {
      title: "Latest styles | Dresses, kurta & more",
    images: [
    {
      img: "/mnt/data/f82bbdef-d1c5-4164-835f-8eef5c075df4.png",
      label: "Kurta & sets",
    },
    {
      img: "/mnt/data/f82bbdef-d1c5-4164-835f-8eef5c075df4.png",
      label: "Tops",
    },
    {
      img: "/mnt/data/f82bbdef-d1c5-4164-835f-8eef5c075df4.png",
      label: "Dresses",
    },
    {
      img: "/mnt/data/f82bbdef-d1c5-4164-835f-8eef5c075df4.png",
      label: "Sarees",
    },
  ],
      link: "See more",
    },
  ];

  return (
    <div className="bg-gray-700 py-4">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">

        {/* Card 1 (Special card with price + thumbnails) */}
        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="text-lg font-bold mb-3">
            {data[0].title}
          </h2>

          <div className="border border-gray-200 h-[220px] flex items-center justify-center bg-white">
            <img
              src={data[0].bigImage}
              className="h-full w-auto object-contain"
              alt=""
            />
          </div>

          <p className="text-sm mt-3 text-gray-700">
            {data[0].description}
          </p>

          <p className="font-semibold mt-1">
            {data[0].price}
          </p>

          <div className="flex gap-2 mt-3">
            {data[0].smallImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-10 h-10 border border-blue-400 rounded object-contain p-1"
              />
            ))}
          </div>
        </div>

        {/* Cards 2–4 (Amazon-style tall rectangles) */}
        {data.slice(1).map((section, idx) => (
          <div
            key={idx}
            className="bg-white p-4 min-h-[460px]"
          >
            <h2 className="text-lg font-bold mb-3">
              {section.title}
            </h2>

         <div className="grid grid-cols-2 gap-3">
  {section.images.map((item, i) => (
    <div key={i} className="w-full">
      
      {/* Image box */}
      <div className="border border-gray-200 h-[150px] flex items-center justify-center bg-white overflow-hidden">
        <img
          src={item.img}
          alt={item.label}
          className="h-full w-full object-cover"
        />
      </div>

      <p className="text-xs mt-1 text-gray-900">
        {item.label}
      </p>

    </div>
  ))}
</div>


            <button className="text-sm text-[#007185] mt-3">
              {section.link}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
