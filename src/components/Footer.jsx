import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section" style={{ textAlign: 'center' }}>
          <div className="footer-links-row">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="footer-nav-link">Back to Top ↑</a>
            <span className="footer-separator">•</span>
            <a href="#contact" onClick={(e) => { e.preventDefault(); window.location.hash = 'contact'; window.dispatchEvent(new HashChangeEvent('hashchange')) }} className="footer-nav-link">Email</a>
            <span className="footer-separator">•</span>
            <a href="https://kzdaisy.substack.com" target="_blank" rel="noopener noreferrer" className="footer-nav-link">
                  Subscribe
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
