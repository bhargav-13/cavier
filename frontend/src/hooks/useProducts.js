import { useEffect, useState } from 'react'

import { fallbackCatalogProducts } from '../data/productCatalog.js'
import { fetchProducts } from '../services/productApi.js'

const useProducts = () => {
  const [products, setProducts] = useState(fallbackCatalogProducts)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const loadProducts = async () => {
      try {
        setLoading(true)
        const apiProducts = await fetchProducts()

        if (!isMounted) {
          return
        }

        setProducts(apiProducts.length > 0 ? apiProducts : fallbackCatalogProducts)
        setError('')
      } catch (loadError) {
        if (!isMounted) {
          return
        }

        setProducts(fallbackCatalogProducts)
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
  }, [])

  return {
    products,
    loading,
    error,
  }
}

export default useProducts
