import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/asfam.png';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logoImage} alt="ASFAM Logo" className="logo-image" />
            <div className="logo-text">
              <h1>ASFAM</h1>
              <p className="tagline">Committed to your goals</p>
            </div>
          </Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
