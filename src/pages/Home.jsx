import Hero from "../components/home/Hero.jsx";
import IntroSection from "../components/home/IntroSection.jsx";
import Features from "../components/home/Features.jsx";
import CraftSection from "../components/home/CraftSection.jsx";
import FinishingSection from "../components/home/FinishingSection.jsx";
import SinkMixersSection from "../components/home/SinkMixersSection.jsx";
import AccessSection from "../components/home/AccessSection.jsx";
import HomeInsightsSection from "../components/home/HomeInsightsSection.jsx";
import HomeExperienceSection from "../components/home/HomeExperienceSection.jsx";
import ProductShowcaseSection from "../components/home/ProductShowcaseSection.jsx";
import { cockProducts } from "../data/cavierContent.js";
import Navbar from "../components/home/Navbar.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection />
      <Features />
      <CraftSection />
      <FinishingSection />
      <SinkMixersSection />
      <ProductShowcaseSection
        title="Cavier Cock"
        items={cockProducts}
        // ctaLabel="View All"
        // ctaTo="/products"
        className="pt-10"
        containerClassName="max-w-6xl px-0 py-0 md:px-0 md:pt-0 md:pb-0"
        gridClassName=" grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 "
      />
      <ProductShowcaseSection
        title="bathroom Accessories"
        items={cockProducts}
        className="pt-10"
        containerClassName="max-w-6xl px-0 py-0 md:px-0 md:pt-0 md:pb-0"
        gridClassName=" grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 "
      />
      <AccessSection />
      <HomeInsightsSection />
      <HomeExperienceSection />
    </>
  );
};

export default Home;
