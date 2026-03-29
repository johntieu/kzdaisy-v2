import { useEffect, useState } from 'react'
import './Portfolio.css'

function PortfolioSection({ title, subtitle, items }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [title])

  return (
    <section className={`portfolio-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-content">
        <div className="hero">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
        </div>

        <div className="content-grid">
          {items.map((item, index) => (
            <div key={index} className="grid-item">
              {item.image ? (
                <img src={item.image} alt={item.title} className="grid-item-image" />
              ) : (
                <div className="image-placeholder">
                  <span>{item.placeholder}</span>
                </div>
              )}
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <h3 className="coaching-link">Reach out <a href="#contact" onClick={(e) => {
          e.preventDefault()
          window.location.hash = 'contact'
          window.dispatchEvent(new HashChangeEvent('hashchange'))
        }}>here</a> with class inquiries, scheduling requests, or just to say hi! </h3>
      </div>
    </section>
  )
}

export default PortfolioSection
