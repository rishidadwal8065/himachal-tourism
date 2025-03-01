import TopPackages from "../components/TopPackages";
import HeroSection from "../components/HeroSection"
import GetInTouch from "../components/GetInTouch";
import PopularDestination from "../components/PopularDestination";
import DealAndOffers from "../components/DealAndOffers";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
   <>
      <HeroSection/>
      <div className="get-in-touch-mob-version">
        <GetInTouch/>
      </div>
      <TopPackages/>
      <WhyChooseUs/>
      <PopularDestination/>
      <DealAndOffers/>
   </>
  );
}
