import { createContext, createElement, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import {
  addToCart as addToCartApi,
  addToWishlist as addToWishlistApi,
  fetchCart,
  fetchWishlist,
  removeFromCart as removeFromCartApi,
  removeFromWishlist as removeFromWishlistApi,
  updateCartQuantity as updateCartQuantityApi,
} from '../services/shopApi.js'

const CommerceContext = createContext(null)

const CommerceProvider = ({ children }) => {
  const [cartProductIds, setCartProductIds] = useState(new Set())
  const [cartItems, setCartItems] = useState([])
  const [wishlistProductIds, setWishlistProductIds] = useState(new Set())
  const [wishlistItems, setWishlistItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [processingProductIds, setProcessingProductIds] = useState(new Set())

  const setCartState = useCallback((items) => {
    setCartItems(items)
    setCartProductIds(new Set(items.map((item) => item.productId)))
  }, [])

  const applyCart = useCallback((cart) => {
    const items = (cart.items || []).map((item) => ({
      ...item,
      quantity: Math.max(1, Number(item.quantity) || 1),
    }))
    setCartState(items)
  }, [setCartState])

  const applyWishlist = useCallback((wishlist) => {
    const items = wishlist.items || []
    setWishlistItems(items)
    setWishlistProductIds(new Set(items.map((item) => item.productId)))
  }, [])

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
    setError('')
    try {
      const [cart, wishlist] = await Promise.all([fetchCart(), fetchWishlist()])
      applyCart(cart)
      applyWishlist(wishlist)
    } catch (loadError) {
      setError(loadError.message || 'Unable to load cart')
    } finally {
      setLoading(false)
    }
  }, [applyCart, applyWishlist])

  const reloadWishlist = useCallback(async () => {
    const wishlist = await fetchWishlist()
    applyWishlist(wishlist)
  }, [applyWishlist])

  const reloadCart = useCallback(async () => {
    const cart = await fetchCart()
    applyCart(cart)
  }, [applyCart])

  useEffect(() => {
    loadCommerceState()
  }, [loadCommerceState])

  const toggleWishlist = useCallback(
    async (productId) => {
      if (!productId) return
      setProcessing(productId, true)
      setError('')
      try {
        if (wishlistProductIds.has(productId)) {
          setWishlistItems((items) => items.filter((item) => item.productId !== productId))
          setWishlistProductIds((ids) => {
            const next = new Set(ids)
            next.delete(productId)
            return next
          })
          const data = await removeFromWishlistApi(productId)
          applyWishlist(data)
        } else {
          const data = await addToWishlistApi(productId)
          applyWishlist(data)
        }
      } catch (wishlistError) {
        setError(wishlistError.message || 'Unable to update wishlist')
        await reloadWishlist()
      } finally {
        setProcessing(productId, false)
      }
    },
    [applyWishlist, reloadWishlist, setProcessing, wishlistProductIds]
  )

  const toggleCart = useCallback(
    async (productId) => {
      if (!productId) return
      setProcessing(productId, true)
      setError('')
      try {
        if (cartProductIds.has(productId)) {
          setCartState(cartItems.filter((item) => item.productId !== productId))
          const data = await removeFromCartApi(productId)
          applyCart(data)
        } else {
          const data = await addToCartApi(productId, 1)
          applyCart(data)
        }
      } catch (cartError) {
        setError(cartError.message || 'Unable to update cart')
        await reloadCart()
      } finally {
        setProcessing(productId, false)
      }
    },
    [applyCart, cartItems, cartProductIds, reloadCart, setCartState, setProcessing]
  )

  const addToCart = useCallback(
    async (productId, quantity = 1) => {
      if (!productId) return
      setProcessing(productId, true)
      setError('')
      try {
        const data = await addToCartApi(productId, quantity)
        applyCart(data)
      } catch (cartError) {
        setError(cartError.message || 'Unable to add item to cart')
        await reloadCart()
      } finally {
        setProcessing(productId, false)
      }
    },
    [applyCart, reloadCart, setProcessing]
  )

  const removeFromCart = useCallback(
    async (productId) => {
      if (!productId) return
      setProcessing(productId, true)
      setError('')
      setCartState(cartItems.filter((item) => item.productId !== productId))
      try {
        const data = await removeFromCartApi(productId)
        applyCart(data)
      } catch (cartError) {
        setError(cartError.message || 'Unable to remove item from cart')
        await reloadCart()
      } finally {
        setProcessing(productId, false)
      }
    },
    [applyCart, cartItems, reloadCart, setCartState, setProcessing]
  )

  const updateCartQuantity = useCallback(
    async (productId, quantity) => {
      const nextQuantity = Math.max(1, Number(quantity) || 1)
      if (!productId) return
      setProcessing(productId, true)
      setError('')
      setCartState(
        cartItems.map((item) =>
          item.productId === productId ? { ...item, quantity: nextQuantity } : item
        )
      )
      try {
        const data = await updateCartQuantityApi(productId, nextQuantity)
        applyCart(data)
      } catch (cartError) {
        setError(cartError.message || 'Unable to update item quantity')
        await reloadCart()
      } finally {
        setProcessing(productId, false)
      }
    },
    [applyCart, cartItems, reloadCart, setCartState, setProcessing]
  )

  const value = useMemo(
    () => ({
      loading,
      error,
      cartItems,
      cartProductIds,
      wishlistItems,
      wishlistProductIds,
      cartCount: cartItems.reduce((count, item) => count + (Number(item.quantity) || 0), 0),
      wishlistCount: wishlistProductIds.size,
      isInCart: (productId) => cartProductIds.has(productId),
      isInWishlist: (productId) => wishlistProductIds.has(productId),
      isProcessing: (productId) => processingProductIds.has(productId),
      addToCart,
      removeFromCart,
      updateCartQuantity,
      toggleCart,
      toggleWishlist,
    }),
    [
      loading,
      error,
      cartItems,
      cartProductIds,
      wishlistItems,
      wishlistProductIds,
      processingProductIds,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      toggleCart,
      toggleWishlist,
    ]
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
