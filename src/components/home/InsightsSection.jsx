import { ChevronRight } from 'lucide-react'

const InsightCard = ({ item }) => {
  return (
    <article className="group">
      <div className="overflow-hidden">
        <div className="h-[400px]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ objectPosition: item.objectPosition ?? 'center center' }}
          />
        </div>
      </div>

      <p className="mt-3 max-w-[18rem] text-sm leading-5 text-white">
        {item.title}
      </p>
    </article>
  )
}

const InsightsSection = ({
  title,
  items,
  ctaLabel = 'View More',
  className = '',
}) => {
  return (
    <section className={`bg-page text-foreground ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 md:pt-20 md:pb-0">
          <h2 className="mb-8 text-[30px] font-normal tracking-[0.03em] text-foreground md:text-[42px]">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <InsightCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-3 border border-foregraound px-4 py-2 text-sm text-foreground transition-colors duration-300 hover:border-foreground hover:bg-foreground hover:text-page"
          >
            {ctaLabel}
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default InsightsSection
