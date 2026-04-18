import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/home/Navbar.jsx'
import Footer from './components/home/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'

const App = () => {
  return (
    <BrowserRouter>
      {/* Footer is fixed at z-0 — always behind the scrolling content */}
      <Footer />

      {/* Main content scrolls over the footer */}
      <div className="relative z-10 min-h-screen bg-page font-sans text-foreground selection:bg-foreground selection:text-page">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* Transparent spacer = footer height.
          As content scrolls past, footer is revealed underneath.
          id="site-footer" triggers Navbar to hide when in view. */}
      <div id="site-footer" className="relative z-10 h-screen" />
    </BrowserRouter>
  )
}

export default App
