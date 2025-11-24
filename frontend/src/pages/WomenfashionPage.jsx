
import BestFootwearSlider from "../components/BestFootwearSlider";
import BrandsInFocusSlider from "../components/BrandsInFocusSlider";
import CategoryStrip from "../components/CategorySlider";
import DiscountedClothingSlider from "../components/DiscountedClothingSlider";
import FootwearHandbagsSlider from "../components/FootwearHandbagsSlider";
import HeroSlider from "../components/HeroSlider";
import KickStarterDeals from "../components/KickStarterDeals";
import Mainheader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import CelebCornerSlider from "../components/CelebCornerSlider";
import ExploreMoreStoresSlider from "../components/ExploreMoreStoresSlider";
import DealsWithFilters from "../components/DealsWithFilters";
export default function WomenfashionPage() {
  return (
<div>
  <Mainheader/>
   <div className="w-full bg-white border-b border-gray-300">
      <div className="flex items-center px-6 py-2 text-sm font-sans">
        
        {/* Left text */}
        <span className="font-semibold text-black whitespace-nowrap">
          Amazon Fashion
        </span>

        {/* Navigation links */}
        <div className="flex flex-1 justify-evenly ml-12">
          <a href="#" className="text-gray-500 hover:text-black">Women</a>
          <a href="#" className="text-gray-500 hover:text-black">Men</a>
          <a href="#" className="text-gray-500 hover:text-black">Kids</a>
          <a href="#" className="text-gray-500 hover:text-black">Bags & Luggage</a>
          <a href="#" className="text-gray-500 hover:text-black">Sportswear</a>
          <a href="#" className="text-gray-500 hover:text-black">Sales & Deals</a>
        </div>
      </div>
    </div>
     <div className="w-full">
  <CategoryStrip />
</div>
 <div className="w-full bg-[#fff4eb] py-3 flex flex-col items-center justify-center">
      
      {/* Text */}
      <p className="text-black text-lg font-serif font-semibold">
        Get Up To 20% Cashback* On Your First Order
      </p>

      {/* Orange Sign In button */}
      <button className="mt-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-1 rounded text-sm font-medium">
        Sign In
      </button>
<HeroSlider/>
<KickStarterDeals/>
<HeroSlider/>
<DiscountedClothingSlider/>
<BestFootwearSlider/>
<BestFootwearSlider/>
<DiscountedClothingSlider/>
<BrandsInFocusSlider/>
<FootwearHandbagsSlider/>
<CelebCornerSlider/>
<ExploreMoreStoresSlider/>
<DealsWithFilters/>
    </div>
    <MainFooter/>
</div>

  );
}
