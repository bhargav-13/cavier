import { motion } from "framer-motion";
import AccessBg from "../../assets/home/AccessBg.jpg";

const AccessSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-screen overflow-hidden bg-elevated text-foreground">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0.4 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute inset-0"
      >
        <img
          src={AccessBg}
          alt="Background"
          className="w-full h-full object-cover"
          style={{
            objectPosition: "center 60%",
          }}
        />
      </motion.div>

      {/* Overlay (optional for readability) */}
      <div className="absolute inset-0 bg-black/10 md:bg-black/20" />

      {/* Content */}
      <div className="relative mx-auto flex items-end min-h-[70vh] md:min-h-screen max-w-7xl px-5 sm:px-6 md:px-10 lg:px-12 pb-6 md:pb-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[45%]"
        >
          <p className="font-brittany text-[24px] leading-[3.12] tracking-[0.1rem] text-foreground md:text-[52px] lg:text-4xl">
            Design For Your Space Built For Your Way
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AccessSection;