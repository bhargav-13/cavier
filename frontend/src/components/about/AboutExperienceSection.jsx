import Reveal from './Reveal.jsx'
import ExperienceCarouselSection from '../home/ExperienceCarouselSection.jsx'

const AboutExperienceSection = ({ cards }) => {
  return (
    <section className="bg-page text-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-12 md:px-12 md:pt-24">
        <Reveal>
          <p className="max-w-sm text-[32px] font-normal leading-tight tracking-[0.04em] md:text-[52px]">
            Experiences That Speak for Quality
          </p>
        </Reveal>
      </div>

      <ExperienceCarouselSection title="" buttonLabel={null} cards={cards} />
    </section>
  )
}

export default AboutExperienceSection
