import { useEffect, useState } from 'react'

import { fetchProductById } from '../services/productApi.js'

const useProduct = (id) => {
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    const loadProduct = async () => {
      try {
        setLoading(true)
        const apiProduct = await fetchProductById(id)

        if (!isMounted) {
          return
        }

        setProduct(apiProduct || null)
        setError('')
      } catch (loadError) {
        if (!isMounted) {
          return
        }

        setProduct(null)
        setError(loadError.message || 'Unable to load product')
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    if (id) {
      loadProduct()
    }

    return () => {
      isMounted = false
    }
  }, [id])

  return {
    product,
    loading,
    error,
  }
}

export default useProduct
