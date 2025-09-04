import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <h1 className="hero-title reveal-element">Iluminando el futuro</h1>
            <p className="hero-subtitle reveal-element">Energía solar confiable y accesible. Diseñamos soluciones a medida que se integran perfectamente en hogares, negocios e industrias.</p>
            <div className="hero-cta reveal-element">
              <a href="#quote" className="btn-primary">Solicitar cotización</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="edge-blend-image" data-top-color="#f9f9f9" data-bottom-color="#222b49">
              <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1920&auto=format&fit=crop" alt="Casa con paneles solares SolarSky" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;