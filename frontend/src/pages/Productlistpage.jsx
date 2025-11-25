
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BrowsingHistory from "../components/BrowsingHistory";
import KitchenMegaMenu from "../components/KitchenMegaMenu";
import LargeAppliancesMegaMenu from "../components/LargeAppliancesMegaMenu";

import { listProducts, addToCart } from "../Services/UserApi";

function Productlistpage() {
  const navigate = useNavigate();

    useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, []);

  const [products, setProducts] = useState([]);
  const [priceFilter, setPriceFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getNumericPrice = (price) => {
    if (typeof price === "number") return price;
    if (!price) return 0;
    const cleaned = price.toString().replace(/[^\d.]/g, "");
    const num = Number(cleaned);
    return Number.isNaN(num) ? 0 : num;
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await listProducts(); 
        setProducts(res.data.products || res.data || []);
      } catch (err) {
        console.error("Error loading products:", err);
        setError(
          err?.response?.data?.error ||
            err?.response?.data?.message ||
            "Failed to load products."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const filteredProducts = products.filter((p) => {
    const price = getNumericPrice(p.price);

    if (priceFilter === "low") {
      return price >= 5000 && price <= 15000;
    }
    if (priceFilter === "high") {
      return price > 15000;
    }
    return true;
  });

  const handleCardClick = (id) => {
    if (!id) return;

    navigate(`/product/${id}`);
  };

  const handleAddToCart = async (e, id) => {
    e.stopPropagation(); 
    if (!id) return;

    try {
      await addToCart(id);
      alert("Product added to cart ✅");
    } catch (err) {
      console.error("Error adding to cart:", err);
      alert(
        err?.response?.data?.error ||
          err?.response?.data?.message ||
          "Failed to add to cart"
      );
    }
  };

  return (
    <div>

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
              Kitchen &amp; Dining
            </span>
            <span className="cursor-pointer hover:text-black">Furniture</span>
            <span className="cursor-pointer hover:text-black">
              Home Furnishing
            </span>
            <span className="cursor-pointer hover:text-black">Home Decor</span>
            <span className="cursor-pointer hover:text-black">
              Home Improvement
            </span>
            <span className="cursor-pointer hover:text-black">
              Garden Outdoor
            </span>
            <span className="cursor-pointer hover:text-black">
              Storage &amp; Organisation
            </span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="bg-white min-h-screen px-4 py-3">
        <div className="max-w-[1500px] mx-auto flex gap-6">
          {/* LEFT FILTERS */}
          <aside className="w-[260px] hidden md:block text-xs leading-relaxed">
            <div className="space-y-6">
              <section>
                <h3 className="font-bold mb-1 text-[13px]">Price</h3>
                <div className="space-y-1">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      className="accent-yellow-500"
                      checked={priceFilter === "all"}
                      onChange={() => setPriceFilter("all")}
                    />
                    <span>All</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      className="accent-yellow-500"
                      checked={priceFilter === "low"}
                      onChange={() => setPriceFilter("low")}
                    />
                    <span>₹5,000 – ₹15,000</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="price"
                      className="accent-yellow-500"
                      checked={priceFilter === "high"}
                      onChange={() => setPriceFilter("high")}
                    />
                    <span>Above ₹15,000</span>
                  </label>
                </div>
              </section>
            </div>
          </aside>

          {/* RIGHT PRODUCT GRID */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-3 text-sm">
              <p>
                Showing {filteredProducts.length} of {products.length} results
              </p>

              <select className="border border-gray-300 rounded px-2 py-1 bg-white">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Avg. Customer Review</option>
                <option>Newest Arrivals</option>
              </select>
            </div>

            {loading && (
              <p className="text-center text-sm text-gray-500">
                Loading products…
              </p>
            )}
            {error && !loading && (
              <p className="text-center text-sm text-red-500">{error}</p>
            )}
            {!loading && !error && filteredProducts.length === 0 && (
              <p className="text-center text-sm text-gray-500">
                No products found for this filter.
              </p>
            )}

            {!loading && !error && filteredProducts.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map((product, i) => {
                  let imageSrc = product.img || product.image;
                  if (Array.isArray(product.image)) {
                    imageSrc =
                      product.image[0]?.url || product.image[0] || imageSrc;
                  }

                  const rating =
                    product.averageRating ?? product.rating ?? "4.3";

                  const boughtText =
                    product.bought ||
                    (product.totalSold
                      ? `${product.totalSold}+ bought in past month`
                      : "");

                  const id = product._id || product.id || i;

                  return (
                    <article
                      key={id}
                      onClick={() => handleCardClick(id)}
                      className="border border-gray-200 p-3 flex flex-col justify-between cursor-pointer hover:shadow-sm"
                    >
                      <div className="h-[180px] flex items-center justify-center mb-2">
                        {imageSrc && (
                          <img
                            src={imageSrc}
                            alt={product.title}
                            className="h-full object-contain"
                          />
                        )}
                      </div>

                      <p className="text-sm leading-snug line-clamp-3">
                        {product.title}
                      </p>

                      <div className="flex items-center gap-1 mt-1 text-xs">
                        <span className="text-yellow-500">⭐⭐⭐⭐☆</span>
                        <span className="text-blue-600">({rating})</span>
                      </div>

                      {boughtText && (
                        <p className="text-[11px] text-gray-600 mt-1">
                          {boughtText}
                        </p>
                      )}

                      <p className="text-lg font-bold mt-2">
                        ₹{getNumericPrice(product.price)}
                        <span className="align-top text-[11px] font-normal">
                          {" "}
                          (40% off)
                        </span>
                      </p>

                      <button
                        className="mt-3 bg-[#ffd814] hover:bg-[#f7ca00] border border-[#fcd200] text-xs py-1 rounded"
                        onClick={(e) => handleAddToCart(e, id)}
                      >
                        Add to cart
                      </button>
                    </article>
                  );
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Pagination */}
      <div className="w-full flex justify-center py-8">
        <div className="flex items-center border border-gray-400 rounded-md overflow-hidden text-sm">
          <button className="px-4 py-2 text-gray-500 hover:bg-gray-100 flex items-center gap-1">
            <span className="text-lg">‹</span> Previous
          </button>
          <div className="px-4 py-2 border-l border-r border-gray-400 font-bold">
            1
          </div>
          <button className="px-4 py-2 hover:bg-gray-100 flex items-center gap-1">
            Next <span className="text-lg">›</span>
          </button>
        </div>
      </div>

      <BrowsingHistory />

      <div className="bg-white border-t border-b border-gray-200 py-2">
        <div className="max-w-md mx-auto text-center">
          <p className="text-base font-semibold">
            See personalized recommendations
          </p>
          <button
            onClick={() => navigate("/register/login")}
            className="mt-3 bg-[#ffd814] hover:bg-[#f7ca00] 
              border-2 border-[#ffb700] rounded text-base font-semibold 
              py-1 px-30 mx-auto block"
          >
            Sign in
          </button>
          <p className="text-base mt-2">
            New customer?{" "}
            <span
              onClick={() => navigate("/register/signup")}
              className="text-[#007185] hover:text-[#c7511f] cursor-pointer"
            >
              Start here.
            </span>
          </p>
        </div>
      </div>

      <div className="grow h-px bg-gray-300 mb-5"></div>
    </div>
  );
}

export default Productlistpage;
