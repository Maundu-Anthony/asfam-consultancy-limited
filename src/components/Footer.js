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
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <strong>Email:</strong> info@asfam.co.ke<br />
            <strong>Phone:</strong> +254 100 930028<br />
            <strong>Phone:</strong> +254 745 661 011<br />
            <strong>Website:</strong> www.asfam.co.ke
          </p>
        </div>
        <div className="footer-section">
          <h3>Address</h3>
          <p>
            Court De Royale<br />
            Namanga Road Estate<br />
            Kitengela<br />
            P.O BOX 2162 – 90100<br />
            Machakos, KENYA
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 ASFAM Consultancy Company Limited. All rights reserved.</p>
        <p>Success is best when it's shared.</p>
      </div>
    </footer>
  );
}

export default Footer;
