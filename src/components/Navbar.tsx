import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="navbar" id="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-text">SolarSky</span>
        </div>
        <nav className="nav-menu">
          <a href="#design" className="nav-link">Diseño</a>
          <a href="#solutions" className="nav-link">Soluciones</a>
          <a href="#storage" className="nav-link">Almacenamiento</a>
          <a href="#quote" className="nav-link">Cotizar</a>
        </nav>
        <a href="#quote" className="nav-cta">Simular</a>
      </div>
    </header>
  );
};

export default Navbar;