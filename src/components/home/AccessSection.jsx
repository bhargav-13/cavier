// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import AccessBg from '../../assets/home/AccessBg.jpg'

const AccessSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-elevated text-foreground">
      <motion.div
        initial={{ scale: 1.06, opacity: 0.3 }}
        whileInView={{ scale: 1.01, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.4 }}
        className="absolute inset-0"
      >
        <img
          src={AccessBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center object-fit"
          style={{ objectPosition: "center 60%" }}
        />
      </motion.div>

      <div className="absolute inset-0 " />

      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-end px-6 py-8 md:min-h-[660px] md:px-12 md:pt-10 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-[20rem] pb-2 md:max-w-[34rem]"
          
        >
          <p className="font-brittany text-[34px] leading-[3.12] tracking-[0.1rem] text-foreground md:text-[52px] lg:text-4xl">
            Design For Your Space Built For Your Way
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default AccessSection
