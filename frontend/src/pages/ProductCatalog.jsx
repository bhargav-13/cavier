import Navbar from '../components/home/Navbar.jsx'
import ProductHeroSection from '../components/products/CatalogHeroSection.jsx'
import ProductContentSection from '../components/products/CatalogContentSection.jsx'
import useCommerce from '../hooks/useCommerce.js'
import useProducts from '../hooks/useProducts.js'
import { useMemo, useState } from 'react'

const ProductsPage = () => {
  const [filters, setFilters] = useState({
    area: '',
    finish: '',
    category: '',
    shape: '',
    minPrice: '',
    maxPrice: '',
  })
  const [page, setPage] = useState(1)

  const query = useMemo(
    () => ({
      ...filters,
      page,
      pageSize: 6,
    }),
    [filters, page]
  )

  const { products, loading, pagination } = useProducts(query)
  const { toggleWishlist, toggleCart, isInWishlist, isInCart, isProcessing } = useCommerce()

  const filterOptions = useMemo(() => {
    const uniqueValues = (key) => [...new Set(products.map((item) => item[key]).filter(Boolean))]
    return {
      area: uniqueValues('area'),
      finish: uniqueValues('finish'),
      category: uniqueValues('category'),
      shape: uniqueValues('shape'),
    }
  }, [products])

  const onFilterChange = (key, value) => {
    setPage(1)
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <>
      <Navbar />

      <main className="bg-page text-white">
        <ProductHeroSection />
        <ProductContentSection
          items={products}
          loading={loading}
          onToggleWishlist={toggleWishlist}
          onToggleCart={toggleCart}
          isInWishlist={isInWishlist}
          isInCart={isInCart}
          isProcessing={isProcessing}
          filters={filters}
          onFilterChange={onFilterChange}
          filterOptions={filterOptions}
          pagination={pagination}
          onPageChange={setPage}
        />
      </main>
    </>
  )
}

export default ProductsPage
