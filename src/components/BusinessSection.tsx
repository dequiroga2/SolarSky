import React, { useState } from 'react';

interface BusinessItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const BusinessSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const businessItems: BusinessItem[] = [
    {
      id: 0,
      title: "Descuentos para tu empresa",
      description: "Podemos ofrecerte hasta un 40% de descuento en energía.",
      image: "/imagen1.png"
    },
    {
      id: 1,
      title: "Instalación incluida",
      description: "Instalamos todo un sistema de energía solar mayor a 200 Kw.",
      image: "/imagen2.png"
    },
    {
      id: 2,
      title: "Mantenimiento 15 años",
      description: "Nos encargamos de todas las reparaciones, cambios, mantenimientos y mas!",
      image: "/imagen3.jpg"
    },
    {
      id: 3,
      title: "Y despues...",
      description: "Una vez termine el contrato te regalamos el sistema de energía solar.",
      image: "/imagen1.png"
    }
  ];

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <section className="business-section">
      <div className="container">
        <div className="business-header">
          <h2 className="business-title reveal-element">¿Buscas una solución energética sin comprometer tu capital?</h2>
          <p className="business-subtitle reveal-element">Descubre cómo nuestros sistemas solares ofrecen la combinación perfecta de eficiencia, durabilidad y diseño para impulsar tu empresa hacia el futuro.</p>
        </div>
        <div className="business-grid">
          <div className="business-content">
            <div className="business-items">
              {businessItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`business-item ${index === activeItem ? 'active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="business-item-indicator"></div>
                  <div className="business-item-content">
                    <h3 className="business-item-title">{item.title}</h3>
                    <p className="business-item-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="business-image-container">
            <div className="business-image-wrapper">
              <img 
                src={businessItems[activeItem].image} 
                alt={businessItems[activeItem].title}
                className="business-image"
              />
              <div className="business-image-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
