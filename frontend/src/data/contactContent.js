import HeroImage from '../assets/about/about-hero.png'

export const contactHero = {
  eyebrow: 'Contact Cavier',
  title: "We're Here to Assist You Anytime",
  description:
    'At CAVIER, we value every connection. Whether you have a question about our products, need expert guidance, or are interested in partnering with us, our team is always ready to help.',
  image: HeroImage,
}

export const contactDetails = [
  {
    title: 'Contact',
    value: '(+91) 288 2730 052, 53',
  },
  {
    title: 'Fax',
    value: '(+91) 288 2730 054',
  },
  {
    title: 'Service Related',
    value: '(+91) 96876 20054',
  },
  {
    title: 'Email',
    value: 'info@cavierindia.com',
  },
  {
    title: 'Trade Enquiry',
    value: '(+91) 73839 33333',
  },
]

export const contactFormFields = [
  { label: 'Name', name: 'name', type: 'text' },
  { label: 'Email', name: 'email', type: 'email'  },
  { label: 'Contact', name: 'contact', type: 'tel'},
  { label: 'Designation', name: 'designation', type: 'text' }
  // { label: 'Subject', name: 'subject', type: 'text'},
  // { label: 'Message', name: 'message', type: 'textarea'},
]

export const contactMap = {
  title: 'Open In Map',
  addressLines: [
    '01, Vision Industrial Park',
    'Changa, Lalpur Road',
    'Jamnagar 361 012, INDIA',
  ],
  phone: '+91 74339 93997',
  directionsUrl:
    'https://maps.app.goo.gl/K8GDopYezHCYPtU26',
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.0674311135185!2d70.0361144!3d22.351082599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39576b37e83765a1%3A0xa96eeb340840a827!2sCavier%20Bath%20Fittings%20Ltd!5e0!3m2!1sen!2sin!4v1776712605115!5m2!1sen!2sin',
}


export const contactTestimonials = [
  {
    name: 'James Walker',
    role: 'Distributor',
    quote:
      'Cavier products have exceeded expectations in durability and finish. The consistency in quality across orders makes them a reliable partner for our projects.',
  },
  {
    name: 'Priya Soni',
    role: 'Architect',
    quote:
      'The finish quality feels premium without being flashy. Clients respond well to the clean detailing and dependable functionality.',
  },
  {
    name: 'Mihir Patel',
    role: 'Dealer',
    quote:
      'What stands out is the balance of aesthetics and service support. It helps us recommend the brand with confidence.',
  },
  {
    name: 'Aarav Mehta',
    role: 'Project Consultant',
    quote:
      'The team is responsive, knowledgeable, and easy to coordinate with. That makes a real difference when timelines are tight.',
  },
  {
    name: 'Elena Roy',
    role: 'Studio Lead',
    quote:
      'There is a clear premium language across the products and communication. It gives customers confidence from the first interaction.',
  },
]
