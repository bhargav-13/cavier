import AboutSectionHeading from "../about/AboutSectionHeading"
import Reveal from "../about/Reveal"

const toRoman = (num) => {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']
  return romanNumerals[num - 1] || num
}

const DealershipOfferingsSection = ({ items }) => {
  return (
    <section className="overflow-hidden bg-page px-6 pb-10 pt-8 text-white md:px-12 lg:px-24 xl:px-40">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Reveal>
            <AboutSectionHeading
              title='What We Offer'
              className="max-w-[200px] leading-none"
            />
          </Reveal>
          <Reveal delay={0.08} x={-24} y={0}>
            <div className="mt-5 h-[3px] w-20 bg-foreground" />
          </Reveal>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {items.map((item, index) => (
            <Reveal key={item.title} delay={0.12 + index * 0.08} y={24}>
              <div>
                <p className="text-[10px] uppercase text-muted md:text-xs">
                  Support {toRoman(index + 1)}
                </p>
                <h3 className="mt-4 text-xl font-light text-white">{item.title}</h3>
                <p className="mt-4 max-w-sm text-xs leading-7 text-white/60">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DealershipOfferingsSection