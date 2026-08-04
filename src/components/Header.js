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
    <header 
      className="header" 
      style={{ 
        width: '100%', 
        padding: '0.5rem 0',
        display: 'flex',
        alignItems: 'center',
        minHeight: '112px'
      }}
    >
      <div 
        className="header-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: '100%',
          padding: '0 2rem',
          boxSizing: 'border-box'
        }}
      >
        {/* LOGO - Left aligned & enlarged by 60% */}
        <div className="logo" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center' }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={logoImage} 
              alt="ASFAM Logo" 
              className="logo-image" 
              style={{ height: '112px', width: 'auto', objectFit: 'contain' }} 
            />
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          type="button"
          className="menu-toggle"
          onClick={toggleMenu}
          onTouchStart={toggleMenu}
          onMouseDown={(e) => e.preventDefault()}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* NAV LINKS - Vertically centered and right aligned */}
        <nav 
          className={`nav ${menuOpen ? 'open' : ''}`} 
          role="navigation" 
          data-open={menuOpen}
          style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}
        >
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/team" onClick={() => setMenuOpen(false)}>Team</Link>
          <Link to="/registration" onClick={() => setMenuOpen(false)}>Register with us</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;