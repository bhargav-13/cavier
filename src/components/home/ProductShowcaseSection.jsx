import { ChevronRight, Heart, ShoppingCart } from 'lucide-react'

const Stars = () => {
  return (
    <div className="flex items-center justify-center gap-0.5 text-white">
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

const ProductCard = ({ item }) => {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-lg h-[300px]">
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-2 top-2 z-10 text-white transition-colors hover:text-white"
        >
          <Heart className="h-4 w-4" />
        </button>

        {/* <div className="flex aspect-square items-center justify-center"> */}
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover 
          ransition-transform duration-500 group-hover:scale-[1.03]"
          />
        {/* </div> */}
      </div>

      <div className="px-1 pt-3 text-center">
        <p className="text-sm leading-5 tracking-[0.01em] text-white">
          {item.title}
        </p>
        <p className="mt-1 text-sm tracking-[0.02em] text-white py-2">
          {item.price}
        </p>
        <Stars className="w-4 h-4 " />

        <button
          type="button"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border px-4 py-2 text-sm   text-whitetransition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
        >
          <ShoppingCart className="h-4 w-4" />
          {item.actionLabel ?? 'Add to cart'}
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
}) => {
  return (
    <section className={`bg-pages text-foreground ${className}`.trim()}>
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-12 md:pt-0 md:pb-20">
        <div className="mb-8 md:mb-10">
          <h2 className="text-[32px] font-normal tracking-[0.03em] text-foreground md:text-[42px]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <ProductCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-3 border border-foregraound px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-page"
          >
            {ctaLabel}
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcaseSection
