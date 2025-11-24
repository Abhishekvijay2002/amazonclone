import React from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import BrowsingHistory from "../components/BrowsingHistory";
import KitchenMegaMenu from "../components/KitchenMegaMenu";
import LargeAppliancesMegaMenu from "../components/LargeAppliancesMegaMenu";

const PRODUCTS = [
  // 1 row
  {
    title:
      "Elica 60 cm 1200 m³/hr Filterless Autoclean Kitchen Chimney with 15 Years Warranty",
    price: "₹12,990",
    img: "https://m.media-amazon.com/images/I/61r0uPi0EkL._AC_SY200_.jpg",
    rating: "4.3",
    bought: "300+ bought in past month",
  },
  {
    title:
      "Godrej 1.5 Ton 3 Star, 5-in-1 Convertible, Inverter Split AC",
    price: "₹32,990",
    img: "https://m.media-amazon.com/images/I/61J9kZ9f43L._AC_SY200_.jpg",
    rating: "4.1",
    bought: "100+ bought in past month",
  },
  {
    title:
      "LG 28 L Convection Microwave Oven (Black, Quartz Heater)",
    price: "₹13,490",
    img: "https://m.media-amazon.com/images/I/71c5Zdh0pAL._AC_SY200_.jpg",
    rating: "4.4",
    bought: "600+ bought in past month",
  },
  {
    title:
      "Samsung 8 kg, 5 star, Eco Bubble Tech, Fully-Automatic Top Load Washing Machine",
    price: "₹19,990",
    img: "https://m.media-amazon.com/images/I/61qBWs2G1WL._AC_SY200_.jpg",
    rating: "4.5",
    bought: "1K+ bought in past month",
  },
  // 2nd row
  {
    title:
      "Samsung 7 kg, Eco Bubble Tech, Fully-Automatic Top Load Washing Machine",
    price: "₹17,990",
    img: "https://m.media-amazon.com/images/I/61Qv8Z0FsoL._AC_SY200_.jpg",
    rating: "4.3",
    bought: "600+ bought in past month",
  },
  {
    title:
      "Samsung 7 kg, 5 star, Inverter Fully-Automatic Top Load Washing Machine",
    price: "₹16,590",
    img: "https://m.media-amazon.com/images/I/61z4Gq3MiCL._AC_SY200_.jpg",
    rating: "4.2",
    bought: "5K+ bought in past month",
  },
  {
    title:
      "LG 6.5 kg 5 Star Inverter TurboDrum Fully Automatic Top Load Washing Machine",
    price: "₹16,490",
    img: "https://m.media-amazon.com/images/I/71-HH+3rbfL._AC_SY200_.jpg",
    rating: "4.4",
    bought: "3K+ bought in past month",
  },
  {
    title:
      "Godrej 6.5 kg 5 Star i-Wash Technology Fully Automatic Top Load Washing Machine",
    price: "₹12,990",
    img: "https://m.media-amazon.com/images/I/71A12QKzFOL._AC_SY200_.jpg",
    rating: "4.1",
    bought: "1K+ bought in past month",
  },
  // 3rd row
  {
    title:
      "IFB 30 L Convection Microwave Oven with Steam Clean",
    price: "₹15,990",
    img: "https://m.media-amazon.com/images/I/51sn1hyF2JL._AC_SY200_.jpg",
    rating: "4.2",
    bought: "400+ bought in past month",
  },
  {
    title:
      "Samsung 28 L Convection Microwave Oven, Slim Fry Technology",
    price: "₹13,250",
    img: "https://m.media-amazon.com/images/I/51Vpgc+NirL._AC_SY200_.jpg",
    rating: "4.3",
    bought: "500+ bought in past month",
  },
  {
    title:
      "Panasonic 27 L Convection Microwave Oven with Auto Cook Menus",
    price: "₹12,850",
    img: "https://m.media-amazon.com/images/I/71cV9N0Cr0L._AC_SY200_.jpg",
    rating: "4.1",
    bought: "300+ bought in past month",
  },
  {
    title:
      "LG 32 L Charcoal Convection Microwave Oven",
    price: "₹17,450",
    img: "https://m.media-amazon.com/images/I/71BQ2aHXGJL._AC_SY200_.jpg",
    rating: "4.4",
    bought: "200+ bought in past month",
  },
  // duplicate some rows to make page tall (just for layout demo)
  // you can remove duplicates and replace with real items
  // row 4–6 just reuse above items:
  // spread operator:
  // ...PRODUCTS, ...
];

