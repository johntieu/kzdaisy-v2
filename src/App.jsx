import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import ActingPortfolio from './components/ActingPortfolio'
import PilatesPortfolio from './components/PilatesPortfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('performer')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleSectionChange = (section) => {
    if (section === activeSection) return

    setIsTransitioning(true)

    setTimeout(() => {
      setActiveSection(section)
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 300)
  }

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1)
      if (hash && (hash === 'performer' || hash === 'pilates' || hash === 'contact')) {
        handleSectionChange(hash)
      }
    }

    // Check initial hash
    handleHashChange()

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <div className="app">
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <main className="main-container">
        <div className={`section-wrapper ${isTransitioning ? 'transitioning' : ''}`}>
          {activeSection === 'performer' && <ActingPortfolio />}
          {activeSection === 'pilates' && <PilatesPortfolio />}
          {activeSection === 'contact' && <Contact />}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
