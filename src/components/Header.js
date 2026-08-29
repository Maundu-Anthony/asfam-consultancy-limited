import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../images/asfam.png';
import './Header.css';

function Header() {
  const [menuHovered, setMenuHovered] = useState(false);
  const [menuPinned, setMenuPinned] = useState(false);
  const menuOpen = menuHovered || menuPinned;

  const toggleMenu = () => {
    setMenuPinned((isPinned) => !isPinned);
    setMenuHovered(false);
  };

  const closeMenu = () => {
    setMenuHovered(false);
    setMenuPinned(false);
  };

  return (
    <header 
      className="header" 
      style={{ 
        width: '100%', 
        padding: '0.25rem 0',
        display: 'flex',
        alignItems: 'center',
        height: '60px',
        position: 'sticky',
        top: 0
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
          boxSizing: 'border-box',
          position: 'relative',
          height: '100%'
        }}
      >
        <div 
          className="logo" 
          style={{ 
            flex: '0 0 auto', 
            display: 'flex', 
            alignItems: 'center',
            height: '100%',
            position: 'relative'
          }}
        >
          <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
            <img 
              src={logoImage} 
              alt="ASFAM Consultancy Logo" 
              className="logo-image" 
              style={{ 
                height: '100px',
                width: 'auto', 
                objectFit: 'contain',
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-40%)'
              }} 
            />
          </Link>
        </div>

        <div
          className="menu-control"
          onMouseEnter={() => setMenuHovered(true)}
          onMouseLeave={() => setMenuHovered(false)}
        >
          <button
            type="button"
            className="menu-toggle"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            ☰
          </button>

          <nav
            className={`nav ${menuOpen ? 'open' : ''}`}
            role="navigation"
            data-open={menuOpen}
            style={{
              marginLeft: 'auto',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About Us</Link>
            <Link to="/services" onClick={closeMenu}>Our Services</Link>
            <Link to="/team" onClick={closeMenu}>Our Team</Link>
            <Link to="/partners" onClick={closeMenu}>Our Partners</Link>
            <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;