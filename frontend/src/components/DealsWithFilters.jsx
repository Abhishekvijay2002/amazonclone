import React from "react";

const products = [
  {
    id: 1,
    title: "Pampers Active Baby Diapers, Small, 92 Count",
    img: "https://m.media-amazon.com/images/I/71-oP1Z8i1L._AC_UL480_.jpg",
  },
  {
    id: 2,
    title: "Men's Black Running Shoes with Cushioned Sole",
    img: "https://m.media-amazon.com/images/I/71xWG9xzXyL._AC_UL480_.jpg",
  },
  {
    id: 3,
    title: "Pampers Monthly Mega Box, Premium Care Pants",
    img: "https://m.media-amazon.com/images/I/61y8bPUh5EL._AC_UL480_.jpg",
  },
  {
    id: 4,
    title: "Safari Hard Shell Suitcase, 4 Wheel Trolley",
    img: "https://m.media-amazon.com/images/I/71xIo-kp4zL._AC_UL480_.jpg",
  },
  {
    id: 5,
    title: "3 Pc Red Luggage Set – Anti Skid Wheels",
    img: "https://m.media-amazon.com/images/I/71z8VfL+4HL._AC_UL480_.jpg",
  },
  {
    id: 6,
    title: "Men's Quilted Jacket – Lightweight & Warm",
    img: "https://m.media-amazon.com/images/I/71RUoF+fRkL._AC_UL480_.jpg",
  },
  {
    id: 7,
    title: "Sports Sneakers with Mesh Upper",
    img: "https://m.media-amazon.com/images/I/71erD3GJt+L._AC_UL480_.jpg",
  },
  {
    id: 8,
    title: "Travel Backpack with Laptop Compartment",
    img: "https://m.media-amazon.com/images/I/81nypFEXCGL._AC_UL480_.jpg",
  },
  {
    id: 9,
    title: "Men's Analog Watch with Leather Strap",
    img: "https://m.media-amazon.com/images/I/71tI10iZvZL._AC_UL480_.jpg",
  },
  {
    id: 10,
    title: "Cabin Trolley Suitcase with TSA Lock",
    img: "https://m.media-amazon.com/images/I/71Xf7cs4FBL._AC_UL480_.jpg",
  },
  {
    id: 11,
    title: "Pampers All-Round Protection Pants, XXL, 42 Count",
    img: "https://m.media-amazon.com/images/I/81GLuS9W6+L._AC_UL480_.jpg",
  },
  {
    id: 12,
    title: "Stylish Metal Strap Watch",
    img: "https://m.media-amazon.com/images/I/71r9vR1kKVL._AC_UL480_.jpg",
  },
];

export default function DealsWithFiltersAndScroll() {
  return (
    <div className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex gap-8">
        {/* LEFT FILTER SIDEBAR */}
        <aside className="w-64 shrink-0 text-sm">
          {/* Department */}
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-3">Department</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="dept"
                  defaultChecked
                  className="accent-teal-600"
                />
                <span>All</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="dept" className="accent-teal-600" />
                <span>Baby</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="dept" className="accent-teal-600" />
                <span>Bags, Wallets and Luggage</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="dept" className="accent-teal-600" />
                <span>Beauty</span>
              </label>
            </div>
          </div>

          {/* Customer Reviews */}
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-3">Customer Reviews</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="reviews"
                  defaultChecked
                  className="accent-teal-600"
                />
                <span>All</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="reviews" className="accent-teal-600" />
                <span>
                  <span className="text-yellow-400">★★★★☆</span> and up
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="reviews" className="accent-teal-600" />
                <span>
                  <span className="text-yellow-400">★★★☆☆</span> and up
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="reviews" className="accent-teal-600" />
                <span>
                  <span className="text-yellow-400">★★☆☆☆</span> and up
                </span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="reviews" className="accent-teal-600" />
                <span>
                  <span className="text-yellow-400">★☆☆☆☆</span> and up
                </span>
              </label>
            </div>
          </div>

          {/* Price */}
          <div className="mb-8">
            <h3 className="text-base font-semibold mb-3">Price</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="price"
                  defaultChecked
                  className="accent-teal-600"
                />
                <span>All</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="price" className="accent-teal-600" />
                <span>Under ₹500</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="price" className="accent-teal-600" />
                <span>Under ₹1,000</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="price" className="accent-teal-600" />
                <span>Under ₹2,000</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="price" className="accent-teal-600" />
                <span>₹5,000 and Above</span>
              </label>
            </div>
          </div>

          {/* Discount */}
          <div className="mb-4">
            <h3 className="text-base font-semibold mb-3">Discount</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="discount"
                  defaultChecked
                  className="accent-teal-600"
                />
                <span>All</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="discount" className="accent-teal-600" />
                <span>10% off or more</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="discount" className="accent-teal-600" />
                <span>25% off or more</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="discount" className="accent-teal-600" />
                <span>50% off or more</span>
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="discount" className="accent-teal-600" />
                <span>70% off or more</span>
              </label>
            </div>
          </div>
        </aside>

        {/* RIGHT – PRODUCT GRID (2x4 visible, rest scroll) */}
        <section className="flex-1">
          <h2 className="text-2xl font-semibold mb-6">Deals for you</h2>

          {/* fixed height: shows 8 cards (2 rows × 4 cols). 
              hide-scrollbar class makes scrollbar invisible */}
          <div className="h-[820px] overflow-y-auto hide-scrollbar">
            <div className="grid grid-cols-4 gap-x-8 gap-y-14">
              {products.map((product) => (
                <div key={product.id} className="flex flex-col">
                  {/* Image */}
                  <div className="w-full h-60 flex items-center justify-center">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="max-h-full object-contain"
                    />
                  </div>

                  {/* Deal badge */}
                  <div className="flex items-center gap-2 mt-3 text-xs">
                    <span className="bg-red-600 text-white font-semibold px-2 py-1 rounded">
                      72% off
                    </span>
                    <span className="text-red-600 font-semibold">
                      Limited time deal
                    </span>
                  </div>

                  {/* Title */}
                  <p className="mt-2 text-sm text-gray-900 line-clamp-2">
                    {product.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

