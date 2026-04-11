// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import FeaturImage from '../../assets/home/feature.jpg'
import Clip from '../../assets/home/clip.png'
import GreenEnergy from '../../assets/home/green-energy.png'
import BathIcon from '../../assets/home/bath-icon.png'
import SmartControl from '../../assets/home/smart-control.png'


const features = [
  {
    title: 'Water Efficiency',
    description:
      'Advanced designs that optimize water flow, reducing consumption while maintaining powerful performance.',
      image: Clip,
  },
  {
    title: 'Smart Experience',
    description:
      'Engineered for smooth operation and precise control, ensuring comfort and convenience in every use.',
      image: SmartControl,
  },
  {
    title: 'Durability',
    description:
      'High-quality coatings that resist corrosion, retain shine, and deliver long-lasting durability.',
      image: GreenEnergy
  },
  {
    title: 'Sustainability',
    description:
      'Environment-conscious processes focused on reducing impact while maintaining superior product standards.',
      image: BathIcon
  },
]

const FeatureGlyph = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M6 12.5c2.5-1.2 4.6-3.7 5.7-7 1.1 3.3 3.2 5.8 5.7 7-2.5 1.2-4.6 3.7-5.7 7-1.1-3.3-3.2-5.8-5.7-7Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M12 2.5v4M12 17.5v4M2.5 12h4M17.5 12h4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  )
}

const Features = () => {
  return (
    <section className="relative isolate overflow-hidden text-foreground">
      <motion.div
        initial={{ scale: 1.08, opacity: 0.5 }}
        whileInView={{ scale: 1.02, opacity: 0.85 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.35 }}
        className="absolute inset-0"
      >
        <img
          src={FeaturImage}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 " />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/25 to-black/60" />
      {/* <div className="absolute inset-x-0 top-0 h-px bg-white/10" /> */}
      {/* <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" /> */}

      <div className="relative mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 gap-y-9 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.14,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true, amount: 0.4 }}
              className="mx-auto flex max-w-md flex-col items-center text-center"
            >
              <div className="mb-4 flex items-center gap-3 text-xl font-medium tracking-[0.08em] text-white">
                {/* <FeatureGlyph className="h-4 w-4 text-white" /> */}
                <img src={feature.image} className="h-8 w-8" alt="" />
                <h3>{feature.title}</h3>
              </div>
              <p className="max-w-[400px] text-sm leading-7 text-muted font-normal">
                {feature.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
