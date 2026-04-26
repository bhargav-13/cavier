import { motion, useScroll, useTransform } from "framer-motion";
import HeroImage from "../../assets/home/hero.jpg";

const Hero = () => {
  const { scrollY } = useScroll();

  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen overflow-hidden bg-black flex items-center justify-center">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{
          scale: 1.25,
          y: -120,
          opacity: 0,
        }}
        animate={{
          scale: 1.1,
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1,
            duration: 1.2,
          }}
          className="text-white text-5xl md:text-6xl font-light leading-tight"
        >
          Live Extra Ordinary with <br />
          <span>Cavier</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1.4,
            duration: 1,
          }}
          className="text-white mt-6 max-w-3xl mx-auto text-sm tracking-wide text-center"
        >
          Eco-friendly, lead-free bath fittings designed to meet global safety standards. Pioneering innovation with high-performance solutions for modern infrastructure.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.8,
            duration: 1,
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#fff",
            color: "#000",
          }}
          className="relative mt-10 px-12 py-4 text-white  text-sm border border-white-forefround overflow-hidden group"
        >
          <span className="relative z-10">Explore More</span>
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero
