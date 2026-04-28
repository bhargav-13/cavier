import { Heart, ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

import ProductStars from './ProductStars.jsx'

const ProductCatalogCard = ({ product }) => {
  return (
    <article className="group">
      <div className="relative">
        <button
          type="button"
          aria-label={`Add ${product.title} to wishlist`}
          className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white transition hover:border-white/70"
        >
          <Heart className="h-4 w-4" />
        </button>

        <Link to={`/products/${product.id}`} className="block">
          <div className="overflow-hidden rounded-[6px] border border-white/55 bg-black/40">
            <div className="aspect-[4/4.45] overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(0,0,0,0)_48%),linear-gradient(180deg,_#242424_0%,_#0e0e0f_100%)] p-8">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.04]"
              />
            </div>
          </div>
        </Link>
      </div>

      <div className="px-1 pt-4 text-center">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="text-[13px] uppercase tracking-[0.14em] text-white/95">
            {product.title}
          </h3>
          <p className="mt-2 text-sm tracking-[0.12em] text-white/85">INR {product.price}</p>
        </Link>

        <ProductStars className="mt-2" />

        <button
          type="button"
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/80 px-4 py-3 text-sm text-white transition hover:bg-white hover:text-black"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </article>
  )
}

export default ProductCatalogCard
