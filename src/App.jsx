import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/home/Navbar.jsx'
import Footer from './components/home/Footer.jsx'
import Home from './pages/Home.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-page font-sans text-foreground selection:bg-foreground selection:text-page">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
