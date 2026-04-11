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

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 shrink-0"
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

export default function CraftSection() {
  return (
    <section className="bg-[#202020] text-white">
      <div className="container mx-auto px-6 py-16 md:px-12 md:py-20">
        <div className="">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-[28px] leading-tight md:text-4xl md:leading-tight font-normal tracking-[0.02em] text-white">
            Crafted for Every Bath Space
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          {craftCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.35 }}
              className="group relative overflow-hidden "
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.2]"
              />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/14 to-black/0" /> */}

              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-sm md:text-lg md:tracking-[0.01em] text-white">
                <span className="whitespace-nowrap">{card.title}</span>
                <ArrowIcon />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      </div>
    </section>
  )
}
