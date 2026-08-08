import React, { useState } from 'react';
import './Contact.css';

const CONTACT_API_URL = process.env.REACT_APP_CONTACT_API_URL || '/api/contact';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const responseText = await response.text();
        throw new Error(responseText || 'Unable to send message.');
      }

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Unable to send message right now. Please try again later or email info@asfam.co.ke directly.');
    }
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>CONTACT US</h1>
          <p>Get in touch with ASFAM Consultancy Limited for professional investment, trade advisory, and training solutions.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-container">
          <div className="contact-info">
            <h2>Let's Talk About Your Project</h2>
            <p>We are ready to partner with you to unlock financial opportunities, build institutional capacity, and drive sustainable growth.</p>
            
            <div className="info-item">
              <h3>Office Location</h3>
              <p>Nairobi, Kenya</p>
            </div>

            <div className="info-item">
              <h3>Email Us</h3>
              <p><a href="mailto:info@asfam.co.ke">info@asfam.co.ke</a></p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send Us a Message</h2>

              {submitted && (
                <div className="success-message" style={{ backgroundColor: '#c6f6d5', color: '#22543d', padding: '12px', borderRadius: '6px', marginBottom: '1.5rem', fontWeight: '600' }}>
                  Thank you! Your message and spreadsheet data have been successfully sent.
                </div>
              )}

              {error && (
                <div className="error-message" style={{ backgroundColor: '#fed7d7', color: '#9b2c2c', padding: '12px', borderRadius: '6px', marginBottom: '1.5rem', fontWeight: '600' }}>
                  {error}
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                style={{
                  background: 'linear-gradient(135deg, #d73e33 0%, #b8312a 100%)',
                  color: 'white',
                  padding: '1.1rem 2.5rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(215, 62, 51, 0.2)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  width: '100%',
                  marginTop: '1.5rem',
                  marginBottom: '1.5rem'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="tagline-section">
        <div className="container">
          <h2>Success is best when it's shared.</h2>
          <p>Together, let's unlock your business opportunities and drive sustainable growth.</p>
        </div>
      </section>
    </div>
  );
}

export default Contact;