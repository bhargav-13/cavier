import AboutSectionHeading from './AboutSectionHeading.jsx'
import Reveal from './Reveal.jsx'

const AboutFoundationSection = ({ values, visual }) => {
  return (
    <section className="bg-page py-5 text-foreground md:py-10">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <AboutSectionHeading title="The Foundation of Our Excellence" />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.number} delay={index * 0.05}>
              <div className="flex min-h-[290px] flex-col border border-foreground px-5 py-5 md:px-6 md:py-6">
                <p className="text-sm tracking-[0.22em] text-foreground">{value.number}</p>
                <h3 className="mt-auto text-sm uppercase tracking-[0.08em] md:text-xl">
                  {value.title}
                </h3>
                <p className="mt-6 max-w-sm text-sm leading-7 text-muted-strong">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="min-h-[10px] overflow-hidden hover:border hover:border-foreground ">
              <img
                src={visual}
                alt="Cavier design detail"
                className="h-[290px] w-full object-containe transition-transform duration-500 ease-out hover:scale-110"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default AboutFoundationSection
