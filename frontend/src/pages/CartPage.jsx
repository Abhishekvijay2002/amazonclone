import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BrowsingHistory from "../components/BrowsingHistory";
import {
  getCart,
  removeFromCart,
  increaseCartQuantity,
  decreaseCartQuantity,
} from "../Services/UserApi";

export default function AmazonCart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load cart
  const fetchCart = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await getCart();
      setCart(res.data.cart || res.data);
    } catch (err) {
      console.error("Error loading cart:", err);
      setError(
        err?.response?.data?.error ||
          err?.response?.data?.message ||
          "Failed to load cart"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const getItems = () => {
    if (!cart) return [];
    if (Array.isArray(cart.product)) return cart.product;
    if (Array.isArray(cart.items)) return cart.items;
    return [];
  };

  const items = getItems();

  const getSubtotal = () => {
    if (!cart) return 0;
    if (typeof cart.totalAmount === "number") return cart.totalAmount;

    return items.reduce(
      (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
      0
    );
  };

  const subtotal = getSubtotal();

  // Actions
  const handleRemove = async (productId) => {
    try {
      await removeFromCart(productId);
      await fetchCart();
    } catch (err) {
      console.error("Error removing:", err);
    }
  };

  const handleIncrease = async (productId) => {
    try {
      await increaseCartQuantity(productId);
      await fetchCart();
    } catch (err) {
      console.error("Error increasing:", err);
    }
  };

  const handleDecrease = async (productId, currentQty) => {
    if (currentQty <= 1) {
      if (!window.confirm("Remove this item from cart?")) return;
    }
    try {
      await decreaseCartQuantity(productId);
      await fetchCart();
    } catch (err) {
      console.error("Error decreasing:", err);
    }
  };

  const handleProceedToBuy = () => {
  navigate("/checkOut");
};

  return (
    <div className="bg-[#f3f3f3] min-h-screen">

      <div className="min-h-screen bg-[#f3f3f3] py-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-12 gap-4">

          <div className="col-span-9 space-y-4">
            <div className="bg-white border border-gray-300">

              <div className="flex justify-between px-5 py-3 border-b border-gray-200">
                <h1 className="text-lg font-semibold">Shopping Cart</h1>
                <span className="text-sm text-gray-600">Price</span>
              </div>

              {loading && (
                <p className="px-5 py-4 text-sm text-gray-500">
                  Loading your cart…
                </p>
              )}

              {error && !loading && (
                <p className="px-5 py-4 text-sm text-red-500">{error}</p>
              )}

              {!loading && !error && items.length === 0 && (
                <p className="px-5 py-4 text-sm text-gray-600">
                  Your Amazon Cart is empty.
                </p>
              )}

              {!loading &&
                !error &&
                items.map((item, index) => {
                  const product = item.productid || item.product || {};
                  const productId =
                    product._id || item.productid?._id || item.productId;

                  let imageSrc =
                    product.img || product.image || product.thumbnail;
                  if (Array.isArray(product.image)) {
                    imageSrc =
                      product.image[0]?.url ||
                      product.image[0] ||
                      imageSrc;
                  }

                  return (
                    <div
                      key={productId || index}
                      className="px-5 py-4 flex gap-4 border-b border-gray-200 last:border-b-0"
                    >
                      {/* Image */}
                      <img
                        src={imageSrc || "/placeholder-image.png"}
                        className="w-[120px] object-contain"
                        alt={product.title || "product"}
                      />

                      <div className="flex-1 text-sm leading-5">
                        <p className="font-semibold">
                          {product.title || "Product title"}
                        </p>

                        <p className="text-red-600 text-xs mt-1">
                          Usually ships within 4 to 5 days
                        </p>

                        <p className="text-xs text-[#007185]">
                          Sold by: {product.sellerName || "Seller"}
                        </p>

                        <div className="flex items-center gap-3 mt-2 text-xs">
                          <div className="flex items-center gap-2 border border-gray-400 rounded px-2 py-[2px]">
                            <button
                              className="font-bold text-lg px-1 disabled:text-gray-400"
                              disabled={item.quantity <= 0}
                              onClick={() =>
                                handleDecrease(productId, item.quantity)
                              }
                            >
                              −
                            </button>

                            <span className="min-w-[20px] text-center font-medium">
                              {item.quantity}
                            </span>

                            <button
                              className="font-bold text-lg px-1"
                              onClick={() => handleIncrease(productId)}
                            >
                              +
                            </button>
                          </div>

                          <button
                            className="hover:underline"
                            onClick={() => handleRemove(productId)}
                          >
                            Delete
                          </button>

                          <button className="hover:underline">
                            Save for later
                          </button>

                          <button className="text-[#007185] hover:underline">
                            Share
                          </button>
                        </div>
                      </div>

                      <div className="text-sm font-semibold whitespace-nowrap">
                        ₹{(item.price || 0) * (item.quantity || 1)}
                      </div>
                    </div>
                  );
                })}

              {items.length > 0 && (
                <div className="text-right px-5 py-3 border-t border-gray-200 text-sm">
                  Subtotal ({items.length} item{items.length > 1 ? "s" : ""}):{" "}
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
              )}
            </div>

            <div className="px-5 py-4 text-xs text-gray-700 leading-5">
              <p>
                The price and availability of items are subject to change.
                The Cart is a temporary place to store your items.
              </p>
            </div>
          </div>

          <div className="col-span-3 space-y-4">
            <div className="bg-white border border-gray-300 px-4 py-4">
              {items.length === 0 ? (
                <p className="text-sm">Your cart is empty.</p>
              ) : (
                <>
                  <p className="text-sm">
                    Subtotal ({items.length} item
                    {items.length > 1 ? "s" : ""}):{" "}
                    <span className="font-semibold">₹{subtotal}</span>
                  </p>

                  <button
                    onClick={handleProceedToBuy}
                    className="mt-3 w-full bg-[#ffd814] hover:bg-[#f7ca00] text-sm font-semibold py-[6px] rounded-full"
                  >
                    Proceed to Buy
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <BrowsingHistory />
    </div>
  );
}
