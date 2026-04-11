// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import AccessBg from '../../assets/home/hero.jpg'

export default function AccessSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#141311] text-white">
      <motion.div
        initial={{ scale: 1.06, opacity: 0.3 }}
        whileInView={{ scale: 1.01, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute inset-0"
      >
        <img
          src={AccessBg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/52" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/20 to-black/30" />

      <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-end px-6 py-8 md:min-h-[560px] md:px-12 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.35 }}
          className="max-w-[20rem] pb-2 md:max-w-[34rem]"
        >
          <p className="font-brittany text-[34px] leading-[1.12] tracking-[0.01em] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.35)] md:text-[52px] lg:text-[64px]">
            Design For Your Space Built For Your Way
          </p>
        </motion.div>
      </div>
    </section>
  )
}
