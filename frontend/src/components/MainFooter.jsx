import React from 'react'

function MainFooter() {

   const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", 
    });
  };
  return (
    <div>
      <footer className="bg-[#232F3E] text-white  w-full">

        <div className="bg-[#37475A] text-center py-6 text-lg cursor-pointer hover:bg-[#485769]" onClick={handleBackToTop}>
          Back to Top
        </div>

        <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-base">

          <div>
            <h4 className="font-bold mb-2">Get to Know<br /> Us</h4>
            <ul className="space-y-1 text-gray-300">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Connect with <br /> Us</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Make Money with Us</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Sell on Amazon</li>
              <li>Sell under Amazon <br /> Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Supply to Amazon</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Let Us Help You</h4>
            <ul className="space-y-1 text-gray-300">
              <li>Your Account</li>
              <li>Returns Centre</li>
              <li>Recalls and Product Safety <br /> Alerts</li>
              <li>100% Purchase Protection</li>
              <li>Amazon App Download</li>
              <li>Help</li>
            </ul>
          </div>

        </div>
         <div className="grow h-px bg-[#4c4c4c] mb-4"  />
        <div className="py-6 pt-3 flex flex-row items-center justify-center gap-20">
          <div className="text-2xl font-bold relative top-2"> <img src='https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png' className="w-30 h-auto"/></div>
          <div className="flex gap-4">
            <button className="flex items-center border border-gray-400 px-4 py-3 text-sm rounded text-gray-200 w-[150px]">
  <div className="flex items-center gap-2">
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>

    <span>English</span>
  </div>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4 ml-auto text-gray-400"
  >
    <path d="M8 9l4-4 4 4" />
    <path d="M16 15l-4 4-4-4" />
  </svg>

</button>

            <button className="flex items-center justify-start gap-2 border border-gray-400 px-4 py-3 text-sm rounded text-gray-200  w-[120px]">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India"
                className="w-5 h-4 object-cover"
              />
              <span>India</span>
            </button>
          </div>


        </div>
        <div className="bg-[#131A22] py-10  text-gray-300">
          <div className="bg-[#131A22] py-10 text-gray-400 text-base ">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-8 px-4">

              <div>
                <h4 className="text-white font-medium">AbeBooks</h4>
                <p>Books, art</p>
                <p>& collectibles</p>
              </div>

              <div>
                <h4 className="text-white font-medium">Amazon Web Services</h4>
                <p>Scalable Cloud</p>
                <p>Computing Services</p>
              </div>

              <div>
                <h4 className="text-white font-medium">Audible</h4>
                <p>Download</p>
                <p>Audio Books</p>
              </div>

              <div>
                <h4 className="text-white font-medium">IMDb</h4>
                <p>Movies, TV</p>
                <p>& Celebrities</p>
              </div>

              <div>
                <h4 className="text-white font-medium">Shopbop</h4>
                <p>Designer</p>
                <p>Fashion Brands</p>
              </div>

              <div>
                <h4 className="text-white font-medium">Amazon Business</h4>
                <p>Everything For</p>
                <p>Your Business</p>
              </div>

              <div>
                <h4 className="text-white font-medium">Prime Now</h4>
                <p>2-Hour Delivery</p>
                <p>on Everyday Items</p>
              </div>

              <div>
                <h4 className="text-white font-medium">Amazon Prime Music</h4>
                <p>100 million songs, ad-free</p>
                <p>Over 15 million podcast episodes</p>
              </div>

            </div>
          </div>
          <div className="text-center text-white">
            <div className="flex justify-center gap-6">
              <span>Conditions of Use & Sale</span>
              <span>Privacy Notice</span>
              <span>Interest-Based Ads</span>
            </div>
            <p>1996-2024, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>

      </footer>

    </div>
  )
}

export default MainFooter