import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/home/Navbar.jsx'
import Footer from './components/home/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Dealership from './pages/Dealership.jsx'
import Contact from './pages/Contact.jsx'
import ScrollToTop from './components/utils/ScrollToTop.jsx'
import ProductsPage from './pages/ProductCatalog.jsx'
import ProductDetail from './pages/ProductDetail.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop />
    
      {/* Footer is fixed at z-0 — always behind the scrolling content */}
      <Footer />

      {/* Main content scrolls over the footer */}
      <div className="relative z-10 min-h-screen bg-page font-sans text-foreground selection:bg-foreground selection:text-page">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/dealership" element={<Dealership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Transparent spacer = footer height.
          As content scrolls past, footer is revealed underneath.
          id="site-footer" triggers Navbar to hide when in view. */}
      <div id="site-footer" className="relative z-10 h-screen pointer-events-none" />
    </BrowserRouter>
  )
}

export default App
