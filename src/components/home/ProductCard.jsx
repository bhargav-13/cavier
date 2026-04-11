import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

export default function ProductCard({ title, category, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative h-[500px] cursor-pointer overflow-hidden bg-zinc-900"
    >
      <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 p-8 w-full transform group-hover:-translate-y-2 transition-transform duration-500">
        <p className="text-white text-[10px] uppercase tracking-[0.3em] mb-2">{category}</p>
        <h3 className="text-white text-2xl font-serif tracking-wide">{title}</h3>
        <div className="mt-4 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[10px] uppercase tracking-widest">
          View Details <ChevronRight className="w-3 h-3" />
        </div>
      </div>
    </motion.div>
  )
}
