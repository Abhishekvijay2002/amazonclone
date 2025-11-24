import { useRef } from "react";

export default function KitchDealsSlider() {
  const sliderRef = useRef(null);

  const products = [
    {
      image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSf-Jw0uHnmbXMdUlvJ_diY4qDKcnM2KVSv3UFI87XcHOaLYX-q-i6FH7r6gAnfpTCbVjBbfX4SV_R0qBADBHn7-qu2PylNaK2xgviqtRNGWGeT7iEhUo4j",
    },
    {
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmNMFzIyMMLXGgkZ3WTilYFNn2Rksqui5RvyJicvJtgsQ3F329KHEmYNwkamKGqNJMuqQ7q98qUA2y3Ok8lJDfaMMGcIypf6KY_8SZX7NX",
    },
    {
      image: "https://www.kuberindustries.co.in/uploads/kuberindustries/products/kuber-industries-multipurpose-3-tier-collapsible-plastic-racks-for-kitchen-storage--space-saving-spi-11318532370552705_l.jpg",
    },
    {
      image:
        "data:image/jpeg;base64,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",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQVEXphoywf80iWASO03iLJYrqTrF8QOx-3PJpnKas3PCHy5UFFogsfJ_A-a-zrQi2013vfQhyLf-1ne6WWtp__FMmfnizAZfMKoaaSzJKgnIR0A2HZleh9",
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTv0_usV9M7lqxX6vV8SWSU9Q8fk9tef7zoOD7BnFCTJQLA5iCs5x0a8DPZYgTWhmrgBkAn4YdwvIFSyRaKNt_2LB40v-884V6k9O95UGREo873twwfWUxW",
    },
    {
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnuHAmc9RJ8dmz4fIcsVO04317Ety1wIqb_-kKbZBLQjYC-Q6V_xZ7V7qJDrhqTzHzt4mzylmSnGN-SU4e9ikEM6BYjRBCxSKwN60GpCN0eqKcv5xAV5WKbg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSce0VYjghsT4eGQfJ0XGWZBApijSFNj_kYQQ_r4HTKQ2LZj0X1t2sDJkNoiJzVgRg8kQ2t3kTUzV7vfnR5-k5xEaz0_Oad0UM5U6cwXDvGglBEtO-WswnTTA",
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
          Min. 50% off | Unique kitchen finds | Amazon Brands & more
        </div>
        <a
          href="#"
          className="text-sm text-[#007185] hover:text-[#c7511f]"
        >
          See all
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
