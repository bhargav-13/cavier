import Navbar from '../components/home/Navbar.jsx'
import ProductHeroSection from '../components/products/CatalogHeroSection.jsx'
import ProductContentSection from '../components/products/CatalogContentSection.jsx'
import useProducts from '../hooks/useProducts.js'

const ProductsPage = () => {
  const { products, loading } = useProducts()

  return (
    <>
      <Navbar />

      <main className="bg-page text-white">
        <ProductHeroSection />
        <ProductContentSection items={products} loading={loading} />
      </main>
    </>
  )
}

export default ProductsPage
