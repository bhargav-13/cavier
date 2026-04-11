import ExperienceCarouselSection from './ExperienceCarouselSection.jsx'

const experienceCards = [
  {
    name: 'James Walker',
    role: 'homeowner',
    quote:
      'Cavier products have exceeded our expectations in terms of reliability and finish. The consistency in quality across orders makes them a reliable partner for our projects.',
  },
  {
    name: 'Ava Thompson',
    role: 'interior designer',
    quote:
      'The detailing is sharp, the finish feels premium, and the installation experience has been incredibly smooth from start to finish.',
  },
  {
    name: 'Noah Bennett',
    role: 'contractor',
    quote:
      'We keep coming back to Cavier because the quality stays consistent across every batch and the products are easy to trust on site.',
  },
  {
    name: 'Mia Carter',
    role: 'studio lead',
    quote:
      'A refined balance of design and durability. The products look elevated in every project while staying practical for everyday use.',
  },
  {
    name: 'Ethan Brooks',
    role: 'builder',
    quote:
      'Reliable delivery, consistent finishing, and a polished look that feels right at home in premium projects.',
  },
]

const HomeExperienceSection = () => {
  return (
    <ExperienceCarouselSection
      title="Experiences That Speak for Quality"
      buttonLabel="Explore Products"
      cards={experienceCards}
    />
  )
}

export default HomeExperienceSection
