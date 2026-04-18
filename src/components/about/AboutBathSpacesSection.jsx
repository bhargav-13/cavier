import { motion } from 'framer-motion'
import AboutSectionHeading from './AboutSectionHeading.jsx'
import Reveal from './Reveal.jsx'

const AboutBathSpacesSection = ({ items }) => {
  return (
    <section
      id="about-bath-spaces"
      className="bg-page py-5 text-foreground md:py-10 md:pt-20"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <AboutSectionHeading
          title="Crafted for Every Bath Space"
          className="ml-0 md:ml-1"
        />

        <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-7">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="group relative overflow-hidden bg-surface"
              >
                <div className="aspect-[1.12] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-5 right-6 md:bottom-6 md:right-7">
                  <h3 className="text-[28px] font-normal tracking-[0.03em] text-black/95 md:text-[30px] lg:text-[34px]">
                    {item.title}
                  </h3>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutBathSpacesSection
