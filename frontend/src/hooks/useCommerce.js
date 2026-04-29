import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  addToCart as addToCartApi,
  addToWishlist as addToWishlistApi,
  fetchCart,
  fetchWishlist,
  removeFromCart as removeFromCartApi,
  removeFromWishlist as removeFromWishlistApi,
} from '../services/shopApi.js'

const CommerceContext = createContext(null)

const CommerceProvider = ({ children }) => {
  const [cartProductIds, setCartProductIds] = useState(new Set())
  const [wishlistProductIds, setWishlistProductIds] = useState(new Set())
  const [loading, setLoading] = useState(false)
  const [processingProductIds, setProcessingProductIds] = useState(new Set())

  const setProcessing = useCallback((productId, active) => {
    setProcessingProductIds((prev) => {
      const next = new Set(prev)
      if (active) {
        next.add(productId)
      } else {
        next.delete(productId)
      }
      return next
    })
  }, [])

  const loadCommerceState = useCallback(async () => {
    setLoading(true)
    try {
      const [cart, wishlist] = await Promise.all([fetchCart(), fetchWishlist()])
      setCartProductIds(new Set((cart.items || []).map((item) => item.productId)))
      setWishlistProductIds(new Set((wishlist.items || []).map((item) => item.productId)))
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadCommerceState()
  }, [loadCommerceState])

  const toggleWishlist = useCallback(
    async (productId) => {
      if (!productId) return
      setProcessing(productId, true)
      try {
        if (wishlistProductIds.has(productId)) {
          const data = await removeFromWishlistApi(productId)
          setWishlistProductIds(new Set((data.items || []).map((item) => item.productId)))
        } else {
          const data = await addToWishlistApi(productId)
          setWishlistProductIds(new Set((data.items || []).map((item) => item.productId)))
        }
      } finally {
        setProcessing(productId, false)
      }
    },
    [setProcessing, wishlistProductIds]
  )

  const toggleCart = useCallback(
    async (productId) => {
      if (!productId) return
      setProcessing(productId, true)
      try {
        if (cartProductIds.has(productId)) {
          const data = await removeFromCartApi(productId)
          setCartProductIds(new Set((data.items || []).map((item) => item.productId)))
        } else {
          const data = await addToCartApi(productId, 1)
          setCartProductIds(new Set((data.items || []).map((item) => item.productId)))
        }
      } finally {
        setProcessing(productId, false)
      }
    },
    [cartProductIds, setProcessing]
  )

  const value = useMemo(
    () => ({
      loading,
      cartProductIds,
      wishlistProductIds,
      cartCount: cartProductIds.size,
      wishlistCount: wishlistProductIds.size,
      isInCart: (productId) => cartProductIds.has(productId),
      isInWishlist: (productId) => wishlistProductIds.has(productId),
      isProcessing: (productId) => processingProductIds.has(productId),
      toggleCart,
      toggleWishlist,
    }),
    [loading, cartProductIds, wishlistProductIds, processingProductIds, toggleCart, toggleWishlist]
  )

  return createElement(CommerceContext.Provider, { value }, children)
}

const useCommerce = () => {
  const context = useContext(CommerceContext)
  if (!context) {
    throw new Error('useCommerce must be used within CommerceProvider')
  }
  return context
}

export { CommerceProvider }
export default useCommerce
