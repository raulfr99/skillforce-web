import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink-800 dark:bg-ink-950 dark:text-steel-100">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios/:id" element={<ServiceDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}
