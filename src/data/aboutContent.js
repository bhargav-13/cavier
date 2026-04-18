import HeroImage from '../assets/about/about-hero.png'
import SpaceOne from '../assets/about/craft-image1.png'
import SpaceTwo from '../assets/about/craft-image2.png'
import SpaceThree from '../assets/about/craft-image3.png'
import SpaceFour from '../assets/about/craft-image4.png'
import StoryImage from '../assets/home/finishing-3.jpg'
import ValuesImage from '../assets/about/insight-2.png'
import MaterialityImage from '../assets/about/feature.png'
import ShowroomImage from '../assets/about/showroom-image.png'
import Varna from '../assets/about/varna.png' 
import Rakesh from '../assets/about/rakesh.png' 
import Bhautik from '../assets/about/bhautik.png'

export const aboutHero = {
  eyebrow: 'About Cavier',
  title: 'Redefining Everyday Luxury',
  description:
    'Eco-friendly, lead-free bath fittings designed to meet global safety standards. At Cavier, we shape modern bathroom experiences through precision engineering, elegant detailing, and dependable craftsmanship.',
  image: HeroImage,
}

export const bathSpaces = [
  {
    title: 'Shower',
    image: SpaceOne,
    accent: 'Rain systems and statement fixtures for immersive daily rituals.',
  },
  {
    title: 'Bathroom Accessories',
    image: SpaceTwo,
    accent: 'Coordinated details that sharpen usability without visual clutter.',
  },
  {
    title: 'Wellness',
    image: SpaceThree,
    accent: 'Balanced controls and refined hardware built for comfort.',
  },
  {
    title: 'Sanitary Ware',
    image: SpaceFour,
    accent: 'Contemporary forms that bring calm, clarity, and durability together.',
  },
]

export const aboutStats = [
  { value: '100%', label: 'Made in India' },
  { value: '1,00,000+', label: 'Happy Customers' },
  { value: '20+', label: 'Years of Experience' },
  { value: '3000+', label: 'Faucets Manufactured' },
]

export const storyBlock = {
  title: 'Crafted for Every Bath Space',
  body: 'At Cavier, we combine precision engineering with refined design to create bath fittings that elevate modern spaces. With advanced manufacturing and superior finishing, every product reflects our commitment to quality, durability, and timeless appeal.',
  cta: 'Explore Location',
  image: StoryImage,
}

export const foundationValues = [
  {
    number: '01',
    title: 'Innovation',
    description:
      'We continuously push design and technology forward to create solutions that feel contemporary, intuitive, and enduring.',
  },
  {
    number: "02",
    title: "Quality",
    description:
      'Every Cavier product is crafted with precision and close attention to detail so it performs beautifully for years.',
  },
  {
    number: '03',
    title: 'Accessibility',
    description:
      'Premium design should feel approachable. We balance aesthetics, performance, and value without compromise.',
  },
  {
    number: '04',
    title: 'Elegance',
    description:
      'Each piece is shaped with a timeless visual language that complements both bold and minimal interiors.',
  },
  {
    number: '05',
    title: 'Reliability',
    description:
      'Consistent finishes, dependable function, and long-term trust define every product line we create.',
  },
]

export const foundationVisual = ValuesImage

export const materiality = {
  eyebrow: 'Materiality',
  title: 'Engineered Perfection.',
  image: MaterialityImage,
  points: [
    {
      title: 'Precision Milling',
      description:
        'Every component is shaped for clean fitment, long-term strength, and an elevated tactile finish.',
    },
    {
      title: 'Vapor Deposition',
      description:
        'Protective surface treatment helps preserve depth, tone, and performance across years of daily use.',
    },
  ],
}

export const showroom = {
  title: 'Cavier Authorised Dealer Showroom',
  body: [
    'The Cavier Authorised Showroom is a dedicated retail environment designed to showcase our complete range of premium bathroom solutions.',
    'Thoughtfully designed display zones help customers explore styles, finishes, and functionality in a real-world setting.',
    'From contemporary statements to timeless essentials, the showroom brings together design, quality, and innovation under one roof.',
  ],
  cta: 'Cavier Display Showroom',
  image: ShowroomImage,
}

export const teamMembers = [
  {
    name: 'Varna Ajudiya',
    role: 'Founder & Vision Lead',
    image: Varna,
  },
  {
    name: 'Rakesh Ajudiya',
    role: 'Operations Director',
    image: Rakesh,
  },
  {
    name: 'Bhautik Ajudiya',
    role: 'Brand & Growth',
    image: Bhautik,
  },
];

export const experienceCards = [
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
]
