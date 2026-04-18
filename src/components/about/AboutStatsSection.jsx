import Reveal from './Reveal.jsx'
import AboutSectionHeading from './AboutSectionHeading.jsx'

const AboutStatsSection = ({ stats }) => {
  return (
    <section className="bg-page py-5 text-foreground md:py-10">
      <div className="mx-auto px-6 md:px-12 max-w-6xl">
        <AboutSectionHeading title="Cavier in Numbers" />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <div className="border border-forground/10 bg-transparent px-3 py-10 text-center">
                <p className="text-xl md:text-4xl">{stat.value}</p>
                <p className="mt-4 text-xs text-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutStatsSection
