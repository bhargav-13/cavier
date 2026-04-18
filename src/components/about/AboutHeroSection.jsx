import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const AboutHeroSection = ({ content }) => {
  const scrollToContent = () => {
    const nextSection = document.getElementById('about-bath-spaces')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative h-screen bg-page overflow-hidden">
      
      {/* RIGHT IMAGE - Positioned absolutely to fill right half from top */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 h-full w-full md:w-[645px]"
      >
        <img
          src={content.image}
          alt={content.title}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex h-full w-full items-center md:w-1/2 px-6 md:px-16 lg:ps-40 ">
        <div className="max-w-6xl mt-10 md:mt-0">
          
          <Reveal>
            <h1 className="text-3xl md:text-5xl leading-[1.2] font-light text-page md:text-foreground ">
              {content.title}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-sm text-page md:text-white/60 leading-8">
              {content.description}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <button
              onClick={scrollToContent}
              className="mt-10 flex items-center gap-3 border border-page md:border-white/40 text-page md:text-foreground px-5 py-3 text-sm hover:bg-black hover:text-white md:hover:bg-white md:hover:text-black transition"
            >
              Scroll Down
              <ChevronDown size={16} />
            </button>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
export default AboutHeroSection