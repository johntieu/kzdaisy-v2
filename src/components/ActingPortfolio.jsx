import { useState, useEffect } from 'react'
import './Portfolio.css'
import HeadshotsTab from './HeadshotsTab'
import RecentWorkTab from './RecentWorkTab'
import TestimonialsTab from './TestimonialsTab'

function ActingPortfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('headshots')

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className={`portfolio-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-content">
        <div className="hero">
          <h1 className="hero-title">Performer Portfolio</h1>
          <p className="hero-subtitle">Acting • Comedy • Puppetry • Voiceover • Coaching</p>
        </div>

        <div className="portfolio-tabs">
          <button
            className={`tab-button ${activeTab === 'headshots' ? 'active' : ''}`}
            onClick={() => setActiveTab('headshots')}
          >
            Headshots
          </button>
          <button
            className={`tab-button ${activeTab === 'recent' ? 'active' : ''}`}
            onClick={() => setActiveTab('recent')}
          >
            Recent Work
          </button>
          <button
            className={`tab-button ${activeTab === 'testimonials' ? 'active' : ''}`}
            onClick={() => setActiveTab('testimonials')}
          >
            Testimonials
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'headshots' && <HeadshotsTab />}
          {activeTab === 'recent' && <RecentWorkTab />}
          {activeTab === 'testimonials' && <TestimonialsTab />}
        </div>
      </div>
    </section>
  )
}

export default ActingPortfolio
