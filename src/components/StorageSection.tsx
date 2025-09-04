import React from 'react';

const StorageSection: React.FC = () => {
  return (
    <section id="storage" className="storage-section">
      <div className="container">
        <div className="section-grid">
          <div className="section-content">
            <h2 className="section-title reveal-element">Almacena tu energía</h2>
            <p className="section-text reveal-element">Combina paneles solares con sistemas de almacenamiento para usar energía limpia las 24 horas del día. Independencia energética total.</p>
            <div className="storage-features reveal-element">
              <div className="feature-item">
                <span className="feature-number">24/7</span>
                <span className="feature-label">Energía disponible</span>
              </div>
              <div className="feature-item">
                <span className="feature-number">90%</span>
                <span className="feature-label">Eficiencia de almacenamiento</span>
              </div>
              <div className="feature-item">
                <span className="feature-number">25</span>
                <span className="feature-label">Años de garantía</span>
              </div>
            </div>
            <div className="section-cta reveal-element">
              <a href="#quote" className="btn-primary">Ver opciones</a>
            </div>
          </div>
          <div className="section-image">
            <div className="edge-blend-image" data-top-color="#f9f9f9" data-bottom-color="#222b49">
              <img src="https://images.unsplash.com/photo-1608016482831-8895cc2d8a17?q=80&w=1920&auto=format&fit=crop" alt="Sistema de almacenamiento SolarSky" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorageSection;