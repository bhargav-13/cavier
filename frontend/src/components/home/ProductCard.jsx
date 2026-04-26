import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const ProductCard = ({ title, category, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[500px] cursor-pointer overflow-hidden bg-zinc-900"
    >
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full transform p-8 transition-transform duration-500 group-hover:-translate-y-2">
        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white">{category}</p>
        <h3 className="font-serif text-2xl tracking-wide text-white">{title}</h3>
        <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          View Details <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  )
}

export default ProductCard
