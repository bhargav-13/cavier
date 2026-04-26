import InsightsSection from './InsightsSection.jsx'
import InsightOne from '../../assets/home/insight-1.jpg'
import InsightTwo from '../../assets/home/insight-2.jpg'
import InsightThree from '../../assets/home/insight-3.jpg'

const insightCards = [
  {
    image: InsightOne,
    title: 'The Future of Premium Bath Fittings: Trends to Watch in 2026',
    objectPosition: 'center center',
  },
  {
    image: InsightTwo,
    title: 'The Future of Premium Bath Fittings: Trends to Watch in 2026',
    objectPosition: 'center center',
  },
  {
    image: InsightThree,
    title: 'The Future of Premium Bath Fittings: Trends to Watch in 2026',
    objectPosition: 'center center',
  },
]

const HomeInsightsSection = () => {
  return (
    <InsightsSection title="Insights & Inspiration" items={insightCards} />
  )
}

export default HomeInsightsSection
