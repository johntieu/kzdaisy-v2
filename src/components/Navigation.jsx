import { NavLink } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <NavLink to="/pilates" className="nav-logo">
          KZ DAISY
        </NavLink>
        <div className="nav-links">
          <NavLink
            to="/pilates"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Pilates
          </NavLink>
          <NavLink
            to="/performer"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Performer
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
