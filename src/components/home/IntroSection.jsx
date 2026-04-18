import { motion } from 'framer-motion'

const IntroSection = () => {
  return (
    <section className="bg-page text-foreground">
      <div className="px-6 md:px-12 py-10 md:py-20">
        <motion.div
          className="mx-auto max-w-6xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          <motion.p
            className="mx-auto text-[22px] leading-[1.45] tracking-[0.02em] text-muted-strong md:text-[29px] md:leading-[1.5] lg:text-[34px]"
          >
            <motion.span
              className="inline-block font-semibold text-foreground"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              At Cavier,
            </motion.span>{' '}

            <motion.span
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              we combine precision engineering with refined design to create bath fittings that elevate modern spaces. With advanced manufacturing and superior finishing, every product reflects our commitment to quality, durability, and timeless appeal.
            </motion.span>

          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default IntroSection
