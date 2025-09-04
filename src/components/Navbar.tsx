import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">SolarSky</span>
        </div>
        
        {/* Desktop Menu */}
        <nav className="nav-menu">
          <a href="#design" className="nav-link">Diseño</a>
          <a href="#solutions" className="nav-link">Soluciones</a>
          <a href="#storage" className="nav-link">Almacenamiento</a>
          <a href="#quote" className="nav-link">Cotizar</a>
        </nav>
        
        {/* Desktop CTA */}
        <a href="#quote" className="nav-cta">Simular</a>
        
        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <a href="#design" className="mobile-nav-link" onClick={closeMenu}>Diseño</a>
          <a href="#solutions" className="mobile-nav-link" onClick={closeMenu}>Soluciones</a>
          <a href="#storage" className="mobile-nav-link" onClick={closeMenu}>Almacenamiento</a>
          <a href="#quote" className="mobile-nav-link" onClick={closeMenu}>Cotizar</a>
          <a href="#quote" className="mobile-nav-cta" onClick={closeMenu}>Simular</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
