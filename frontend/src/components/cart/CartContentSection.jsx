import { ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'

import useCommerce from '../../hooks/useCommerce.js'
import useProducts from '../../hooks/useProducts.js'
import ProductShowcaseSection from '../home/ProductShowcaseSection.jsx'
import CartLineItem from './CartLineItem.jsx'
import OrderSummary from './OrderSummary.jsx'

const CartContentSection = () => {
  const { products, loading: productsLoading } = useProducts({ page: 1, pageSize: 100 })
  const {
    cartItems,
    loading: commerceLoading,
    error: commerceError,
    updateCartQuantity,
    removeFromCart,
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

  const hydratedCartItems = useMemo(
    () =>
      cartItems.map((item) => ({
        ...item,
        product: item.product || productById.get(item.productId),
      })),
    [cartItems, productById]
  )

  const subtotal = hydratedCartItems.reduce(
    (sum, item) => sum + (Number(item.product?.price) || 0) * (Number(item.quantity) || 1),
    0
  )

  const similarItems = products
    .filter((product) => !cartItems.some((item) => item.productId === product.id))
    .slice(0, 3)

  const isLoading = commerceLoading || productsLoading

  const increaseQuantity = (item) => {
    updateCartQuantity(item.productId, (Number(item.quantity) || 1) + 1)
  }

  const decreaseQuantity = (item) => {
    const nextQuantity = (Number(item.quantity) || 1) - 1
    if (nextQuantity > 0) {
      updateCartQuantity(item.productId, nextQuantity)
    }
  }

  return (
    <main className="bg-page pt-28 text-white">
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-24 md:px-12 lg:grid-cols-[1fr_420px] lg:gap-8">
        <div>
          <h1 className="text-xl text-white md:text-3xl">Your Cart</h1>

          {commerceError && (
            <p className="mt-5 border border-red-400/50 px-4 py-3 text-sm tracking-[0.05em] text-red-200">
              {commerceError}
            </p>
          )}

          <div className="mt-12 space-y-7">
            {isLoading ? (
              <p className="border-b border-dashed border-white/25 pb-8 text-white/70">
                Loading cart...
              </p>
            ) : hydratedCartItems.length > 0 ? (
              hydratedCartItems.map((item) => (
                <CartLineItem
                  key={item.productId}
                  item={item}
                  onDecrease={decreaseQuantity}
                  onIncrease={increaseQuantity}
                  onRemove={removeFromCart}
                  disabled={isProcessing(item.productId)}
                />
              ))
            ) : (
              <div className="border-b border-dashed border-white/25 pb-8 text-white/70">
                Your cart is empty.
              </div>
            )}
          </div>

          <Link
            to="/products"
            className="mt-20 inline-flex items-center gap-3 text-[16px] tracking-[0.08em] text-white transition hover:text-white/70"
          >
            <ChevronLeft className="h-5 w-5" />
            Continue Shopping
          </Link>
        </div>

        <OrderSummary subtotal={subtotal} />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-12">
        <h2 className="text-xl text-white md:text-3xl">
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

export default CartContentSection
