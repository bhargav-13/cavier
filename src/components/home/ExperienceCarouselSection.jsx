// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo } from 'react'
import { ChevronRight } from 'lucide-react'

const StarRow = () => {
  return (
    <div className="flex items-center gap-1 text-[#f0c44c]">
      {[...Array(5)].map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-3 w-3 fill-current">
          <path d="m12 2 2.9 6.4 7.1.6-5.4 4.7 1.7 6.9L12 16.9 5.7 20.6l1.7-6.9L2 9l7.1-.6L12 2Z" />
        </svg>
      ))}
    </div>
  )
}

const ExperienceCarouselSection = ({
  title,
  buttonLabel = 'Explore Products',
  cards,
}) => {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // 🔥 Duplicate cards for infinite illusion
  const loopedCards = useMemo(() => {
    return [...cards, ...cards, ...cards]
  }, [cards])

  const total = cards.length

  // virtual scroll index
  const virtualIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [0, total]
  )

  return (
    <section
      ref={sectionRef}
      className="relative text-white"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-20">

          <div className="grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">

            {/* LEFT */}
            <div className="max-w-sm">
              <h2 className="text-[30px] md:text-[42px]">
                {title}
              </h2>

              <button className="mt-8 inline-flex items-center gap-3 border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
                {buttonLabel}
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* RIGHT */}
            <div className="relative h-[420px] flex items-center justify-center">

              {loopedCards.map((card, index) => {

                // 🔥 normalize index into loop
                const position = useTransform(virtualIndex, (v) => {
                  const baseIndex = index % total
                  const diff = baseIndex - v

                  // wrap around
                  if (diff > total / 2) return diff - total
                  if (diff < -total / 2) return diff + total

                  return diff
                })

                const x = useTransform(position, [-2, 0, 2], [-240, 0, 240])
                const scale = useTransform(position, [-2, 0, 2], [0.8, 1, 0.8])
                const opacity = useTransform(position, [-2, 0, 2], [0.2, 1, 0.2])
                const zIndex = useTransform(position, (v) =>
                  Math.round(100 - Math.abs(v) * 10)
                )

                return (
                  <motion.article
                    key={index}
                    className="absolute w-[280px] md:w-[420px] rounded-[18px] border border-white/20 bg-[#2a2a2a] p-5 shadow-xl"
                    style={{
                      x,
                      scale,
                      opacity,
                      zIndex,
                    }}
                  >
                    <h3 className="text-sm font-medium">
                      {card.name}
                    </h3>
                    <p className="text-xs italic">
                      -{card.role}
                    </p>

                    <p className="mt-4 text-[13px] leading-6">
                      {card.quote}
                    </p>

                    <div className="mt-5">
                      <StarRow className="w-4 h-4"  />
                    </div>
                  </motion.article>
                )
              })}

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default ExperienceCarouselSection
