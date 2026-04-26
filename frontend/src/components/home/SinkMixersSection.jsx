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
  return <ProductShowcaseSection
   title="Cavier Sink Mixers"
    items={mixers}
     className="pt-10"
  containerClassName="max-w-6xl px-0 py-0 md:px-0 md:pt-0 md:pb-0"
  gridClassName=" grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 "


    />
}

export default SinkMixersSection
