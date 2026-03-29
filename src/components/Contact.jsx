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
              <h3>Pilates Offerings</h3>
              <li>Mat Pilates classes</li>
              <li>Yogalates classes</li>
              <li>Prenatal fitness classes</li>
              <li>Private, semi-private, group, & corporate sessions</li>
              <li>In-person & virtual options</li>
              <li>Customized & tailored programs</li>
              <li>All levels welcome</li>
            </div>

            <div className="contact-item">
              <h3>Performer Offerings</h3>
              <li>Live performance for shows & events</li>
              <li>Bookings & readings for acting, theater, on-camera, comedy, puppetry, & voiceover projects</li>
              <li>In-person & virtual options</li>
            </div>

            <div className="contact-item">
              <h3>Coaching</h3>
              <li>Acting, improv, & performance coaching</li>
              <li>Audition prep, rehearsals, & practice groups</li>
              <li>Private, semi-private, group, & corporate sessions</li>
              <li>In-person & virtual options</li>
              <li>Team building & collaboration experiences</li>
              <li>All levels welcome</li>
            </div>

            <div className="contact-item">
              <h3>Social Media</h3>
              <div className="social-links">
                <div>
                <a href="https://instagram.com/thekzdaisy" target="_blank" rel="noopener noreferrer" className="social-link">
                  Instagram
                </a>
                <span> (under construction)</span>
                </div>
                <a href="https://kzdaisy.substack.com" target="_blank" rel="noopener noreferrer" className="social-link">
                  Newsletter
                </a>
                <a href="https://youtube.com/@kz_daisy" target="_blank" rel="noopener noreferrer" className="social-link">
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
