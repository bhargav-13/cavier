import productHero from '../../assets/product/product-hero.png'

const ProductHeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-page text-white">
      <div className="mx-auto">
        <div className="overflow-hidden">
          <img
            src={productHero}
            alt="Cavier product collection"
            className="h-full min-h-[320px] w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

export default ProductHeroSection
