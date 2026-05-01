import { ChevronDown } from 'lucide-react'

import formatMoney from './money.js'

const OrderSummary = ({ subtotal = 0 }) => {
  return (
    <aside className="border-white/55 lg:border-l lg:border-dashed lg:pl-9">
      <h2 className="text-[28px] tracking-[0.08em] text-white">Order Summary</h2>

      <div className="mt-12 space-y-5 border-b border-dashed border-white/25 pb-5 text-[16px] tracking-[0.08em]">
        <div className="flex items-center justify-between gap-5">
          <span className="text-white/90">Subtotal</span>
          <span className="text-xl text-white">{formatMoney(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between gap-5">
          <span className="text-white/90">Estimated Shipping</span>
          <span className="text-xl text-white">Free</span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-5 pt-5 text-[16px] tracking-[0.08em]">
        <span className="text-white">Total</span>
        <span className="text-xl text-white">{formatMoney(subtotal)}</span>
      </div>

      <button
        type="button"
        aria-label="Expand order details"
        className="mt-10 flex w-full justify-end border-b border-dashed border-white/25 pb-12 text-white"
      >
        <ChevronDown className="h-4 w-4" />
      </button>

      <form className="mt-5 border-b border-dashed border-white/25 pb-4">
        <label
          htmlFor="promo-code"
          className="block text-[16px] tracking-[0.08em] text-white"
        >
          Promo code
        </label>
        <div className="mt-4 flex gap-1">
          <input
            id="promo-code"
            type="text"
            placeholder="Enter Promo code"
            className="min-w-0 flex-1 border border-white/70 bg-transparent px-4 py-3 text-sm tracking-[0.08em] text-white outline-none placeholder:text-white/35"
          />
          <button
            type="submit"
            className="border border-white/70 px-5 py-3 text-sm tracking-[0.08em] text-white transition hover:bg-white hover:text-black"
          >
            Apply
          </button>
        </div>
      </form>

      <button
        type="button"
        className="mt-9 w-full border border-white/70 px-6 py-3 text-lg tracking-[0.1em] text-white transition hover:bg-white hover:text-black"
      >
        Checkout
      </button>
    </aside>
  )
}

export default OrderSummary
