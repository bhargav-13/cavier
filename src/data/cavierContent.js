import { catalogProducts } from './productCatalog.js'

export const products = [
  {
    title: 'Verona Gold Series',
    category: 'Faucets',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Azure Minimalist',
    category: 'Showers',
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Onyx Collection',
    category: 'Vanities',
    image: 'https://images.unsplash.com/photo-1620626011761-9963d7521576?q=80&w=1000&auto=format&fit=crop',
  },
]

export const cockProducts = [
  ...catalogProducts.slice(0, 4),
]
