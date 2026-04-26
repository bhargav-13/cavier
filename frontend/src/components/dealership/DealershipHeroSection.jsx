import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from '../about/Reveal'
import Button from '../utils/Button'

const DealershipHeroSection = ({ content }) => {
  const scrollToContent = () => {
    document.getElementById('dealership-philosophy')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-page text-white">
      <div className="absolute inset-0">
        <img src={content.image}
         alt={content.title} 
        className="h-full w-full object-cover" 
         style={{ objectPosition: "center 20%" }}
        />
       <div className="absolute inset-0 bg-black/40" />
        {/* Left side gradient overlay - darker on left, transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent" /></div>

      <div className="relative z-10 flex min-h-screen items-center px-6 pb-16 pt-32 md:px-12 lg:px-24 xl:px-40">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <Reveal delay={0.08} y={22}>
            <p className="text-[10px] uppercase tracking-[0.5em] text-white/60 md:text-xs">
              {content.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.16} y={30}>
            <h1 className="mt-6 text-4xl font-light leading-[1.1] text-white md:text-6xl">
              {content.title}
            </h1>
          </Reveal>

          <Reveal delay={0.24} y={26}>
            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-white/70 md:text-base md:leading-8">
              {content.description}
            </p>
          </Reveal>

          <Reveal delay={0.32} y={20}>
            <Button
              onClick={scrollToContent}
              text={content.ctaLabel}
              icon={<ChevronDown size={16} />}
            />
          </Reveal>
        </motion.div>
      </div>
    </section>
  )
}

export default DealershipHeroSection
