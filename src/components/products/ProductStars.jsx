const ProductStars = ({ count = 5, className = '' }) => {
  return (
    <div className={`flex items-center justify-center gap-1 text-white ${className}`.trim()}>
      {Array.from({ length: count }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-3 w-3 fill-current"
        >
          <path d="m12 2 2.9 6.4 7.1.6-5.4 4.7 1.7 6.9L12 16.9 5.7 20.6l1.7-6.9L2 9l7.1-.6L12 2Z" />
        </svg>
      ))}
    </div>
  )
}

export default ProductStars
