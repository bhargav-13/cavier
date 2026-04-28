import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/home/Footer.jsx'
import ScrollToTop from './components/utils/ScrollToTop.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Dealership = lazy(() => import('./pages/Dealership.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const ProductsPage = lazy(() => import('./pages/ProductCatalog.jsx'))
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'))

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    
      {/* Footer is fixed at z-0 — always behind the scrolling content */}
      <Footer />

        {/* Main content scrolls over the footer */}
        <div className="relative z-10 min-h-screen bg-page font-sans text-foreground selection:bg-foreground selection:text-page">
          {/* <Navbar /> */}
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

      {/* Transparent spacer = footer height.
          As content scrolls past, footer is revealed underneath.
          id="site-footer" triggers Navbar to hide when in view. */}
      <div id="site-footer" className="relative z-10 h-screen pointer-events-none" />
    </BrowserRouter>
  )
}

export default App
