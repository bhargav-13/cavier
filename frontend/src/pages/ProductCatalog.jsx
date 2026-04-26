import Navbar from '../components/home/Navbar.jsx'
import ProductHeroSection from '../components/products/CatalogHeroSection.jsx'
import ProductContentSection from '../components/products/CatalogContentSection.jsx'

const ProductsPage = () => {
  return (
    <>
      <Navbar />

      <main className="bg-page text-white">
        <ProductHeroSection />
        <ProductContentSection />
      </main>
    </>
  )
}

export default ProductsPage
