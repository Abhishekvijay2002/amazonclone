import React from "react";

export default function FourSectionGrid() {
  const data = [
    {
      title: "Best Sellers in Toys & Games",
      bigImage:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTejzPZodGVE_J9pFP7tdrwB45rPmqnjZGk83iKIQD4Cstfsz-T3oH0_RXBPg7BXoNS-TOo4zF9XppPwGHKNMnKzGd-7cmxlmSIbYb1Hh3ahWnWfD86zHxR",
      description:
        "Storio Rechargeable Toys Talking Cactus Baby Toys for Kids Dancing Cactus Toys...",
      price: "₹319.00",
      smallImages: [
        "https://assets.ajio.com/medias/sys_master/root/20241212/Qhit/675ac2840f47f80c87f407e2/-1117Wx1400H-4944450000-multi-MODEL.jpg",
        "https://m.media-amazon.com/images/I/61MgxgHYe0L.jpg",

        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQiquHR9I3PA7aHDASSYnzVBpL-Kh2JNlCRk8tw1tZd8r-XgfbhZn3gitFQFhjH8to1xP8Wqvkct79f6D8V__WSqyhn8G1f9YpmMnh-8oNAankVIVV7fbs1",
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcREAHy1Jt7Y6rpoDVy94JBtJHyPNJBRuIiPWO-r7czoQEXWXKW4cZRJ2X5M_Pin9z26Cez6KoN0GD-Za7F9nHBVgAakKpTqlUxiTekNt97RSFr8EFca1x5P1g",
      ],
      link: "Explore more",
    },
    {
      title: "Customers’ Most-Loved Products",

      images: [
        "https://m.media-amazon.com/images/I/31yUzU5r4oL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71w0UdhuyeL.jpg",
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRqd2Nw7kqhjCYHcvUQ8TJA4tovawigkxlPhNLe-2cdFDUktyRdVvGlbjY4Y3JeYYJECH-4JKwWxtBh4LSHBMv6MJODjgCq9SxN8hnd51XaT3SG6JVN3-WIUQ",
        "https://m.media-amazon.com/images/I/41uhF-aGlKL._SY300_SX300_QL70_FMwebp_.jpg",
      ],
      link: "Explore more",
    },
    {
      title: "Best Sellers in Beauty",
      images: [
        "https://m.media-amazon.com/images/I/61-0PgPQ4sL._SX679_PIbundle-5,TopRight,0,0_AA679SH20_.jpg",
        "https://m.media-amazon.com/images/I/41S0oF1u8CL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/41vJx8oMO7L._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/31Rl0Y1BVtL._SY300_SX300_QL70_FMwebp_.jpg",
      ],
      link: "Shop now",
    },
    {
      title: "Latest styles | Dresses, kurta & more",
      images: [
        {
          img: "https://m.media-amazon.com/images/I/71I53evweVL._SY879_.jpg",
          label: "Kurta & sets",
        },
        {
          img: "https://m.media-amazon.com/images/I/61nLQ9kLhmL._SY879_.jpg",
          label: "Tops",
        },
        {
          img: "https://m.media-amazon.com/images/I/61UtWCrDC6L._SY879_.jpg",
          label: "Dresses",
        },
        {
          img: "https://m.media-amazon.com/images/I/71HaXkez2wL._SY879_.jpg",
          label: "Sarees",
        },
      ],
      link: "See more",
    },
  ];

  return (
    <div className="bg-gray-700 py-4">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">

        <div className="bg-white p-4 min-h-[460px]">
          <h2 className="text-lg font-bold mb-3">{data[0].title}</h2>

          <div className="border border-gray-200 h-[220px] flex items-center justify-center bg-white">
            <img
              src={data[0].bigImage}
              className="h-full w-auto object-contain"
              alt=""
            />
          </div>

          <p className="text-sm mt-3 text-gray-700">{data[0].description}</p>

          <p className="font-semibold mt-1">{data[0].price}</p>

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
        {data.slice(1).map((section, idx) => (
          <div key={idx} className="bg-white p-4 min-h-[460px]">
            <h2 className="text-lg font-bold mb-3">{section.title}</h2>

            <div className="grid grid-cols-2 gap-3">
              {section.images?.map((item, i) => {

                const imgSrc = typeof item === "string" ? item : item.img;
                const label = typeof item === "string" ? "" : item.label;

                return (
                  <div key={i} className="w-full">
                    <div className="border border-gray-200 h-[150px] flex items-center justify-center bg-white overflow-hidden">
                      <img
                        src={imgSrc}
                        alt={label}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {label && (
                      <p className="text-xs mt-1 text-gray-900">{label}</p>
                    )}
                  </div>
                );
              })}
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
