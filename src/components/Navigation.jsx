import './Navigation.css'

function Navigation({ activeSection, onSectionChange }) {
  return (
    <nav className="nav">
      <div className="nav-container">
        <a
          href="#pilates"
          className="nav-logo"
          onClick={(e) => {
            e.preventDefault()
            onSectionChange('pilates')
          }}
        >
          KZ DAISY
        </a>
        <div className="nav-links">
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
          <a
            href="#performer"
            className={`nav-link ${activeSection === 'performer' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              onSectionChange('performer')
            }}
          >
            Performer
          </a>
          <a
            href="#contact"
            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              onSectionChange('contact')
            }}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
