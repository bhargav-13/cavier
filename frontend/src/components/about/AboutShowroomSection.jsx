import { ChevronRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import AboutSectionHeading from './AboutSectionHeading.jsx'
import Button from '../utils/Button.jsx'

const AboutShowroomSection = ({ content }) => {
  return (
    <section className="bg-page py-5 text-foreground md:py-10 overflow-hidden">
      <div className="grid items-center lg:grid-cols-[0.82fr_0.8fr]">
        
        {/* LEFT CONTENT */}
        <div className="px-6 md:px-12 lg:pl-36 pb-10">
          <Reveal>
            <AboutSectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              className="max-w-xl"
            />
          </Reveal>

          <div className="mt-8 space-y-6">
            {content.body.map((paragraph, index) => (
              <Reveal key={paragraph} delay={0.08 + index * 0.06}>
                <p className="max-w-lg text-base leading-8 text-foreground md:text-sm">
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.26}>
            <Button text={content.cta} icon={<ChevronRight />} />
          </Reveal>
        </div>

        {/* RIGHT IMAGE (FULL BLEED) */}
        <Reveal x={40} className="overflow-hidden">
          <div className="h-full">
            <img
              src={content.image}
              alt={content.title}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default AboutShowroomSection