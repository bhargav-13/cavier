import { ChevronLeft, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'

import useCommerce from '../../hooks/useCommerce.js'
import useProducts from '../../hooks/useProducts.js'
import ProductShowcaseSection from '../home/ProductShowcaseSection.jsx'

const WishlistContentSection = () => {
  const { products } = useProducts({ page: 1, pageSize: 50 })
  const {
    wishlistItems,
    loading,
    error,
    toggleWishlist,
    toggleCart,
    isInWishlist,
    isInCart,
    isProcessing,
  } = useCommerce()

  const productById = useMemo(
    () => new Map(products.map((product) => [product.id, product])),
    [products]
  )

  const wishlistProducts = useMemo(
    () =>
      wishlistItems
        .map((item) => item.product || productById.get(item.productId))
        .filter(Boolean),
    [productById, wishlistItems]
  )

  const similarItems = products
    .filter((product) => !wishlistItems.some((item) => item.productId === product.id))
    .slice(0, 3)

  return (
    <main className="bg-page pt-10 text-white">
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="flex flex-col gap-5 border-b border-dashed border-white/25 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            
            <h1 className="text-xl text-white md:text-3xl">
              Your Wishlist
            </h1>
          </div>

          <Link
            to="/products"
           className="mt-20 inline-flex items-center gap-3 text-[16px] tracking-[0.08em] text-white transition hover:text-white/70"
          >
             <ChevronLeft className="h-5 w-5" />
            Continue Shopping
          </Link>
        </div>

        {error && (
          <p className="mt-6 border border-red-400/50 px-4 py-3 text-sm tracking-[0.05em] text-red-200">
            {error}
          </p>
        )}

        <ProductShowcaseSection
          items={wishlistProducts}
          className="pt-10"
          containerClassName="max-w-none px-0 py-0"
          gridClassName="grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
          hideTitle
          hideCta
          emptyMessage={loading ? 'Loading wishlist...' : 'Your wishlist is empty.'}
          onToggleWishlist={toggleWishlist}
          onToggleCart={toggleCart}
          isInWishlist={isInWishlist}
          isInCart={isInCart}
          isProcessing={isProcessing}
        />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-12">
        <h2 className="text-xl  text-white md:text-3xl">
          Similar items
        </h2>

        <ProductShowcaseSection
          items={similarItems}
          className="pt-8"
          containerClassName="max-w-none px-0 py-0"
          gridClassName="grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
          hideTitle
          hideCta
          emptyMessage="No similar products available."
          onToggleWishlist={toggleWishlist}
          onToggleCart={toggleCart}
          isInWishlist={isInWishlist}
          isInCart={isInCart}
          isProcessing={isProcessing}
        />
      </section>
    </main>
  )
}

export default WishlistContentSection
