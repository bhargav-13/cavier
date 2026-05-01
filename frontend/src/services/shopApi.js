const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'
const CLIENT_ID_KEY = 'cavier_client_id'

const getOrCreateClientId = () => {
  const existing = localStorage.getItem(CLIENT_ID_KEY)
  if (existing) {
    return existing
  }

  const generated =
    (globalThis.crypto?.randomUUID?.() ||
      `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`)
      .toString()
  localStorage.setItem(CLIENT_ID_KEY, generated)
  return generated
}

const request = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      'x-client-id': getOrCreateClientId(),
      ...(options.headers || {}),
    },
  })

  const result = await response.json()
  if (!response.ok) {
    throw new Error(result.message || 'Request failed')
  }

  return result.data
}

export const fetchCart = async () => request(`${API_BASE_URL}/cart`)
export const fetchWishlist = async () => request(`${API_BASE_URL}/wishlist`)

export const addToCart = async (productId, quantity = 1) =>
  request(`${API_BASE_URL}/cart/items`, {
    method: 'POST',
    body: JSON.stringify({ productId, quantity }),
  })

export const removeFromCart = async (productId) =>
  request(`${API_BASE_URL}/cart/items/${productId}`, {
    method: 'DELETE',
  })

export const updateCartQuantity = async (productId, quantity) =>
  request(`${API_BASE_URL}/cart/items/${productId}`, {
    method: 'PATCH',
    body: JSON.stringify({ quantity }),
  })

export const addToWishlist = async (productId) =>
  request(`${API_BASE_URL}/wishlist/items`, {
    method: 'POST',
    body: JSON.stringify({ productId }),
  })

export const removeFromWishlist = async (productId) =>
  request(`${API_BASE_URL}/wishlist/items/${productId}`, {
    method: 'DELETE',
  })
