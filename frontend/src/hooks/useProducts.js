import { useEffect, useState } from 'react'

import { fetchProductsWithQuery } from '../services/productApi.js'

const useProducts = (query = {}) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 12,
    totalItems: 0,
    totalPages: 1,
  })

  useEffect(() => {
    let isMounted = true

    const loadProducts = async () => {
      try {
        setLoading(true)
        const result = await fetchProductsWithQuery(query)
        const apiProducts = result.items ?? []

        if (!isMounted) {
          return
        }

        setProducts(apiProducts)
        setPagination(result.pagination)
        setError('')
      } catch (loadError) {
        setError(loadError.message || 'Unable to load products')
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      isMounted = false
    }
  }, [
    query.area,
    query.finish,
    query.category,
    query.shape,
    query.theme,
    query.minPrice,
    query.maxPrice,
    query.page,
    query.pageSize,
  ])

  return {
    products,
    loading,
    error,
    pagination,
  }
}

export default useProducts
