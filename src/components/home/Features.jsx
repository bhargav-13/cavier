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
    image: GreenEnergy,
  },
  {
    title: 'Sustainability',
    description:
      'Environment-conscious processes focused on reducing impact while maintaining superior product standards.',
    image: BathIcon,
  },
]

const Features = () => {
  return (
    <section className="relative min-h-screen overflow-hidden text-foreground">

      {/* ✅ BACKGROUND (FIXED) */}
      <motion.div
              initial={{ scale: 1.06, opacity: 0.3 }}
              whileInView={{ scale: 1.01, opacity: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true, amount: 0.4 }}
              className="absolute inset-0"
            >
              <img
                src={FeaturImage}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover object-center object-fit"
                style={{ objectPosition: "center 40%" }}
              />
            </motion.div>
         

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70 z-10" />

      {/* CONTENT */}
     <div className="relative z-20 mx-auto max-w-6xl px-6 md:px-12 min-h-screen flex items-center">  
       <div className="grid grid-cols-1 gap-y-20 md:grid-cols-2">

          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: false, amount: 0.4 }} 
              className="mx-auto flex max-w-md flex-col items-center text-center"
            >
              {/* ICON + TITLE */}
              <div className="mb-4 flex items-center gap-3 text-xl font-medium tracking-[0.08em] text-white">
                <img src={feature.image} className="h-8 w-8" alt="" />
                <h3>{feature.title}</h3>
              </div>

              {/* DESCRIPTION */}
              <p className="max-w-[500px] text-sm leading-7 text-muted font-normal">
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