import './Navigation.css'

function Navigation({ activeSection, onSectionChange }) {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">PORTFOLIO</div>
        <div className="nav-links">
          <a
            href="#acting"
            className={`nav-link ${activeSection === 'acting' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              onSectionChange('acting')
            }}
          >
            Acting
          </a>
          <a
            href="#pilates"
            className={`nav-link ${activeSection === 'pilates' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              onSectionChange('pilates')
            }}
          >
            Pilates
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
