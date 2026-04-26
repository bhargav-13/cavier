import Navbar from '../components/home/Navbar.jsx'
import DealershipHeroSection from '../components/dealership/DealershipHeroSection.jsx'
import DealershipPhilosophySection from '../components/dealership/DealershipPhilosophySection.jsx'
import DealershipValuesSection from '../components/dealership/DealershipValuesSection.jsx'
import DealershipStepsSection from '../components/dealership/DealershipStepsSection.jsx'
import DealershipPartnerModelsSection from '../components/dealership/DealershipPartnerModelsSection.jsx'
import DealershipProjectFormSection from '../components/dealership/DealershipProjectFormSection.jsx'
import DealershipOfferingsSection from '../components/dealership/DealershipOfferingsSection.jsx'
import {
  dealershipFormFields,
  dealershipHero,
  dealershipModels,
  dealershipOfferings,
  dealershipPhilosophy,
  dealershipSteps,
  dealershipValues,
} from '../data/dealershipContent.js'

const Dealership = () => {
  return (
    <>
      <Navbar />
      <DealershipHeroSection content={dealershipHero} />
      <DealershipPhilosophySection content={dealershipPhilosophy} />
      <DealershipValuesSection items={dealershipValues} />
      <DealershipStepsSection steps={dealershipSteps} />
      <DealershipPartnerModelsSection models={dealershipModels} />
      <DealershipProjectFormSection fields={dealershipFormFields} />
      <DealershipOfferingsSection items={dealershipOfferings} />
    </>
  )
}

export default Dealership
