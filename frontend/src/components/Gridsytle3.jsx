import React from "react";

export default function FourGridStyle3() {
  // you can replace all these image URLs + texts
  const keepShopping = [
    {
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1ufck4EYFKaGuiudcTLngTcF6ePC2mpOduNTP_qLolV08B9OAa03Es2bj8ttZ_1JCdivDb8c0kqsfGrWeGRKpLVt0Xw0ixTVDSM7oQd2H",
      title: "COOL AND CASUAL Dress",
      price: "₹639.00",
    },
    {
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkt_RMc6oMRXEt9Lrfjdm8KOc8YLff2DrvR-SEOjdaD9M5vEtb1YYJMFetrMQQqag72OeozbXqSeli4SkaOaORt8QTggxLqMYVEmjDqcOiBorErqtBMeZccDI",
      title: "Leriya Fashion Midi…",
      price: "₹509.00",
    },
    {
      img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSMFuyYpBIxWXZbNjnwryx5XgJpDnBcKoPj1nAo5YON8AY2O3DiZy9VNGusrJCHvXBO76GQXTgIpxMaWHpeJ0AD_ayL-ot_OTvsiVppBBmhtqB5dxtGmzGSf90",
      title: "Lymio Women Maxi…",
      price: "₹839.00",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS46Ez1sy7V842_mABsZe3kFs0UvFMtCheHndZ0oH84GGCFQNGGxGCTcpBU3YhjWvC5zmwJbwpDAf-zafBSRYUO_kLsPe2ff2ZtZoG2T5x42bWN7cnkbdra",
      title: "Dream Beauty Fashio…",
      price: "₹264.00",
    },
  ];

  const mostLovedFashion = [
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR24Pv52_g-frw0RJJWwHuUjxaFnOl4Scn3rJWxp1ZKMPXCk3kxro7VOTrv0nsTPUewaMEF0mT5vSKkD-aHEsPn8ohj14EFlg",
    "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTp7IJsHlTF5NG3l3WPK929Jj0cHRnCvceiv-pNg10ZV270WirElk-PbD77UlIoW6CWm_4giBa-Vj4HJ3ot3atNI0CzaN76yrKBHrvC9HC8PzptRf7DiXyTYA",
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR8-BhZilQcvDlDdqgMzKywMfvpQllZqS-o3UqgoqitEJ_STQCikF81CAXg4bBrfbLgp4An9Tz63nN13J_1KDy9t2sKjGcVA2NkgPMhIINXpP-QszAY3oS_",
    "https://images.meesho.com/images/products/161724841/d6hz7_512.avif?width=512",
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
              src="https://m.media-amazon.com/images/I/51SP7RHxpcL._AC_UF1000,1000_QL80_.jpg"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuNi41m5JlkngMtghg3mG14CHDtMMdNOF76Q&s"
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
