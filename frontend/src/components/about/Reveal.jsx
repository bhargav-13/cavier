import { motion } from 'framer-motion'

const baseTransition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1],
}

const Reveal = ({
  children,
  className = '',
  delay = 0,
  x = 0,
  y = 28,
  amount = 0.25,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ ...baseTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
