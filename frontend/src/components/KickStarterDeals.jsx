// KickStarterDeals.jsx
const kickstarterItems = [
  {
    id: 1,
    title: "Clothing",
    img: "/images/kick-clothing.jpg",
  },
  {
    id: 2,
    title: "Luggage & bags",
    img: "/images/kick-luggage.jpg",
  },
  {
    id: 3,
    title: "Footwear",
    img: "/images/kick-footwear.jpg",
  },
  {
    id: 4,
    title: "Beauty",
    img: "/images/kick-beauty.jpg",
  },
  {
    id: 5,
    title: "Watches",
    img: "/images/kick-watches.jpg",
  },
  {
    id: 6,
    title: "Jewellery",
    img: "/images/kick-jewellery.jpg",
  },
];

export default function KickStarterDeals() {
  return (
    <div className="w-full bg-[#fbe9c9] py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col items-center">
          {/* Kickstarter label */}
          <div className="inline-flex items-center px-5 py-1 bg-linear-to-r from-red-600 to-orange-500 text-white font-extrabold tracking-[0.25em] uppercase text-xs rounded-sm shadow">
            <span className="mr-2 text-lg">🔥</span>
            <span>Kickstarter Deals</span>
          </div>

          {/* Subtitle */}
          <p className="mt-3 text-xl font-semibold text-gray-900">
            Top festive deals live early
          </p>

          {/* LIVE NOW badge */}
          <div className="mt-3">
            <span className="inline-flex items-center px-3 py-1 bg-[#f7e4a4] border border-yellow-700 rounded-sm text-xs font-semibold">
              <span className="h-2 w-2 rounded-full bg-red-600 mr-2"></span>
              LIVE NOW
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 flex gap-4 justify-center flex-wrap">
          {kickstarterItems.map((item) => (
            <div
              key={item.id}
              className="w-40 border border-[#f3c08f] bg-white overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute bottom-2 left-2 text-white text-sm font-semibold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
