
import React, { useEffect, useState } from "react";
import BrowsingHistory from "../components/BrowsingHistory";
import { getMyOrders, cancelOrder } from "../Services/UserApi";

export default function YourOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  const historyImages = [
    "https://m.media-amazon.com/images/I/61njt1l6IEL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61Z72KpZuqL._AC_SY200_.jpg",
  ];

  // ✅ Fetch Orders
  const loadOrders = async () => {
    try {
      setLoading(true);
      const res = await getMyOrders();
      setOrders(res.data.orders || res.data || []);
    } catch (err) {
      console.error("Failed to load orders", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  // ✅ Cancel Order
  const handleCancel = async (orderId) => {
    if (!window.confirm("Cancel this order?")) return;

    try {
      await cancelOrder(orderId);
      loadOrders();
    } catch (err) {
      alert("Failed to cancel order");
    }
  };

  return (
    <div>
      <div className="bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6">

          {/* Breadcrumb */}
          <div className="text-xs text-[#007185] mb-2">
            <span className="cursor-pointer hover:underline">Your Account</span>
            <span className="text-gray-500"> › </span>
            <span className="text-orange-500">Your Orders</span>
          </div>

          <h1 className="text-2xl font-semibold mb-4">Your Orders</h1>

          {/* Divider */}
          <div className="border-b border-gray-200 mb-4" />

          {/* Orders */}
          {loading && <p>Loading orders...</p>}

          {!loading && orders.length === 0 && (
            <div className="text-center text-sm text-gray-600">
              You have no orders yet.
            </div>
          )}

          {!loading &&
            orders.map((order) => (
              <div
                key={order._id}
                className="border rounded mb-6 bg-gray-50"
              >
                {/* Order Header */}
                <div className="flex justify-between bg-gray-100 px-4 py-2 text-xs">
                  <div>
                    <p>ORDER PLACED</p>
                    <p className="font-semibold">
                      {new Date(order.createdAt).toDateString()}
                    </p>
                  </div>
                  <div>
                    <p>TOTAL</p>
                    <p className="font-semibold">₹{order.totalAmount}</p>
                  </div>
                  <div>
                    <p>STATUS</p>
                    <p className="font-semibold capitalize">
                      {order.orderstatus}
                    </p>
                  </div>
                  <div>
                    <p>ORDER #</p>
                    <p className="font-semibold">{order._id}</p>
                  </div>
                </div>

                {/* Product List */}
                <div className="p-4 space-y-4">
                  {order.product.map((item, i) => {
                    const product = item.productid || {};

                    return (
                      <div
                        key={i}
                        className="flex gap-4 items-center border-b pb-3"
                      >
                        {/* ✅ Product Image */}
                        <img
                          src={
                            product.image[0]?.[0]?.url ||
                            product.image[0] ||
                            "/mnt/data/4b5c0911-4650-4791-ab5d-f2474aaa1361.png"
                          }
                          className="w-[80px] h-[80px] object-contain"
                          alt="product"
                        />

                        {/* ✅ Product Name */}
                        <div className="text-sm">
                          <p className="font-semibold">
                            {product.title || "Product Name"}
                          </p>
                          <p className="text-xs text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                      </div>
                    );
                  })}

                  {/* Cancel button */}
                  {order.orderstatus !== "cancelled" && (
                    <button
                      onClick={() => handleCancel(order._id)}
                      className="text-xs text-red-600 border border-red-300 px-3 py-1 rounded hover:bg-red-50"
                    >
                      Cancel Order
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Browsing History */}
      <BrowsingHistory />


    </div>
  );
}
