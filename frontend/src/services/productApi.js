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
  return {
    items: result.data?.items ?? [],
    pagination: result.data?.pagination ?? {
      page: 1,
      pageSize: 12,
      totalItems: 0,
      totalPages: 1,
    },
  }
}

export const fetchProductsWithQuery = async (query = {}) => {
  const params = new URLSearchParams()
  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      params.set(key, String(value))
    }
  })

  const result = await getJson(`${API_BASE_URL}/products?${params.toString()}`)
  return {
    items: result.data?.items ?? [],
    pagination: result.data?.pagination ?? {
      page: 1,
      pageSize: 12,
      totalItems: 0,
      totalPages: 1,
    },
  }
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
