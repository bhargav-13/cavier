import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/home/Footer.jsx'
import ScrollToTop from './components/utils/ScrollToTop.jsx'
import { CommerceProvider } from './hooks/useCommerce.js'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Dealership = lazy(() => import('./pages/Dealership.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const ProductsPage = lazy(() => import('./pages/ProductCatalog.jsx'))
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'))

const App = () => {
  return (
    <CommerceProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Footer />

        <div className="relative z-10 min-h-screen bg-page font-sans text-foreground selection:bg-foreground selection:text-page">
          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center">
                <p className="text-white/70">Loading page...</p>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/dealership" element={<Dealership />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </div>

        <div id="site-footer" className="relative z-10 h-screen pointer-events-none" />
      </BrowserRouter>
    </CommerceProvider>
  )
}

export default App