export default function AppliancePage() {
  // just repeat product list to make long page, like screenshot
  const list = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

  return (
    <div>
      <MainHeader/>

      {/* top */}
<div className="w-full bg-white border-b">
      <div className="max-w-[1400px] mx-auto px-4 py-2">
        <div className="flex gap-5 text-sm text-gray-600">

          <span className="font-semibold text-black cursor-pointer">
            Amazon Home
          </span>

              <div className="relative group">
            <button className="cursor-pointer hover:text-black">
              Kitchen &amp; Home Appliances
            </button>
            <KitchenMegaMenu />
          </div>

          <div className="relative group">
            <button className="cursor-pointer hover:text-black">
              Large Appliances
            </button>
            <LargeAppliancesMegaMenu />
          </div>

          <span className="cursor-pointer hover:text-black">
            Kitchen & Dining
          </span>

          <span className="cursor-pointer hover:text-black">
            Furniture
          </span>

          <span className="cursor-pointer hover:text-black">
            Home Furnishing
          </span>

          <span className="cursor-pointer hover:text-black">
            Home Decor
          </span>

          <span className="cursor-pointer hover:text-black">
            Home Improvement
          </span>

          <span className="cursor-pointer hover:text-black">
            Garden Outdoor
          </span>

          <span className="cursor-pointer hover:text-black">
            Storage & Organisation
          </span>

        </div>
      </div>
    </div>
      {/* end */}
    <div className="bg-white min-h-screen px-4 py-3">
      <div className="max-w-[1500px] mx-auto flex gap-6">

{/* ========== LEFT SIDEBAR FILTERS ========== */}
<aside className="w-[260px] hidden md:block text-xs leading-relaxed">
  <div className="space-y-6">

    {/* Delivery Day */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Delivery Day</h3>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="deliveryDay"
          className="accent-yellow-500"
        />
        <span>Get it in 2 Days</span>
      </label>
    </section>

    {/* Customer Reviews */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Customer Reviews</h3>
      <button className="flex items-center gap-1 cursor-pointer">
        <span className="text-[13px] text-[#ffa41c]">★★★★☆</span>
        <span className="text-[12px] text-[#007185]">&amp; up</span>
      </button>
    </section>

    {/* Brands */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Brands</h3>
      <div className="space-y-1">
        {["Samsung", "LG", "Haier", "Daikin", "Godrej", "IFB", "Panasonic"].map(
          (brand) => (
            <label
              key={brand}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="brand"
                className="accent-yellow-500"
              />
              <span>{brand}</span>
            </label>
          )
        )}
      </div>
    </section>

    {/* Price */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Price</h3>
      <div className="space-y-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            defaultChecked
            className="accent-yellow-500"
          />
          <span>All</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="accent-yellow-500" />
          <span>₹5,900 to ₹10,000</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="accent-yellow-500" />
          <span>₹10,000 to ₹20,000</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="accent-yellow-500" />
          <span>₹20,000 to ₹30,000</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="accent-yellow-500" />
          <span>₹30,000 to ₹45,000</span>
        </label>
      </div>
    </section>

    {/* Deals & Discount */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Deals &amp; Discount</h3>
      <div className="space-y-1">
        <button className="block text-[#007185] hover:text-[#c7511f]">
          All Discounts
        </button>
        <button className="block text-[#007185] hover:text-[#c7511f]">
          Today&apos;s Deals
        </button>
      </div>
    </section>

    {/* Item Condition */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Item Condition</h3>
      <p>New</p>
    </section>

    {/* Pay on Delivery */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Pay on Delivery</h3>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          name="pod"
          className="accent-yellow-500"
        />
        <span>Eligible for Pay On Delivery</span>
      </label>
    </section>

    {/* Discount */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Discount</h3>
      <div className="space-y-1">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="discount"
            defaultChecked
            className="accent-yellow-500"
          />
          <span>All</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="discount" className="accent-yellow-500" />
          <span>10% off or more</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="discount" className="accent-yellow-500" />
          <span>25% off or more</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="discount" className="accent-yellow-500" />
          <span>50% off or more</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="discount" className="accent-yellow-500" />
          <span>70% off or more</span>
        </label>
      </div>
    </section>

    {/* Seller */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Seller</h3>
      <div className="space-y-1">
        {[
          "DAWNTECH ELECTRONICS PRIVATE LIMITED",
          "Inifiniti E Retail",
          "DIGI WORLD ELECTRONICS",
          "Kitchen Brand Store",
          "LOWPRICE DEALZ",
        ].map((seller) => (
          <label
            key={seller}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="seller"
              className="accent-yellow-500"
            />
            <span>{seller}</span>
          </label>
        ))}
      </div>
    </section>

    {/* Availability */}
    <section>
      <h3 className="font-bold mb-1 text-[13px]">Availability</h3>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="accent-yellow-500"
        />
        <span>Include Out of Stock</span>
      </label>
    </section>

  </div>
</aside>

        {/* ========== RIGHT PRODUCT GRID ========== */}
        <main className="flex-1">
          {/* Top bar (optional) */}
          <div className="flex justify-between items-center mb-3 text-sm">
            <p>1–24 of {list.length} results for <b>“washing machine”</b></p>
            <select className="border border-gray-300 rounded px-2 py-1 bg-white">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Avg. Customer Review</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {list.map((product, i) => (
              <article
                key={i}
                className="border border-gray-200 p-3 flex flex-col justify-between"
              >
                {/* Image */}
                <div className="h-[180px] flex items-center justify-center mb-2">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-full object-contain"
                  />
                </div>

                {/* Title */}
                <p className="text-sm leading-snug line-clamp-3">
                  {product.title}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mt-1 text-xs">
                  <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
                  <span className="text-blue-600">({product.rating})</span>
                </div>

                {/* Bought */}
                <p className="text-[11px] text-gray-600 mt-1">
                  {product.bought}
                </p>

                {/* Price */}
                <p className="text-lg font-bold mt-2">
                  {product.price}
                  <span className="align-top text-[11px] font-normal"> (40% off)</span>
                </p>

                {/* Delivery */}
                <p className="text-[11px] mt-1">
                  FREE delivery by <span className="font-semibold">Sat, 14 Sept</span>, 7:00 am – 9:00 pm
                </p>

                {/* Add to cart */}
                <button className="mt-3 bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] text-xs py-1 rounded">
                  Add to cart
                </button>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
    {/* privious */}
    <div className="w-full flex justify-center py-8">
      <div className="flex items-center border border-gray-400 rounded-md overflow-hidden text-sm">

        {/* Previous */}
        <button className="px-4 py-2 text-gray-500 hover:bg-gray-100 flex items-center gap-1">
          <span className="text-lg">‹</span> Previous
        </button>

        {/* Page number */}
        <div className="px-4 py-2 border-l border-r border-gray-400 font-bold">
          1
        </div>

        {/* Next */}
        <button className="px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
          Next <span className="text-lg">›</span>
        </button>

      </div>
    </div>
    <BrowsingHistory/>
          <div className="bg-white border-t border-b border-gray-200 py-2">
        <div className="max-w-md mx-auto text-center">
          <p className="text-base font-semibold">
            See personalized recommendations
          </p>
          <button className="mt-3 bg-[#ffd814] hover:bg-[#f7ca00] 
  border-2 border-[#ffb700] rounded text-base font-semibold 
  py-1 px-30 mx-auto block">
            Sign in
          </button>
          <p className="text-base mt-2">
            New customer?{" "}
            <a
              href="#"
              className="text-[#007185] hover:text-[#c7511f]"
            >
              Start here.
            </a>
          </p>
        </div>
      </div>
      <div className="grow h-px bg-gray-300 mb-5"></div>
    <MainFooter/>
    </div>
  );
}
