import React from 'react'
import MainHeader from '../components/MainHeader'
import MainFooter from '../components/MainFooter'
import BrowsingHistory from '../components/BrowsingHistory'
import KitchenDealsSlider from '../components/KitchDealsSlider'
import FourSectionGrid from '../components/Fourcardsection'
import Fourgridtype2 from '../components/Fourgridtype2'
import FourGridStyle3 from '../components/Gridsytle3'
import FourGridCategories from '../components/FourGridCategories'
import Categorygrid from '../components/Categorygrid'
import BudgetSliderSection from '../components/BudgetSliderSection'
import SingleProductSlider from '../components/SingleProductSlider'

function HomePage() {
  return (
    <div>

      <div className="bg-gray-700">
  <div className="relative">
    <BudgetSliderSection/>
  </div>
  <div className="-mt-40 relative z-10">
    <Categorygrid/>
  </div>

  {/* Normal sections */}
  <div className="pt-10">
     <FourGridCategories/>
      <KitchenDealsSlider/>
      <KitchenDealsSlider/>
      <FourGridStyle3/>
      <KitchenDealsSlider/>
      <KitchenDealsSlider/>
      <SingleProductSlider/>
      <Fourgridtype2/>
      <KitchenDealsSlider/>
      <FourSectionGrid/>
      <KitchenDealsSlider/>
  </div>
</div>
      <BrowsingHistory />
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
    </div>
  )
}

export default HomePage