import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')

    // EmailJS configuration
    const serviceId = 'YOUR_SERVICE_ID'
    const templateId = 'YOUR_TEMPLATE_ID'
    const publicKey = 'YOUR_PUBLIC_KEY'

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setFormStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('Email send failed:', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className={`portfolio-section ${isVisible ? 'visible' : ''}`}>
      <div className="section-content">
        <div className="hero">
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">Let's Connect</p>
        </div>

        <div className="contact-content">
          <div className="contact-form-container">
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="form-message success">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {formStatus === 'error' && (
                <p className="form-message error">
                  Failed to send message. Please try again or email directly.
                </p>
              )}
            </form>
          </div>

          <div className="contact-info">
            <div className="contact-item">
              <h3>Email</h3>
              <a href="mailto:contact@example.com" className="contact-link">
                contact@example.com
              </a>
            </div>

            <div className="contact-item">
              <h3>Phone</h3>
              <a href="tel:+1234567890" className="contact-link">
                +1 (234) 567-890
              </a>
            </div>

            <div className="contact-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  Instagram
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  Twitter
                </a>
              </div>
            </div>

            <div className="contact-item">
              <h3>Location</h3>
              <p className="contact-text">Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
