import { ChevronRight, Heart, ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

const Stars = () => {
  return (
    <div className="flex items-center justify-center gap-0.5 py-3 text-white">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-2.5 w-2.5 fill-current"
        >
          <path d="m12 2 2.9 6.4 7.1.6-5.4 4.7 1.7 6.9L12 16.9 5.7 20.6l1.7-6.9L2 9l7.1-.6L12 2Z" />
        </svg>
      ))}
    </div>
  )
}

const ProductCard = ({
  item,
  onToggleWishlist,
  onToggleCart,
  isInWishlist,
  isInCart,
  isProcessing = false,
}) => {
  return (
    <article className="group flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg border border-foreground/60 h-[300px] flex-shrink-0">
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={() => item.id && onToggleWishlist?.(item.id)}
          disabled={!item.id || isProcessing}
          className="absolute right-2 top-2 z-10 text-white"
        >
          <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-current text-red-400' : ''}`} />
        </button>

        {item.id ? (
          <Link to={`/products/${item.id}`} className="block h-full">
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </Link>
        ) : (
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>

      {/* Content */}
      <div className="px-1 pt-3 text-center flex flex-col flex-grow">
        {item.id ? (
          <Link to={`/products/${item.id}`} className="block">
            <p className="text-sm leading-5 tracking-[0.01em] text-white">
              {item.title}
            </p>
            <p className="mt-1 text-sm tracking-[0.02em] text-white py-2">
              INR {item.price}
            </p>
          </Link>
        ) : (
          <>
            <p className="text-sm leading-5 tracking-[0.01em] text-white">
              {item.title}
            </p>
            <p className="mt-1 text-sm tracking-[0.02em] text-white py-2">
              INR {item.price}
            </p>
          </>
        )}

        <Stars />

        {/* Button sticks to bottom */}
        <button
          type="button"
          onClick={() => item.id && onToggleCart?.(item.id)}
          disabled={!item.id || isProcessing}
          className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
        >
          <ShoppingCart className="h-4 w-4" />
          {item.id ? (isInCart ? 'Remove from cart' : item.actionLabel ?? 'Add to cart') : item.actionLabel ?? 'Add to cart'}
        </button>
      </div>
    </article>
  )
}

const ProductShowcaseSection = ({
  title,
  items,
  ctaLabel = 'View More',
  className = '',
  containerClassName = '',
  gridClassName = '',
  hideTitle = false,
  hideCta = false,
  ctaTo = '/products',
  emptyMessage = 'No products available.',
  onToggleWishlist,
  onToggleCart,
  isInWishlist,
  isInCart,
  isProcessing,
}) => {
  return (
    <section className={`bg-pages text-foreground ${className}`.trim()}>
      <div
        className={`mx-auto max-w-6xl px-6 py-10 md:px-12 md:pt-0 md:pb-10 ${containerClassName}`.trim()}
      >
        {!hideTitle && (
          <div className="mb-8 md:mb-10">
            <h2 className="text-[32px] font-normal tracking-[0.03em] text-foreground md:text-[42px]">
              {title}
            </h2>
          </div>
        )}

        {/* Grid controlled from parent */}
        {items.length > 0 ? (
          <div className={`grid ${gridClassName} items-stretch`.trim()}>
            {items.map((item, index) => (
              <ProductCard
                key={item.id ?? `${item.title}-${index}`}
                item={item}
                onToggleWishlist={onToggleWishlist}
                onToggleCart={onToggleCart}
                isInWishlist={isInWishlist?.(item.id)}
                isInCart={isInCart?.(item.id)}
                isProcessing={isProcessing?.(item.id)}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-white/15 px-6 py-16 text-center text-white/60">
            {emptyMessage}
          </div>
        )}

        {!hideCta && (
          <div className="mt-10 flex justify-center">
            <Link
              to={ctaTo}
              className="inline-flex items-center gap-3 border border-foreground px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-page"
            >
              {ctaLabel}
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductShowcaseSection 
