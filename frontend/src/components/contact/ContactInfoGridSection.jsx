import Reveal from '../about/Reveal.jsx'

const ContactInfoCard = ({ title, value, delay }) => {
  return (
    <Reveal delay={delay}>
      <article className="group relative h-full border border-white/40 px-3 py-8 transition duration-500 hover:-translate-y-1 hover:border-white hover:bg-white/[0.03]">
        {/* <span className="absolute left-2 top-0 h-5 w-px -translate-y-full bg-white/35 transition duration-500 group-hover:bg-white" /> */}
        <div className="space-y-2 flex flex-col justify-center items-center">
          <h3 className="text-sm  text-foreground">{title}</h3>
          <p className="text-xs  text-foreground">{value}</p>
        </div>
      </article>
    </Reveal>
  )
}

const ContactInfoGridSection = ({ items }) => {
  return (
    <section id="about-bath-spaces" className="bg-page px-6 py-10 md:px-12 lg:px-20 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          {items.map((item, index) => (
            <ContactInfoCard
              key={item.title}
              title={item.title}
              value={item.value}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactInfoGridSection
