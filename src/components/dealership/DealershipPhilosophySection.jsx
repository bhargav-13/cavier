import AboutSectionHeading from "../about/AboutSectionHeading"
import Reveal from "../about/Reveal"

const DealershipPhilosophySection = ({ content }) => {
  return (
    <section
      id="dealership-philosophy"
      className="bg-page px-6 py-10 text-white md:px-12 lg:px-24 lg:py-24 xl:px-40"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal delay={0.08}>
          <p className="text-sm uppercase tracking-[0.45em] text-white/45 md:text-xs">
            {content.label}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:gap-16">
          <Reveal delay={0.14}>
            <AboutSectionHeading
              eyebrow={content.eyebrow}
              title={content.lead}
              className="max-w-xl"
            />
            </Reveal>
          <p className="max-w-5xl self-end text-sm  text-white/60 md:text-xs md:leading-8">
            {content.body}
          </p>
        </div>
      </div>
    </section>
  )
}

export default DealershipPhilosophySection
