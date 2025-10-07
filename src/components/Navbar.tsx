import React, { useState } from 'react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleSimulateClick = () => {
    onOpenModal();
    closeMenu();
  };

  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="/logo.png" alt="SolarSky Logo" className="logo-img" />
        </div>
        
        {/* Desktop Menu */}
        <nav className="nav-menu">
          <a href="#design" className="nav-link">DISEÑO</a>
          <a href="#solutions" className="nav-link">SOLUCIONES</a>
          <a href="#storage" className="nav-link">ALMACENAMIENTO</a>
          <a href="#quote" className="nav-link">COTIZAR</a>
        </nav>
        
        {/* Desktop CTA */}
        <button onClick={onOpenModal} className="nav-cta">Simular</button>
        
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
          <button className="mobile-nav-cta" onClick={handleSimulateClick}>Simular</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
