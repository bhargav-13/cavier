// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import CraftLeft from '../../assets/home/craft-image-1.png'
import CraftRight from '../../assets/home/craft-image-2.png'

const craftCards = [
  {
    title: 'Bathroom Fitting',
    image: CraftLeft,
  },
  {
    title: 'Bathroom Accessories',
    image: CraftRight,
  },
]

const ArrowIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M5 12h13m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const CraftSection = () => {
  return (
    <section className="bg-page text-foreground">
      <div className="container mx-auto px-6 md:px-12 py-10 md:pt-20 md:pb-0">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-[28px] md:text-4xl font-normal text-start">
            Crafted for Every Bath Space
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 justify-center items-center align-middle">
          {craftCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden h-[420px] md:h-[500px] cursor-pointer justify-center items-center align-middle"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay (HOVER EFFECT) */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-all duration-500" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-2 text-white">
                
                <span className="text-lg md:text-xl transition-all duration-500 group-hover:text-2xl md:group-hover:text-2xl">
                  {card.title}
                </span>

                <ArrowIcon className="w-4 h-4" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CraftSection