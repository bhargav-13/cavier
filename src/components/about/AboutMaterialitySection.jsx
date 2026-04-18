import AboutSectionHeading from './AboutSectionHeading.jsx'
import Reveal from './Reveal.jsx'

const AboutMaterialitySection = ({ content }) => {
  return (
    <section className="bg-page py-5 text-foreground md:py-10">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:px-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal className="overflow-hidden">
          <div className="aspect-square overflow-hidden bg-surface">
            <img
              src={content.image}
              alt={content.title}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div>
          <AboutSectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
          />

          <div className="mt-8 space-y-8">
            {content.points.map((point, index) => (
              <Reveal
                key={point.title}
                delay={index * 0.08}
                className="border-t border-white/10 pt-6"
              >
                <h3 className="text-sm uppercase text-muted-strong">
                  {point.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-muted-strong">
                  {point.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMaterialitySection
