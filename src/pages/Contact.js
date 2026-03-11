import React, { useState } from 'react';
import PartnerCard from '../components/PartnerCard';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const localPartners = [
    { name: 'Commercial Banks', category: 'Financial Institutions' },
    { name: 'Microfinance Institutions', category: 'Financial Institutions' },
    { name: 'SACCOs & Cooperative Banks', category: 'Financial Institutions' },
    { name: 'Rural Community Finance Institutions', category: 'Financial Institutions' },
  ];

  const internationalPartners = [
    { name: 'ROWAD Capital LLC', category: 'Dubai, UAE' },
    { name: 'Safwat Al Zad Trading Company', category: 'UAE & Libya' },
    { name: 'JD Euroway Trust', category: 'Canada' },
    { name: 'All Trust Foundation', category: 'United Kingdom' },
    { name: 'ICRA Credit Rating Agency', category: 'Dubai, UAE' },
    { name: 'Bakhresa Group of Companies', category: 'Tanzania' },
  ];

  return (
    <div className="contact-page">
      <section className="contact-header">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Let's discuss how we can help unlock your business potential</p>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            
            <div className="contact-card">
              <h3>📍 Address</h3>
              <p>
                ASFAM Consultancy Company Limited<br />
                Court De Royale<br />
                Namanga Road Estate<br />
                Kitengela<br />
                <br />
                <strong>P.O BOX 2162 – 90100<br />
                Machakos, KENYA</strong>
              </p>
            </div>

            <div className="contact-card">
              <h3>📞 Phone</h3>
              <p>
                <strong>Office:</strong><br />

                <a href="tel:+254100930028">
                  +254 100 930028
                </a>
                <br />

                <a
                  href="https://wa.me/254100930028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Chat on WhatsApp
                </a>

                <br /><br />

                <a href="tel:+254745661011">
                  +254 745 661 011
                </a>
                <br />

                <a
                  href="https://wa.me/254745661011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h3>✉️ Email</h3>
              <p>
                <a href="mailto:info@asfam.co.ke">
                  info@asfam.co.ke
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h3>🌐 Website</h3>
              <p>
                <a
                  href="https://www.asfam.co.ke"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.asfam.co.ke
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent. We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+254 700 000 000"
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
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us more about your inquiry..."
                  rows="6"
                />
              </div>

              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <section className="partners-section">
        <div className="container">
          <h2>Our Partners</h2>
          <p className="section-intro">
            We work with a number of trusted partners drawn from multiple sectors of the economy.
          </p>

          <div className="partners-subsection">
            <h3>Local Partners</h3>
            <div className="partners-grid">
              {localPartners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  name={partner.name}
                  category={partner.category}
                  image={null}
                />
              ))}
            </div>
          </div>

          <div className="partners-subsection">
            <h3>International Partners</h3>
            <div className="partners-grid">
              {internationalPartners.map((partner, index) => (
                <PartnerCard
                  key={index}
                  name={partner.name}
                  category={partner.category}
                  image={null}
                />
              ))}
            </div>
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