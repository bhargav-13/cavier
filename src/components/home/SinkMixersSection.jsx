import MixerOne from '../../assets/home/product-1.png'
import MixerTwo from '../../assets/home/product-2.png'
import MixerThree from '../../assets/home/product-3.png'
import MixerFour from '../../assets/home/product-4.png'
import ProductShowcaseSection from './ProductShowcaseSection.jsx'

const mixers = [
  {
    image: MixerOne,
    title: '30 01 (1) Pillar Cock with Base',
    price: 'INR 1930',
  },
  {
    image: MixerTwo,
    title: '30 01 (4) Pillar Cock with Base',
    price: 'INR 1930',
  },
  {
    image: MixerThree,
    title: '30 01 (1) Pillar Cock with Base',
    price: 'INR 1930',
  },
  {
    image: MixerFour,
    title: '30 01 (4) Pillar Cock with Base',
    price: 'INR 1930',
  },
]

const SinkMixersSection = () => {
  return <ProductShowcaseSection title="Cavier Sink Mixers" items={mixers} />
}

export default SinkMixersSection
