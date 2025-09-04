import React from 'react';

const DesignSection: React.FC = () => {
  return (
    <section id="design" className="design-section">
      <div className="container">
        <div className="section-grid reverse">
          <div className="section-image">
            <div className="edge-blend-image" data-top-color="#222b49" data-bottom-color="#f9f9f9">
              <img src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1920&auto=format&fit=crop" alt="Integración arquitectónica SolarSky" />
              <div className="image-overlay"></div>
            </div>
          </div>
          <div className="section-content">
            <h2 className="section-title reveal-element">Diseño excepcional</h2>
            <p className="section-text reveal-element">Simplificamos la energía solar a través de un diseño excepcional. Cada instalación se integra perfectamente con la arquitectura existente.</p>
            <ul className="feature-list reveal-element">
              <li>• Integración arquitectónica perfecta</li>
              <li>• Diseño moderno y elegante</li>
              <li>• Máxima eficiencia energética</li>
              <li>• Instalación profesional certificada</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSection;