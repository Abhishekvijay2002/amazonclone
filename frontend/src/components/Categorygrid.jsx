import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categorygrid() {

  const navigate = useNavigate();

  const cards = [
    {
      title: "Revamp your home in style",
      linkText: "Explore all",
      items: [
        {
          label: "Cushion covers, bedsheets & more",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg",
        },
        {
          label: "Cushion covers, bedsheets & more",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg",
        },
        {
          label: "Home storage",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg",
        },
        {
          label: "Lighting solution",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg",
        },
      ],
    },
    {
      title: "Appliances for your home | Up to 55% off",
      linkText: "see more",
      items: [
        {
          label: "Air conditioners",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
        },
        {
          label: "Refrigerators",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg",
        },
        {
          label: "Microwaves",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg",
        },
        {
          label: "Washing machines",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg",
        },
      ],
    },
    {
      title: "Starting $149 | Headphones",
      linkText: "See all offers",
      items: [
        {
          label: "Starting $249 | Boat",
          img: "data:image/png;base64,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",
        },
        {
          label: "Starting $349 | Boult",
          img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQdrkkcD1ttpbXV0qBulWYTtgZffbmEA7rA5woQq0SIChxXyqfR",
        },
        {
          label: "Starting $649 | Noise",
          
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISk9P0HQpyQ4sf8ViPD1cnADjZD7Ttl1oGcWof_qsiMx4ZYok",
        },
        {
          label: "Starting $149 | Zebronics",
          img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSUj3Rm5CFeh1k0wDlHIS6DjaiF-NcG9AtbC26cKMt_niQC5AUF",
        },
      ],
    },
    {
      title: "Starting $149 | Amazon Brands & more",
      linkText: "Shop now",
      items: [
        {
          label: "Starting $149 | Home storage & more",
          img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRSSVFPvGGgSPhqfKWcjmiWOA8e8eNT89XRlakVn25kUr27AuBP",
        },
        {
          label: " Up to 55% off | Storage & racks... ",
          img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKKD_hwYQ1h962c8G3Q6grajA2gKagSGrw0iMcAieQ9YSH9pY9",
        },
        {
          label: "Starting $99 | Toys & games",
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTbgUjB-fcujJf02hRs30hGfk0uk0LRKpISNK1Hox5-ddxjLU7l",
        },
        {
          label: "Up to 55% off | Jackets,dress &...",
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCSJaJua1rTQziKaLMia-J13j60IvXNLxGy_j7_1Jdhbz9kEfK",
        },
      ],
    },
  ];

  return (
    <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-2">
      {cards.map((card, idx) => (
        <div key={idx} className="bg-white p-4 min-h-[460px]">

          <h2 className="font-bold text-lg mb-3 leading-snug">
            {card.title}
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {card.items.map((item, i) => (
              <div key={i} className="w-full" onClick={() => navigate("/product")}>
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

          <button className="text-sm text-[#007185] mt-4" onClick={() => navigate("/product")}>
            {card.linkText}
          </button>
        </div>
      ))}
    </div>
  );
}
