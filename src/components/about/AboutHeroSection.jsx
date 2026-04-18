import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const AboutHeroSection = ({ content }) => {
  const scrollToContent = () => {
    const nextSection = document.getElementById('about-bath-spaces')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen bg-page text-white overflow-hidden">
      
      {/* 🔲 MAIN SPLIT */}
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2 ">
        
        {/* LEFT CONTENT */}
        <div className="flex items-center px-6 py-10 md:px-16 lg:ps-40 md:py-0">
          <div className="max-w-6xl mt-20">
            
            <Reveal>
              <h1 className="text-xxl leading-[1.2] font-light md:text-5xl">
                {content.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 text-white/60 leading-8">
                {content.description}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <button
                onClick={scrollToContent}
                className="mt-10 flex items-center gap-3 border border-white/40 px-5 py-3 text-sm hover:bg-white hover:text-black transition"
              >
                Scroll Down
                <ChevronDown size={16} />
              </button>
            </Reveal>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[60vh] md:h-full"
        >
          <img
            src={content.image}
            alt={content.title}
            className="h-full w-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  )
}

export default AboutHeroSection