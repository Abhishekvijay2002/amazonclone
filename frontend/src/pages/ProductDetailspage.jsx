// AmazonFashionProductPage.jsx
import React from "react";
import BrowsingHistory from "../components/BrowsingHistory";

export default function ProductDetailsPage() {
  return (
    <div>
    <div className="min-h-screen bg-white text-sm font-sans">
      {/* Top nav */}
      <header className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">amazon</span>
            <span className="uppercase text-xs tracking-wide">fashion</span>
          </div>

          <nav className="flex items-center gap-6 text-xs uppercase tracking-wide text-gray-700">
            <button className="hover:text-black">New</button>
            <button className="hover:text-black">Women</button>
            <button className="hover:text-black">Men</button>
            <button className="hover:text-black">Kids &amp; Baby</button>
            <button className="hover:text-black">Luggage Store</button>
            <button className="hover:text-black">Deals &amp; Outlet</button>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-4">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-600 mb-3">
          Fashion &gt; Women &gt; Clothing &gt; Dresses
        </div>

        {/* Main 3-column layout */}
        <div className="grid grid-cols-12 gap-6">
          {/* Left images column */}
          <section className="col-span-4 flex gap-3">
            {/* Thumbnails */}
            <div className="flex flex-col gap-2">
              {[1, 2, 3, 4].map((i) => (
                <button
                  key={i}
                  className="w-12 h-16 border border-gray-300 flex items-center justify-center"
                >
                  <img
                    src="/mnt/data/b1f7b73b-db6a-40b7-bd1e-3562c4fb5040.png"
                    alt="thumb"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src="/mnt/data/b1f7b73b-db6a-40b7-bd1e-3562c4fb5040.png"
                alt="WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress, Black"
                className="max-h-[520px] object-contain"
              />
            </div>
          </section>

          {/* Middle product info */}
          <section className="col-span-5 space-y-2">
            <p className="text-xs text-gray-500">
              Brand: <button className="text-[#007185]">WDIRARA</button>
            </p>

            <h1 className="text-xl font-semibold leading-snug">
              WDIRARA Women&apos;s Square Neck Puff Short Sleeve Cut Out Waist
              Tie Back Flared A Line Dress
            </h1>

            {/* Rating + link row */}
            <div className="flex items-center gap-2 text-xs mt-1">
              <span className="text-yellow-500">★★★★☆</span>
              <button className="text-[#007185] hover:underline">
                67 ratings
              </button>
              <span className="text-gray-400">|</span>
              <button className="text-[#007185] hover:underline">
                Share this page
              </button>
            </div>

            {/* Price block */}
            <div className="mt-3">
              <div className="flex items-baseline gap-1">
                <span className="text-xs align-top">SAR</span>
                <span className="text-2xl leading-none font-semibold">203</span>
                <span className="text-xs align-top">14</span>
              </div>
              <p className="text-xs text-gray-700 mt-1">
                All prices include VAT.
              </p>
            </div>

            {/* Promo text */}
            <div className="mt-3 text-xs space-y-1">
              <p>
                Sign in to redeem.{" "}
                <span className="bg-green-500 text-white px-1 rounded-sm font-semibold">
                  Extra 20% off
                </span>{" "}
                with meem credit cards.
              </p>
              <p>
                Enter code <span className="font-semibold">MEEM20</span> at
                checkout. Discount by Amazon.
              </p>
            </div>

            {/* Icons row */}
            <div className="mt-4 flex items-center gap-6 text-xs">
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 border rounded-full" />
                <span>Electronic</span>
                <span>payment only</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 border rounded-full" />
                <span>30 days</span>
                <span>Returnable</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-8 h-8 border rounded-full" />
                <span>Secure</span>
                <span>transaction</span>
              </div>
            </div>

            <hr className="my-4" />

            {/* Size / color / details */}
            <div className="text-xs space-y-1">
              <p>
                <span className="font-semibold">Size:</span> L
              </p>
              <p>
                <span className="font-semibold">Color:</span> Black
              </p>

              <p className="mt-3 font-semibold">Product details</p>
              <p>Material composition: 99% Polyester, 1% Elastane</p>
              <p>Closure type: Pull On</p>
              <p>Neck style: Scoop Neck</p>
              <p>Sleeve type: Short Sleeve</p>
            </div>

            <div className="mt-3 text-xs space-y-1">
              <p className="font-semibold">About this item</p>
              <ul className="list-disc ml-4 space-y-1">
                <li>Square neck with puff sleeves and cutout detail.</li>
                <li>Soft, slightly stretchy fabric for everyday comfort.</li>
                <li>
                  Suitable for holidays, dates, parties, vacation and weekend
                  casual looks.
                </li>
                <li>Machine wash or professional dry clean.</li>
              </ul>
            </div>
          </section>

          {/* Right buy box */}
          <aside className="col-span-3">
            <div className="border border-gray-300 rounded-sm p-4 space-y-3">
              {/* Price */}
              <div className="flex items-baseline gap-1">
                <span className="text-xs align-top">SAR</span>
                <span className="text-xl leading-none font-semibold">203</span>
                <span className="text-xs align-top">14</span>
              </div>
              <p className="text-xs text-gray-600">SAR 96 delivery 6-9 October.</p>
              <button className="text-xs text-[#007185]">Details</button>

              <p className="text-xs text-gray-800">
                Usually ships within 4 to 5 days
              </p>

              <p className="text-[11px] text-gray-700">
                Ships from outside the KSA.
              </p>

              {/* Qty */}
              <div className="mt-2 text-xs">
                <label className="block mb-1">Quantity: 1</label>
                <select className="w-full border border-gray-400 rounded px-2 py-1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>

              {/* Buttons */}
              <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-sm font-medium py-2 rounded-full">
                Add to Cart
              </button>
              <button className="w-full bg-[#ffa41c] hover:bg-[#f0900c] text-sm font-medium py-2 rounded-full">
                Buy Now
              </button>

              {/* Seller info */}
              <div className="text-[11px] space-y-1 pt-1">
                <p>
                  Ships from <span className="text-[#007185]">Monatik LLC</span>
                </p>
                <p>
                  Sold by <span className="text-[#007185]">Monatik LLC</span>
                </p>
                <p>
                  Payment <span className="text-[#007185]">Secure transaction</span>
                </p>
              </div>

              <button className="w-full border border-gray-400 rounded text-xs py-1 mt-1">
                Add to List
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
    <div className="w-full flex flex-col items-center justify-center py-3 text-sm">

  {/* See more */}
  <div className="flex items-center gap-1 text-[#007185] cursor-pointer mb-2">
    <span className="text-xs">⌄</span>
    <span>See more</span>
  </div>

  {/* Report issue */}
  <div className="flex items-center gap-2 text-[#007185] cursor-pointer">
    <img
      src="/mnt/data/fec51c6f-95e7-47b4-9d77-576ae7644daa.png"
      alt="report icon"
      className="w-5 h-5 object-contain"
    />
    <span>Report an issue with this product</span>
  </div>

</div>
 
 <div class="bg-white w-full max-w-5xl mx-auto p-4">
  <h2 class="text-lg font-bold border-t border-gray-300 pt-3">
    Product description
  </h2>

  <p class="text-sm text-gray-700 mt-2">
    Product Measurements: X-Small: Bicep Length: 20.7", Bust: 34.6", Cuff: 8.5", Hip Size: 48.8", Length: 32.1", Sleeve Length: 12.4", Waist Size: 25.2-37.8"
  </p>
  <p class="text-sm text-gray-700 mt-1">
    Small: Bicep Length: 21.3", Bust: 36.2", Cuff: 9.1", Hip Size: 50.4", Length: 32.5", Sleeve Length: 12.6", Waist Size: 26.8-39.4"
  </p>
  <p class="text-sm text-gray-700 mt-1">
    Medium: Bicep Length: 21.8", Bust: 37.8", Cuff: 9.6", Hip Size: 52.0", Length: 32.9", Sleeve Length: 12.8", Waist Size: 28.3-40.9"
  </p>
  <p class="text-sm text-gray-700 mt-1">
    Large: Bicep Length: 22.7", Bust: 40.2", Cuff: 10.5", Hip Size: 54.4", Length: 33.5", Sleeve Length: 13.1", Waist Size: 30.7-43.3"
  </p>

  <hr class="my-4 border-gray-300" />

  <h2 class="text-lg font-bold mb-2">Looking for specific info?</h2>

  <div class="relative w-full max-w-xl">
    <input
      type="text"
      placeholder="Search in reviews, Q&A..."
      class="w-full border border-gray-400 px-8 py-2 text-sm rounded-sm focus:outline-none"
    />
    <svg
      class="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24">
      <path d="M21 21l-4.35-4.35"></path>
      <circle cx="10" cy="10" r="7"></circle>
    </svg>
  </div>
  <hr class="my-4 border-gray-300" />

  <h2 class="text-lg font-bold">Product details</h2>

  <div class="text-sm text-gray-700 mt-2 space-y-1">
    <p><span class="font-semibold">Date First Available:</span> 12 July 2023</p>
    <p><span class="font-semibold">ASIN:</span> BOCPB16R2H</p>
    <p><span class="font-semibold">Department:</span> womens</p>

    <div class="flex items-center gap-2 mt-2">
      <span class="font-semibold">Customer reviews:</span>
      <span>4.1</span>
      <span class="text-yellow-500">★★★★★</span>
      <span class="text-blue-600 text-sm cursor-pointer">67 ratings</span>
    </div>
  </div>

</div>
<div class="w-full max-w-5xl mx-auto bg-white px-4 py-6 text-sm text-black">

  <div class="grid grid-cols-[260px,1fr] gap-8">
    <div>
      <h2 class="font-semibold text-base mb-1">Customer Reviews</h2>

      <div class="flex items-center gap-2">
        <span class="text-yellow-500 text-lg">★★★★☆</span>
        <span>4.1 out of 5</span>
      </div>

      <p class="text-xs text-gray-600 mt-1 mb-3">1 global rating</p>
      <div class="space-y-1 text-xs">
        <div class="flex items-center gap-2">
          <a class="w-10 text-[#007185]">5 star</a>
          <div class="flex-1 bg-gray-200 h-3 rounded">
            <div class="bg-orange-400 h-3 w-[0%] rounded"></div>
          </div>
          <span>0%</span>
        </div>

        <div class="flex items-center gap-2">
          <a class="w-10 text-[#007185]">4 star</a>
          <div class="flex-1 bg-gray-200 h-3 rounded">
            <div class="bg-orange-400 h-3 w-[71%] rounded"></div>
          </div>
          <span>71%</span>
        </div>

        <div class="flex items-center gap-2">
          <a class="w-10 text-[#007185]">3 star</a>
          <div class="flex-1 bg-gray-200 h-3 rounded">
            <div class="bg-orange-400 h-3 w-[0%] rounded"></div>
          </div>
          <span>0%</span>
        </div>

        <div class="flex items-center gap-2">
          <a class="w-10 text-[#007185]">2 star</a>
          <div class="flex-1 bg-gray-200 h-3 rounded">
            <div class="bg-orange-400 h-3 w-[6%] rounded"></div>
          </div>
          <span>6%</span>
        </div>

        <div class="flex items-center gap-2">
          <a class="w-10 text-[#007185]">1 star</a>
          <div class="flex-1 bg-gray-200 h-3 rounded">
            <div class="bg-orange-400 h-3 w-[0%] rounded"></div>
          </div>
          <span>0%</span>
        </div>
      </div>

      <a class="text-xs text-[#007185] mt-2 inline-block">How are ratings calculated?</a>
      <div class="mt-4 border-t pt-4">
        <p class="font-semibold">Reviews this product</p>
        <p class="text-xs text-gray-600 mb-2">Share your thoughts with other customers</p>
        <button class="w-full border border-gray-400 rounded py-1 bg-gray-100">
          Write a customer review
        </button>
      </div>
    </div>
    <div>
      <select class="border border-gray-300 px-2 py-1 text-xs mb-4">
        <option>Top reviews</option>
      </select>
      <div class="mb-4">
        <p class="font-semibold mb-1">Top reviews from Saudi Arabia</p>
        <div class="bg-gray-200 rounded px-3 py-2 text-xs">
          There are 0 reviews and 0 rating from Saudi Arabia
        </div>
      </div>
      <div class="mb-4">
        <p class="font-semibold mb-1">Top reviews from other countries</p>
        <button class="border border-gray-400 rounded-full px-3 py-1 text-xs bg-gray-100">
          Translate all reviews to English
        </button>
      </div>
      <div class="border-b pb-4 mb-4 space-y-1">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span class="font-semibold">Brooke</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-yellow-500">★★★★★</span>
          <span class="font-semibold">Favorite dress</span>
        </div>
        <p class="text-xs text-gray-600">Reviewed in the United States on 6 August 2024</p>
        <p class="text-xs text-orange-600">Verified Purchase</p>
        <p class="text-xs">
          Initially purchased this dress on sale. It turned out to be my favorite dress of this summer...
        </p>
        <p class="text-xs text-gray-500">Report</p>
      </div>
      <div class="border-b pb-4 mb-4 space-y-1">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span class="font-semibold">Elva S. D.</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-yellow-500">★★★★★</span>
          <span class="font-semibold">Lindo!!</span>
        </div>
        <p class="text-xs text-gray-600">Reviewed in Mexico on 11 August 2023</p>
        <p class="text-xs text-orange-600">Verified Purchase</p>
        <p class="text-xs">
          Bien hecho, bonita tela y bonita caída...
        </p>
        <p class="text-xs text-gray-500">Report</p>
      </div>
      <div class="border-b pb-4 mb-4 space-y-1">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span class="font-semibold">Ana Patricia Rodriguez</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-yellow-500">★★★★☆</span>
          <span class="font-semibold">COMODIDAD</span>
        </div>
        <p class="text-xs text-gray-600">Reviewed in the United States on 29 June 2023</p>
        <p class="text-xs text-orange-600">Verified Purchase</p>
        <p class="text-xs">
          ES LINDO COMODO Y LIGERO PARA CLIMA CALIDO...
        </p>
        <p class="text-xs text-gray-500">Report</p>
      </div>
      <div class="border-b pb-4 mb-4 space-y-1">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span class="font-semibold">Ivelisse</span>
        </div>
        <div class="flex items-center gap-1">
          <span class="text-yellow-500">★★★★★</span>
          <span class="font-semibold">Excellent dress</span>
        </div>
        <p class="text-xs text-gray-600">Reviewed in the United State on 3 April 2019</p>
        <p class="text-xs text-orange-600">Verified Purchase</p>
        <p class="text-xs">
          Lovely dress... I’m 5’1” with pear form body...
        </p>
        <p class="text-xs text-gray-500">Report</p>
      </div>
      <a class="text-xs text-[#007185]">See more reviews</a>

    </div>

  </div>
</div>
<BrowsingHistory/>
    </div>
  );
}
