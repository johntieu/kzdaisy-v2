import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navigation from './components/Navigation'
import ActingPortfolio from './components/ActingPortfolio'
import PilatesPortfolio from './components/PilatesPortfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />

        <main className="main-container">
          <div className="section-wrapper">
            <Routes>
              <Route path="/" element={<Navigate to="/pilates" replace />} />
              <Route path="/pilates" element={<PilatesPortfolio />} />
              <Route path="/performer" element={<ActingPortfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
