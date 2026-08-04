import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>ASFAM Consultancy</h3>
          <p>Transformative financial and trade advisory services for Kenya's businesses.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/registration">Register with us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* CLICKABLE CONTACT INFO */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <strong>Email:</strong>{' '}
            <a href="mailto:info@asfam.co.ke" className="footer-link">
              info@asfam.co.ke
            </a>
            <br />
            <strong>Phone:</strong>{' '}
            <a href="tel:+254100930028" className="footer-link">
              +254 100 930028
            </a>
            <br />
            <strong>Phone:</strong>{' '}
            <a href="tel:+254745661011" className="footer-link">
              +254 745 661 011
            </a>
            <br />
            <strong>Phone:</strong>{' '}
            <a href="tel:+254722709200" className="footer-link">
              +254 722 709 200
            </a>
            <br />
            <strong>Website:</strong>{' '}
            <a 
              href="https://www.asfam.co.ke" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-link"
            >
              www.asfam.co.ke
            </a>
          </p>
        </div>

        {/* CLICKABLE ADDRESS TO GOOGLE MAPS */}
        <div className="footer-section">
          <h3>Address</h3>
          <p>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=Court+De+Royale+Kitengela+Namanga+Road" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-address-link"
            >
              Court De Royale<br />
              Namanga Road Estate<br />
              Kitengela<br />
              P.O BOX 2162 – 90100<br />
              Machakos, KENYA
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 ASFAM Consultancy Company Limited. All rights reserved.</p>
        <p>Success is best when it's shared.</p>
      </div>
    </footer>
  );
}

export default Footer;