import Reveal from '../about/Reveal'

const DealershipPartnerModelsSection = ({ models }) => {
  return (
    <section className="overflow-hidden bg-page px-6 pb-16 text-white md:px-12 lg:px-24 lg:py-20 xl:px-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-center text-[10px] uppercase tracking-[0.45em] text-white/45 md:text-xs">
            CANDIDATE PROFILES
          </p>
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {models.map((model, index) => (
            <Reveal key={model.title} delay={0.08 + index * 0.08} y={26}>
              <div className="border border-white/10 p-8 md:p-10">
                <h3 className="text-2xl font-light text-muted-strong">{model.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-5 text-muted md:text-sm md:leading-8">
                  {model.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DealershipPartnerModelsSection
