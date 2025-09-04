import React from 'react';

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="solutions-section">
      <div className="container">
        <div className="solutions-header">
          <h2 className="section-title reveal-element">Soluciones para cada escala</h2>
          <p className="section-subtitle reveal-element">Desde hogares hasta industrias, tenemos la solución perfecta para ti</p>
        </div>
        <div className="solutions-grid">
          <div className="solution-card reveal-element" data-color="#4CAF50">
            <div className="solution-icon">🏠</div>
            <h3>Residencial</h3>
            <p>Energía limpia para tu hogar, ahorro para tu familia.</p>
            <a href="#quote" className="solution-link">Ver más</a>
          </div>
          <div className="solution-card reveal-element" data-color="#2196F3">
            <div className="solution-icon">🏢</div>
            <h3>Edificio de oficinas</h3>
            <p>Soluciones inteligentes que potencian tu negocio y reputación.</p>
            <a href="#quote" className="solution-link">Ver más</a>
          </div>
          <div className="solution-card reveal-element" data-color="#FF9800">
            <div className="solution-icon">🏭</div>
            <h3>Industrial</h3>
            <p>Potencia a gran escala para máxima eficiencia y rentabilidad.</p>
            <a href="#quote" className="solution-link">Ver más</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;