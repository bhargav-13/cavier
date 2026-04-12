import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

import PremiumBath from '../../assets/home/craft-image-1.png'
import IntermediateBath from '../../assets/home/craft-image-2.png'
import AlliedBath from '../../assets/home/hero.jpg'
import TextureBath from '../../assets/home/craft-image-2.png'
import FinishinImage1 from '../../assets/home/finishing-1.png'
import FinishinImage2 from '../../assets/home/finishing-2.jpg'
import FinishinImage3 from '../../assets/home/finishing-3.jpg'

const finishingCards = [
  {
    title: 'Premium',
    image: PremiumBath,
    objectPosition: 'center center',
  },
  {
    title: 'Intermediate',
    image: IntermediateBath,
    objectPosition: 'center center',
  },
  {
    title: 'Allied & Concealed',
    image: AlliedBath,
    objectPosition: 'center center',
  },
  {
    title: 'Textured Stone',
    image: TextureBath,
    objectPosition: 'center center',
  },
  {
    title: 'Signature Finish',
    image: PremiumBath,
    objectPosition: 'center top',
  },
  {
    title: 'Intermediate',
    image: FinishinImage1,
    objectPosition: 'center top',
  },
  {
    title: 'Signature Finish',
    image: FinishinImage2,
    objectPosition: 'center top',
  },
  {
    title: 'Premium',
    image: FinishinImage3,
    objectPosition: 'center top',
  },
];

// Replicated the exact top-right arrow from the image
const ArrowIcon = () => {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-[18px] w-[18px]">
      <path
        d="M7 17L17 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 17 17 7m0 0H9m8 0v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

// ---------------------------------------------------------------------------
// INDIVIDUAL CARD COMPONENT
// Handles the dynamic 3D circular curve matching the staggered image look
// ---------------------------------------------------------------------------
const FinishingCard = ({ card, index, trackX }) => {
  const cardWidth = 260; // Card width (lg breakpoint)
  const gap = 24; // gap-6
  const itemFullWidth = cardWidth + gap;

  // Center coordinate of THIS specific card on the track
  const cardLocalCenter = itemFullWidth / 2 + index * itemFullWidth;

  // The focal point where a card drops to the "bottom".
  // Setting this to 414 precisely targets the 2nd card (index 1) to be at the
  // bottom initially (when trackX is 0), perfectly replicating the static image!
  const focusPoint = 414;

  const perfectCenterTrackX = focusPoint - cardLocalCenter;

  // The distance over which the drop-down effect happens
  const range = 320; 
  
  const leftX = perfectCenterTrackX - range;
  const rightX = perfectCenterTrackX + range;

  // 1. Y Translation: Forms the "U" shape. 0 at edges (top), 130 at center (bottom)
  const y = useTransform(
    trackX,
    [leftX, perfectCenterTrackX, rightX],
    [0, 100, 0] 
  );



  // 3. Scale: Subtle depth, matching the image's clean aspect ratio
  const scale = useTransform(
    trackX,
    [leftX, perfectCenterTrackX, rightX],
    [0.92, 1, 0.92]
  );

  // 4. Opacity: Dim non-focused cards slightly
  const opacity = useTransform(
    trackX,
    [leftX, perfectCenterTrackX, rightX],
    [0.6, 1, 0.6]
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, delay: index * 0.08 }}
      style={{
        y,
        scale,
        opacity,
        transformOrigin: "center bottom",
        
      }}
      className="group flex flex-col w-[220px] md:w-[240px] lg:w-[260px] shrink-0 transform-gpu"
    >
      {/* IMAGE CONTAINER */}
      <div className="relative h-[320px] md:h-[350px] overflow-hidden ">
        <img
          src={card.image}
          alt={card.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectPosition: card.objectPosition }}
        />
      </div>

      {/* TEXT & ARROW EXACTLY AS IN IMAGE */}
      <div className="mt-3 flex items-center justify-between  group-hover:text-white transition-colors px-0.5">
        <span className="text-sm md:text-sm tracking-wide font-normal">
          {card.title}
        </span>
        <ArrowIcon />
      </div>
    </motion.article>
  );
};


  
const finishingSection = () => {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    const updateTravel = () => {
      const rail = railRef.current;
      if (!rail) return;
      const viewport = window.innerWidth;
      const maxTravel = Math.max(0, rail.scrollWidth - viewport * 0.92);
      setTravel(maxTravel);
    };

    updateTravel();
    window.addEventListener('resize', updateTravel);
    return () => window.removeEventListener('resize', updateTravel);
  }, []);

  const trackX = useTransform(scrollYProgress, [0, 1], [0, -travel]);
  
  // Progress bar fill
  const fill = useTransform(scrollYProgress, [0, 1], [0.15, 1]);

  return (
    <main className=" min-h-screen font-sans selection:bg-white selection:text-black">
    
      <section
        ref={sectionRef}
        className="relative"
        style={{ height: '200vh' }}
      >
        <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
          <div className="mx-auto w-full max-w-[1300px] px-6 py-16 md:px-12 md:py-20">
            <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.35fr] lg:gap-14">
              
              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: false, amount: 0.35 }}
                className="max-w-[400px] z-10 pt-4"
              >
                <h2 className="text-[30px] font-normal leading-tight tracking-[0.03em] md:text-[38px] text-white">
                  The Finishing Touch
                </h2>

                <p className="mt-6 text-[14px] leading-relaxed text-muted md:text-[15px]">
                  Precision lies in every detail. Explore our curated bath
                  collections designed to enhance modern living with style,
                  performance, and lasting quality.
                </p>

                <button className="mt-10 inline-flex items-center gap-3 border border-white px-5 py-2.5 text-sm transition-all duration-300 hover:border-white hover:bg-white hover:text-black">
                  View More
                  <ArrowIcon />
                </button>
              </motion.div>

              {/* RIGHT SLIDER (3D Circular Track) */}
              <div className="min-w-0 relative">
                <div className="relative overflow-hidden py-24 -my-24 ">
                  <motion.div
                    style={{ 
                      x: trackX, 
                      perspective: 1200 
                    }}
                    ref={railRef}
                    className="flex w-max items-start gap-4 md:gap-6 px-4"
                  >
                    {finishingCards.map((card, index) => (
                      <FinishingCard
                        key={index}
                        card={card}
                        index={index}
                        trackX={trackX}
                      />
                    ))}
                  </motion.div>
                </div>

                {/* PROGRESS BAR - Match exact styling from image */}
                <div className="mt-12 md:mt-40 mr-8">
                  <div className="h-[2px] w-full rounded-full overflow-hidden">
                    <motion.div
                      style={{ scaleX: fill }}
                      className="h-full origin-left bg-white"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    
    </main>
  );
}
export default  finishingSection