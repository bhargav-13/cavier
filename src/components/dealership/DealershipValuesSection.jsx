
import Reveal from '../about/Reveal'

const DealershipValuesSection = ({ items }) => {
  return (
    <section className="overflow-hidden bg-page px-6 pb-10 text-white md:px-12 lg:px-24 lg:pb-10 xl:px-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.45em] text-foreground md:text-xs">
            Value Propositions
          </p>
        </Reveal>
        <div className="mt-8 grid border border-white/10 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            return (
              <Reveal
                key={item.title}
                delay={0.08 + index * 0.06}
                y={24}
                className="h-full"
              >
                <div
                className="min-h-[220px] border-b border-white/10 p-8 md:border-r even:md:border-r-1 xl:border-r xl:[&:nth-child(3n)]:border-r-0 [&:nth-last-child(-n+1)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 xl:[&:nth-last-child(-n+3)]:border-b-0"
                >
                  <img src={item.image} alt={item.title} className="h-4 w-4" />

                  <h3 className="mt-6 max-w-[200px] text-md uppercase tracking-[0.08em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-xs text-xs leading-7 text-white/60">{item.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default DealershipValuesSection
