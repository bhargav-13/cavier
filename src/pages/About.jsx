import AboutHeroSection from '../components/about/AboutHeroSection.jsx'
import AboutBathSpacesSection from '../components/about/AboutBathSpacesSection.jsx'
import AboutStatsSection from '../components/about/AboutStatsSection.jsx'
import AboutStorySection from '../components/about/AboutStorySection.jsx'
import AboutFoundationSection from '../components/about/AboutFoundationSection.jsx'
import AboutMaterialitySection from '../components/about/AboutMaterialitySection.jsx'
import AboutShowroomSection from '../components/about/AboutShowroomSection.jsx'
import AboutTeamSection from '../components/about/AboutTeamSection.jsx'
import {
  aboutHero,
  bathSpaces,
  aboutStats,
  storyBlock,
  foundationValues,
  foundationVisual,
  materiality,
  showroom,
  teamMembers,
} from '../data/aboutContent.js'
import HomeExperienceSection from '../components/home/HomeExperienceSection.jsx'
import NavbarAbout from '../components/about/NavbarAbout.jsx'

const About = () => {
  return (
    <>
    <NavbarAbout/>
      <AboutHeroSection content={aboutHero} />
      <AboutBathSpacesSection items={bathSpaces} />
      <AboutStatsSection stats={aboutStats} />
      <AboutStorySection content={storyBlock} />
      <AboutFoundationSection values={foundationValues} visual={foundationVisual} />
      <AboutMaterialitySection content={materiality} />
      <AboutShowroomSection content={showroom} />
      <AboutTeamSection members={teamMembers} />
      {/* <AboutExperienceSection cards={experienceCards} /> */}
      <HomeExperienceSection/>
    </>
  )
}

export default About
