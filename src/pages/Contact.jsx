import NavbarAbout from '../components/about/NavbarAbout.jsx'
import AboutHeroSection from '../components/about/AboutHeroSection.jsx'
import ExperienceCarouselSection from '../components/home/ExperienceCarouselSection.jsx'
import ContactFormSection from '../components/contact/ContactFormSection.jsx'
import ContactInfoGridSection from '../components/contact/ContactInfoGridSection.jsx'
import ContactMapSection from '../components/contact/ContactMapSection.jsx'
import {
  contactDetails,
  contactFormFields,
  contactHero,
  contactMap,
  contactTestimonials,
} from '../data/contactContent.js'

const Contact = () => {
  return (
    <>
      <NavbarAbout />
      <AboutHeroSection content={contactHero} />
      <ContactInfoGridSection items={contactDetails} />
      <ContactFormSection fields={contactFormFields} />
      <ContactMapSection content={contactMap} />
      <ExperienceCarouselSection
        title="Experiences That Speak for Quality"
        buttonLabel="Explore Products"
        cards={contactTestimonials}
      />
    </>
  )
}

export default Contact
