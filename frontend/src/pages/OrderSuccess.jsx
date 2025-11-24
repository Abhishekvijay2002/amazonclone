import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full text-center">
        <div className="text-green-600 text-4xl mb-3">✅</div>

        <h1 className="text-xl font-semibold mb-2">
          Order Placed Successfully!
        </h1>

        <p className="text-sm text-gray-600 mb-6">
          Thank you for your purchase. Your order has been placed and is being
          processed.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => navigate("/")}
            className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-sm font-medium py-2 rounded-full"
          >
            Continue Shopping
          </button>

          <button
            onClick={() => navigate("/order")}
            className="w-full border border-gray-300 text-sm py-2 rounded-full hover:bg-gray-50"
          >
            View Your Orders
          </button>
        </div>
      </div>
    </div>
  );
}
