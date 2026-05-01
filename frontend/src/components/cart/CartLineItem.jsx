import { Minus, Plus, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'

import formatMoney from './money.js'

const CartLineItem = ({
  item,
  onDecrease,
  onIncrease,
  onRemove,
  disabled = false,
}) => {
  const price = Number(item.product?.price) || 0
  const quantity = Number(item.quantity) || 1
  const lineTotal = price * quantity
  const finish = item.product?.finish || 'Dark Anodized Aluminium'
  const totalHeight = item.product?.features?.find((feature) =>
    feature.toLowerCase().includes('height')
  )

  return (
    <article className="grid gap-5 border-b border-dashed border-white/25 pb-5 md:grid-cols-[132px_1fr_auto_auto] md:items-start md:gap-6">
      <Link
        to={`/products/${item.productId}`}
        className="block aspect-square overflow-hidden bg-black/45"
      >
        <img
          src={item.product?.image}
          alt={item.product?.title || 'Cart item'}
          className="h-full w-full object-cover"
        />
      </Link>

      <div className="min-w-0">
        <Link to={`/products/${item.productId}`}>
          <h2 className="max-w-[280px] text-[15px] leading-5 tracking-[0.06em] text-white">
            {item.product?.title || 'Product unavailable'}
          </h2>
        </Link>

        <div className="mt-4 space-y-2 text-[13px] leading-4 tracking-[0.08em] text-white/72">
          <p>Color / Finish : {finish}</p>
          <p>{totalHeight || 'Total Height = 300mm'}</p>
        </div>
      </div>

      <div className="flex h-10 w-20 items-center justify-between border border-white/60 text-white">
        <button
          type="button"
          aria-label="Decrease quantity"
          onClick={() => onDecrease(item)}
          className="flex h-full w-7 items-center justify-center disabled:cursor-not-allowed disabled:opacity-35"
        >
          <Minus className="h-3.5 w-3.5" />
        </button>
        <span className="text-sm">{quantity}</span>
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => onIncrease(item)}
          className="flex h-full w-7 items-center justify-center disabled:cursor-not-allowed disabled:opacity-35"
        >
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>

      <div className="flex items-start justify-between gap-6 md:min-w-[130px] md:flex-col md:items-end">
        <p className="text-xl tracking-[0.08em] text-white">{formatMoney(lineTotal)}</p>
        <button
          type="button"
          aria-label="Remove item"
          onClick={() => onRemove(item.productId)}
          className="text-white/70 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </article>
  )
}

export default CartLineItem
