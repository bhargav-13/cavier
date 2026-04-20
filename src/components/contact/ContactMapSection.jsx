import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import Reveal from '../about/Reveal.jsx'
import AboutSectionHeading from '../about/AboutSectionHeading.jsx'

const ContactMapSection = ({ content }) => {
  return (
    <section className="bg-page px-6 py-10 md:px-12 lg:px-20 md:py-0 md:pt-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              {/* <h2 className="mt-4 text-3xl font-light text-white md:text-5xl">{content.title}</h2> */}
            <Reveal>
          <AboutSectionHeading
            title={content.title}
            className="max-w-xl"
          />
        </Reveal>
            </div>
          </div>
        </Reveal>

        <div className="mt-10">
        

          <Reveal delay={0.18}>
            <div className="overflow-hidden">
              <div className="aspect-[40/16] min-h-[220px] max-w-5xl">
                <iframe
                  title="Cavier location map"
                  src={content.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full "
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactMapSection
