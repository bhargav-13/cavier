import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import PremiumBath from '../../assets/home/craft-image-1.png'
import IntermediateBath from '../../assets/home/craft-image-2.png'
import AlliedBath from '../../assets/home/hero.jpg'
import TextureBath from '../../assets/home/craft-image-2.png'
import FinishinImage1 from '../../assets/home/finishing-1.png'
import FinishinImage2 from '../../assets/home/finishing-2.jpg'
import FinishinImage3 from '../../assets/home/finishing-3.jpg'

const finishingCards = [
  {
    title: 'Premium',
    image: PremiumBath,
    objectPosition: 'center center',
  },
  {
    title: 'Intermediate',
    image: IntermediateBath,
    objectPosition: 'center center',
  },
  {
    title: 'Allied & Concealed',
    image: AlliedBath,
    objectPosition: 'center center',
  },
  {
    title: 'Textured Stone',
    image: TextureBath,
    objectPosition: 'center center',
  },
  {
    title: 'Signature Finish',
    image: PremiumBath,
    objectPosition: 'center top',
  },
  {
    title: 'Intermediate',
    image: FinishinImage1,
    objectPosition: 'center top',
  },
  {
    title: 'Signature Finish',
    image: FinishinImage2,
    objectPosition: 'center top',
  },
  {
    title: 'Premium',
    image: FinishinImage3,
    objectPosition: 'center top',
  },
]

const ArrowIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M7 17 17 7m0 0H9m8 0v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const FinishingSection = () => {
  const sectionRef = useRef(null)
  const railRef = useRef(null)

  const [travel, setTravel] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const updateTravel = () => {
      const rail = railRef.current
      if (!rail) return

      const viewport = window.innerWidth

      const maxTravel = Math.max(
        0,
        rail.scrollWidth - viewport * 0.92
      )

      setTravel(maxTravel)
    }

    updateTravel()

    window.addEventListener('resize', updateTravel)

    return () => window.removeEventListener('resize', updateTravel)
  }, [])

  // RIGHT TO LEFT SCROLL
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -travel]
  )

  const fill = useTransform(
    scrollYProgress,
    [0, 1],
    [0.2, 1]
  )

  return (
    <section
      ref={sectionRef}
      className="relative bg-page text-foreground"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-16 flex min-h-screen items-center overflow-hidden">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 md:px-12 md:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.35fr] lg:gap-14">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              className="max-w-md"
            >
              <h2 className="text-[30px] font-normal leading-tight tracking-[0.02em] md:text-[42px]">
                The Finishing Touch
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-muted-strong md:text-[15px]">
                Precision lies in every detail. Explore our curated bath
                collections designed to enhance modern living with style,
                performance, and lasting quality.
              </p>

              <button className="mt-8 inline-flex items-center gap-3 border border-foreground px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-foreground/90 transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-page">
                View More
                <ArrowIcon />
              </button>
            </motion.div>

            {/* RIGHT SLIDER */}
            <div className="min-w-0">
              <div className="relative overflow-hidden">
                <motion.div
                  style={{ x }}
                  ref={railRef}
                  className="flex w-max items-stretch gap-4 md:gap-6"
                >
                {finishingCards.map((card, index) => (
  <motion.article
    key={index}
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    }}
    viewport={{
      once: true,
      amount: 0.2,
    }}
    className={`
      group flex flex-col
      w-[220px] md:w-[240px] lg:w-[260px]
      ${index % 2 === 1 ? 'mt-20 md:mt-16' : 'mt-0'}
    `}
  >
    {/* IMAGE */}
    <div className="relative h-[320px] md:h-[395px] overflow-hidden bg-[#111]">
      <img
        src={card.image}
        alt={card.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        style={{
          objectPosition: card.objectPosition,
        }}
      />
    </div>

    {/* TEXT BELOW IMAGE */}
    <div className="mt-3 flex items-center justify-between text-foreground">
      <span className="text-[13px] md:text-[14px] tracking-[0.06em]">
        {card.title}
      </span>

      <ArrowIcon />
    </div>
  </motion.article>
))}
                </motion.div>
              </div>

              {/* PROGRESS BAR */}
              <div className="mt-6 flex items-center gap-3">
                <div className="h-[2px] flex-1 rounded-full bg-border">
                  <motion.div
                    style={{ scaleX: fill }}
                    className="h-full origin-left rounded-full bg-foreground"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FinishingSection
