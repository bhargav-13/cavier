import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useMemo, useState, useEffect } from 'react'
import { ChevronRight } from 'lucide-react'

const StarRow = () => {
  return (
    <div className="flex items-center gap-1 text-[#f0c44c]">
      {[...Array(5)].map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" className="h-4 w-4 fill-current">
          <path d="m12 2 2.9 6.4 7.1.6-5.4 4.7 1.7 6.9L12 16.9 5.7 20.6l1.7-6.9L2 9l7.1-.6L12 2Z" />
        </svg>
      ))}
    </div>
  )
}

const ExperienceCard = ({ card, index, total, virtualIndex }) => {
  const position = useTransform(virtualIndex, (value) => {
    const baseIndex = index % total
    const diff = baseIndex - value

    if (diff > total / 2) return diff - total
    if (diff < -total / 2) return diff + total

    return diff
  })

  const x = useTransform(position, [-2, 0, 2], [-220, 0, 220])
  const scale = useTransform(position, [-2, 0, 2], [0.8, 1, 0.8])
  const opacity = useTransform(position, [-2, 0, 2], [0.2, 1, 0.2])
  const zIndex = useTransform(position, (value) => Math.round(100 - Math.abs(value) * 10))

  return (
    <motion.article
      className="
        absolute
        h-[160px]
        w-[90vw]
        rounded-[18px]
        border border-white/20
        bg-[#2a2a2a]
        p-4 shadow-xl
        flex flex-col
      h-[200px]
        sm:w-[320px]
        md:h-[200px]
        md:w-[420px]
      "
      style={{ x, scale, opacity, zIndex }}
    >
      <h3 className="text-sm font-medium sm:text-base">{card.name}</h3>

      <p className="text-xs italic opacity-80">-{card.role}</p>

      <p className="mt-3 text-xs leading-5 sm:text-sm sm:leading-6">{card.quote}</p>

      <div className="absolute bottom-4 left-4 mt-4">
        <StarRow />
      </div>
    </motion.article>
  )
}

const ExperienceCarouselSection = ({
  title,
  buttonLabel = 'Explore Products',
  cards,
}) => {
  const sectionRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const loopedCards = useMemo(() => {
    return [...cards, ...cards, ...cards]
  }, [cards])

  const total = cards.length

  const virtualIndex = useTransform(
    scrollYProgress,
    [1, 0],
    [1, total]
  )

  const progress = useTransform(scrollYProgress, [0, 1], [1, 0])

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative text-white"
       style={{
        height: `${total * (isMobile ? 80 : 40)}vh`,
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 py-10">

          {/* GRID */}
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">

            {/* RIGHT (cards) — first on mobile, second on desktop */}
            <div className="relative flex h-[250px] flex-col justify-center md:h-[280px] lg:order-2">
              <div className="relative flex flex-1 items-center justify-center">
                {loopedCards.map((card, index) => (
                  <ExperienceCard
                    key={`${card.name}-${index}`}
                    card={card}
                    index={index}
                    total={total}
                    virtualIndex={virtualIndex}
                  />
                ))}
              </div>

              <div className="mt-4 flex justify-end">
                <div className="h-[2px] w-full bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    style={{ scaleX: progress }}
                    className="h-full bg-white origin-left rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* LEFT (title + button) — second on mobile, first on desktop */}
            <div className="max-w-full lg:max-w-sm text-start lg:text-left lg:order-1">
              <h2 className="text-[32px] md:text-4xl font-semibold leading-tight">
                {title}
              </h2>

              <button className="mt-6 inline-flex items-center gap-2 border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition">
                {buttonLabel}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default ExperienceCarouselSection
