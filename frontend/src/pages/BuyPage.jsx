import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { placeOrder, getCart } from "../Services/UserApi";

export default function CheckoutPage() {
  const navigate = useNavigate();

  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [address, setAddress] = useState("2972 Westheimer Rd, Santa Ana");

  const [items, setItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  // ✅ Load cart items
  const loadCart = async () => {
    try {
      const res = await getCart();
      const cart = res.data.cart || res.data;

      const products = cart.product || [];
      setItems(products);

      // calculate total
      const total = products.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
      setSubtotal(total);
    } catch (err) {
      console.error("Cart load failed:", err);
    }
  };

  useEffect(() => {
    loadCart();
  }, []);

  const handlePlaceOrder = async () => {
    try {
      setProcessing(true);

      const orderData = {
        address,
        paymentMethod,
      };

      await placeOrder(orderData);

      navigate("/ordersuccess");
    } catch (err) {
      console.error(err);
      alert("Failed to place order");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-sm font-sans">

      <header className="border-b bg-gray-100">
        <div className="max-w-5xl mx-auto flex items-center gap-4 px-4 py-2">
          <span className="text-xl font-bold">amazon</span>
          <span className="text-lg">Checkout</span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-[3fr,1.2fr] gap-6">

        <section className="space-y-6">

          <div>
            <h2 className="font-semibold mb-2">1. Shipping address</h2>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border px-3 py-2"
            />
          </div>

          <div>
            <h2 className="font-semibold mb-2">2. Payment method</h2>

            <div className="space-y-2 border p-3 rounded">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "COD"}
                  onChange={() => setPaymentMethod("COD")}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  checked={paymentMethod === "ONLINE"}
                  onChange={() => setPaymentMethod("ONLINE")}
                />
                Online Payment (Demo)
              </label>
            </div>
          </div>
        </section>

        <aside>
          <div className="border p-4 rounded bg-gray-50 space-y-4">

            <h3 className="font-semibold text-base">Order Summary</h3>

            <div className="space-y-3 max-h-[280px] overflow-y-auto">
              {items.map((item, i) => {
                const product = item.productid;

                return (
                  <div key={i} className="flex gap-3 text-xs border-b pb-2">
                    <img
                      src={
                        product.image[0]?.[0]?.url ||
                        product.image[0] ||
                        "/placeholder.png"
                      }
                      className="w-12 h-12 object-contain"
                      alt=""
                    />

                    <div className="flex-1">
                      <p className="font-medium line-clamp-2">
                        {product.title}
                      </p>
                      <p className="text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <div className="font-semibold">
                      ₹{item.price * item.quantity}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t pt-3 space-y-2 text-xs">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>
              </div>

              <div className="flex justify-between font-semibold text-sm">
                <span>Total:</span>
                <span>₹{subtotal}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={processing}
              className="w-full bg-[#ffd814] hover:bg-[#f7ca00] py-2 text-sm font-semibold rounded-full disabled:opacity-60"
            >
              {processing ? "Placing Order..." : "Place your order"}
            </button>

          </div>
        </aside>

      </main>
    </div>
  );
}
