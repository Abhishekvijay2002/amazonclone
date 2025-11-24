

export default function CheckoutPage() {
  return (
    <div>
    <div className="min-h-screen bg-white text-sm font-sans">
      {/* Top bar */}
      <header className="border-b border-gray-300 bg-[#f3f3f3]">
        <div className="max-w-5xl mx-auto flex items-center gap-4 px-4 py-2">
          <span className="text-xl font-bold">amazon</span>
          <span className="text-lg">Checkout</span>
          <span className="text-sm text-[#007185]">
            ( <span className="font-medium">1 item</span> )
          </span>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-4 grid grid-cols-[3fr,1.2fr] gap-6">
        {/* LEFT COLUMN */}
        <section className="space-y-6">
          {/* Step 1: Shipping address */}
          <div className="flex items-start gap-3">
            <span className="text-sm mt-1">1</span>
            <div className="flex-1 border-b border-gray-200 pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold">Shipping address</p>
                  <div className="mt-1 text-xs leading-4">
                    <p>Jacob Jones</p>
                    <p>2972</p>
                    <p>Westheimer Rd.</p>
                    <p>Santa Ana, Illinois 85486</p>
                  </div>
                </div>
                <button className="text-xs text-[#007185] hover:underline">
                  Change
                </button>
              </div>
            </div>
          </div>

          {/* Step 2: Choose payment method */}
          <div className="flex items-start gap-3">
            <span className="text-sm mt-1 text-red-600">2</span>

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-red-600">
                  Choose a payment method
                </p>
                <button className="text-xs text-[#007185] hover:underline">
                  Close ✕
                </button>
              </div>

              {/* Payment method panel */}
              <div className="mt-3 border border-gray-300 rounded-sm">
                {/* Gift card / promo code */}
                <div className="border-b border-gray-200 px-4 py-3">
                  <p className="font-semibold text-xs mb-2">
                    Your available balance
                  </p>
                  <div className="border border-gray-300 rounded-sm inline-flex items-center">
                    <span className="px-2 py-1 text-[11px] text-gray-600 border-r border-gray-300">
                      Enter a gift code or promotional code
                    </span>
                    <input
                      className="px-2 py-1 text-[11px] outline-none"
                      placeholder="Enter code"
                    />
                    <button className="px-3 py-1 text-[11px] bg-gray-100 border-l border-gray-300">
                      Apply
                    </button>
                  </div>
                </div>

                {/* Add card */}
                <div className="border-b border-gray-200 px-4 py-3 text-xs">
                  <p className="font-semibold mb-2">t</p>
                  <button className="flex items-center gap-2 text-[#007185]">
                    <span className="border border-gray-400 w-6 h-6 flex items-center justify-center">
                      +
                    </span>
                    <span>
                      Add a credit or debit card{" "}
                      <span className="text-gray-500">
                        › Amazon.sa accepts all major credit cards
                      </span>
                    </span>
                  </button>
                </div>

                {/* Buy now, pay later */}
                <div className="border-b border-gray-200 px-4 py-3">
                  <p className="font-semibold text-xs mb-2">
                    Buy Now, Pay Later
                  </p>

                  <label className="flex items-start gap-2 text-xs cursor-pointer">
                    <input type="radio" name="payLater" className="mt-1" />
                    <div>
                      <p className="font-semibold">
                        <span className="px-2 py-px bg-green-600 text-white text-[10px] rounded-full mr-1">
                          tabby
                        </span>
                        Pay over time with Tabby
                      </p>
                      <p className="text-gray-600 mt-1">
                        0% interest. No hidden charges.
                      </p>
                      <button className="text-[#007185] text-[11px] hover:underline">
                        Learn more
                      </button>
                    </div>
                  </label>
                </div>

                {/* Other payment options */}
                <div className="px-4 py-3">
                  <p className="font-semibold text-xs mb-2">
                    Other payment options
                  </p>

                  <label className="flex items-start gap-2 text-xs cursor-pointer">
                    <input type="radio" name="otherPay" className="mt-1" />
                    <div>
                      <p className="font-semibold">Cash on Delivery (COD)</p>
                      <p className="text-gray-600 mt-1">
                        Cash on delivery is not available for this order.{" "}
                        <button className="text-[#007185] hover:underline">
                          Why?
                        </button>
                      </p>
                      <p className="text-gray-600 mt-1">
                        Please use another payment method to proceed.
                      </p>
                    </div>
                  </label>
                </div>

                {/* Button bottom */}
                <div className="border-t border-gray-200 px-4 py-3">
                  <button className="bg-[#ffd814] hover:bg-[#f7ca00] text-xs font-semibold px-4 py-2 rounded-full">
                    Use this payment method
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3: Offers */}
          <div className="flex items-start gap-3">
            <span className="text-sm mt-1">3</span>
            <div className="flex-1 border-t border-gray-200 pt-3">
              <p className="font-semibold">Offers</p>
            </div>
          </div>

          {/* Step 4: Items and shipping */}
          <div className="flex items-start gap-3">
            <span className="text-sm mt-1">4</span>
            <div className="flex-1 border-t border-gray-200 pt-3">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Items and shipping</p>
                <button className="border border-gray-400 rounded-sm px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200">
                  Review order
                </button>
              </div>
            </div>
          </div>

          {/* Footer notes (small text) */}
          <div className="pt-4 border-t border-gray-200 text-[11px] text-gray-600 leading-4">
            <p>
              *Why has sales tax been applied?* See tax and seller information
            </p>
            <p className="mt-2">
              Need help? Check our{" "}
              <button className="text-[#007185] hover:underline">
                Help pages
              </button>{" "}
              or{" "}
              <button className="text-[#007185] hover:underline">
                contact us
              </button>
              .
            </p>
          </div>
        </section>

        {/* RIGHT COLUMN – ORDER SUMMARY */}
        <aside>
          <div className="border border-gray-300 bg-[#fcfdfd] rounded-sm p-4 space-y-4">
            <button className="w-full bg-[#ffd814] hover:bg-[#f7ca00] text-xs font-semibold py-2 rounded-full">
              Use this payment method
            </button>

            <p className="text-xs text-gray-700">
              Choose a payment method to continue checking out. You&apos;ll still
              have a chance to review and edit your order before it&apos;s final.
            </p>

            <div className="border-t border-gray-200 pt-3 space-y-2">
              <h3 className="font-semibold text-base">Order Summary</h3>

              <div className="flex justify-between text-xs">
                <span>Items:</span>
                <span className="font-semibold">SAR 203.14</span>
              </div>

              <div className="flex justify-between text-xs">
                <span>Shipping &amp; handling:</span>
                <span>--</span>
              </div>

              <div className="border-t border-gray-200 pt-3 flex justify-between items-baseline">
                <span className="text-sm font-semibold text-red-600">
                  Order total:
                </span>
                <span className="text-sm font-semibold text-red-600">--</span>
              </div>

              <button className="mt-2 text-[11px] text-[#007185] hover:underline">
                How are shipping costs calculated?
              </button>
            </div>
          </div>
        </aside>
      </main>
    </div>
    <div class="w-full max-w-4xl mx-auto px-4 py-4 text-sm text-gray-900">
  <div class="flex items-start gap-3 border-t border-gray-200 pt-4">
    <span class="text-lg font-medium w-4">3</span>
    <div class="flex-1">
      <p class="font-semibold text-base">Offers</p>
    </div>
  </div>
  <div class="flex items-start gap-3 border-t border-gray-200 pt-4 mt-2">
    <span class="text-lg font-medium w-4">4</span>
    <div class="flex-1 flex items-center justify-between">
      <p class="font-semibold text-base">Items and shipping</p>
      <button
        class="border border-gray-400 rounded-full px-4 py-1 text-xs bg-gray-100 hover:bg-gray-200">
        Review order
      </button>
    </div>
  </div>
  <div class="mt-4 text-[11px] leading-4 text-gray-700 space-y-1">
    <p>
      *Why has sales tax been applied?&nbsp;
      <span class="text-[#007185] cursor-pointer hover:underline">
        See tax and sellet information
      </span>
    </p>

    <p>
      Need help? Check our&nbsp;
      <span class="text-[#007185] cursor-pointer hover:underline">Help pages</span>
      &nbsp;or&nbsp;
      <span class="text-[#007185] cursor-pointer hover:underline">contact us</span>
    </p>

    <p>
      For MADA cards, when you check out, you might need to enter your card's security code and a
      verification code we send you. This won't be required for every future purchase. To manage your
      card, go to Your Payments in your account settings.
    </p>

    <p>
      For an item sold by Amazon.sa: When you click the "Place your order" button, we'll send you an
      email message acknowledging receipt of your order. Your contract to purchase an item will not be
      complete until we send you an email notifying you that the item has been shipped.
    </p>

    <p>
      You may return new, unopened merchandise in original condition within 15 days of delivery.
      Exceptions and restrictions apply. See Amazon.sa's&nbsp;
      <span class="text-[#007185] cursor-pointer hover:underline">
        See tax and sellet information
      </span>
    </p>

    <p>
      Need to add more items to your order? Continue shopping on the&nbsp;
      <span class="text-[#007185] cursor-pointer hover:underline">
        Amazon.sa homepage.
      </span>
    </p>
  </div>
</div>

    </div>
  );
}
