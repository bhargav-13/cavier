const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

const getJson = async (url) => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  return response.json()
}

export const fetchProducts = async () => {
  const result = await getJson(`${API_BASE_URL}/products`)
  return result.data ?? []
}

export const fetchProductById = async (id) => {
  const result = await getJson(`${API_BASE_URL}/products/${id}`)
  return result.data ?? null
}

export const createProduct = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/products`, {
    method: 'POST',
    body: formData,
  })

  const result = await response.json()

  if (!response.ok) {
    throw new Error(result.message || 'Unable to create product')
  }

  return result.data
}
