import React from "react";
import { useNavigate } from "react-router-dom";

export default function FourGridCategories() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Automotive essentials | Up to 60% off",
      linkText: "See ",
      items: [
        {
          label: "Cleaning accessories",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg",
        },
        {
          label: "Tyre & rim care",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg",
        },
        {
          label: "Helmets", 
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg",
        },
        {
          label: "Vacuum cleaner",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg",
          
        },
      ],
    },
    {
      title: "Up to 60% off | Styles for women",
      linkText: "End of season sale",
      items: [
        {
          label: "Women's Clothing",
          img: "data:image/jpeg;base64,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",
        },
        {
          label: "Footwear+Handbags",
          img: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/29096044/2024/4/23/e1ebef15-72c8-41d0-a854-4a6aa70d349e1713849838316ForeverGlambyPantaloonsWomenColourblockedBallerinaswithBowsF1.jpg",
        },
        {
          label: "Watches",
          img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSwgM7VryUEnG7ggkN-6_hfDhyTj1-mZBeYn8VmNGFOjWlOfKqx",
        },
        {
          label: "Fashion jewellery",
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRDwCz9mrR-VNiTuvhS2G6VrzbuX5JzFq2kHmUbNkDHrauNiACx",
        },
      ],
    },
    {
      title: "Starting ₹199 | Amazon Brands & more",
      linkText: "See more",
      items: [
        {
          label: "Starting ₹199 | Bedsheets",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_2._SY116_CB567468236_.jpg",
        },
        {
          label: "Starting ₹199 | Curtains",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_3._SY116_CB567468236_.jpg",
        },
        {
          label: "Minimum 40% off | Ironing board & more",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_4._SY116_CB567468236_.jpg",
        },
        {
          label: "Up to 60% off | Home decor",
          img: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/PB/March/Bikram/PC_QC_HOME_SIZE_186_1._SY116_CB567468236_.jpg",
        },
      ],
    },
    {
      title: "Starting ₹99 | Home improvement essentials",
      linkText: "Explore more",
      items: [
        {
          label: "Spin mops, wipes & more",
          img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRwo2KOJqAUAbPSlX_5PHY7aouuAfOou1N1_-RTe0zi8fe3UnN0",
        },
        {
          label: "Bathroom hardware & accessories",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcVab-K1NLbGOnhh6PDKp23WCQb5SP3QlzypGZ9TB5Ijm8xHjC",
        },
        {
          label: "Hammers, screwdrivers & more",
          img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRELIOHKbFnxqbUQAxVO1ehx57tDMpvuzaG_hhsCUMfYPNLs1SM",
        },
        {
          label: "Extension boards, plugs & more",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf0_q_q7TLL_MiITe315i2Isng5eAoQo0-T5MsZ8vkX692vG1e",
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

            {/* Link */}
            <button className="text-sm text-[#007185] mt-4" onClick={() => navigate("/product")}>
              {card.linkText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
