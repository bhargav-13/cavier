import Hero from "../components/home/Hero.jsx";
import IntroSection from "../components/home/IntroSection.jsx";
import Features from "../components/home/Features.jsx";
import CraftSection from "../components/home/CraftSection.jsx";
import FinishingSection from "../components/home/FinishingSection.jsx";
import AccessSection from "../components/home/AccessSection.jsx";
import HomeInsightsSection from "../components/home/HomeInsightsSection.jsx";
import HomeExperienceSection from "../components/home/HomeExperienceSection.jsx";
import ProductShowcaseSection from "../components/home/ProductShowcaseSection.jsx";
import Navbar from "../components/home/Navbar.jsx";
import useCommerce from "../hooks/useCommerce.js";
import useProducts from "../hooks/useProducts.js";

const Home = () => {
  const { products, loading } = useProducts();
  const { toggleWishlist, toggleCart, isInWishlist, isInCart, isProcessing } = useCommerce();

  const sinkMixerProducts = products
    .filter((item) => item.category?.toLowerCase() === "mixture")
    .slice(0, 4);

  const cockProducts = products
    .filter((item) => item.category?.toLowerCase().includes("cock"))
    .slice(0, 4);

  const bathroomProducts = products
    .filter((item) => item.area?.toLowerCase() === "bathroom")
    .slice(0, 4);

  return (
    <>
      <Navbar />
      <Hero />
      <IntroSection />
      <Features />
      <CraftSection />
      <FinishingSection />
      <ProductShowcaseSection
        title="Cavier Sink Mixers"
        items={sinkMixerProducts}
        // ctaLabel="View All"
        // ctaTo="/products"
        className="pt-10"
        containerClassName="max-w-6xl px-0 py-0 md:px-0 md:pt-0 md:pb-0"
        gridClassName=" grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 "
        emptyMessage={loading ? "Loading products..." : "No products available yet."}
        onToggleWishlist={toggleWishlist}
        onToggleCart={toggleCart}
        isInWishlist={isInWishlist}
        isInCart={isInCart}
        isProcessing={isProcessing}
      />
      <ProductShowcaseSection
        title="Cavier Cock"
        items={cockProducts}
        // ctaLabel="View All"
        // ctaTo="/products"
        className="pt-10"
        containerClassName="max-w-6xl px-0 py-0 md:px-0 md:pt-0 md:pb-0"
        gridClassName=" grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 "
        emptyMessage={loading ? "Loading products..." : "No products available yet."}
        onToggleWishlist={toggleWishlist}
        onToggleCart={toggleCart}
        isInWishlist={isInWishlist}
        isInCart={isInCart}
        isProcessing={isProcessing}
      />
      <ProductShowcaseSection
        title="Bathroom Accessories"
        items={bathroomProducts}
        className="pt-10"
        containerClassName="max-w-6xl px-0 py-0 md:px-0 md:pt-0 md:pb-0"
        gridClassName=" grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 "
        emptyMessage={loading ? "Loading products..." : "No products available yet."}
        onToggleWishlist={toggleWishlist}
        onToggleCart={toggleCart}
        isInWishlist={isInWishlist}
        isInCart={isInCart}
        isProcessing={isProcessing}
      />
      <AccessSection />
      <HomeInsightsSection />
      <HomeExperienceSection />
    </>
  );
};

export default Home;
