import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <a href="mailto:contact@example.com" className="footer-link">
            contact@example.com
          </a>
          <a href="tel:+1234567890" className="footer-link">
            +1 (234) 567-890
          </a>
        </div>

        <div className="footer-section">
          <h4>Follow</h4>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Twitter
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Location</h4>
          <p className="footer-text">Los Angeles, CA</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
