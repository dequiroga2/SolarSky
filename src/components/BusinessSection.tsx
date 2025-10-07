import React, { useState } from 'react';

interface BusinessItem {
  id: number;
  title: string;
  description: string;
}

const BusinessSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);

  const businessItems: BusinessItem[] = [
    {
      id: 0,
      title: "Descuentos para empresas",
      description: "Ofrecemos soluciones energéticas adaptadas a tu negocio, permitiéndote ahorrar hasta un 40% en costos eléctricos. Nuestro modelo te brinda acceso a tecnología solar de última generación sin inversión inicial, reduciendo tu factura desde el primer día y contribuyendo a un futuro sostenible. Además, nuestros sistemas cuentan con garantías extendidas que protegen tu inversión."
    },
    {
      id: 1,
      title: "Instalación incluida",
      description: "Nos encargamos de todo el proceso de instalación de sistemas solares superiores a 200 kW, diseñados para las necesidades industriales y comerciales de tu empresa. Nuestros ingenieros certificados analizan tu consumo, diseñan la solución óptima y ejecutan la instalación con los más altos estándares. Incluye permisos, paneles de alta eficiencia, inversores modernos, monitoreo en tiempo real e infraestructura completa para generar energía limpia de inmediato."
    },
    {
      id: 2,
      title: "Mantenimiento 15 años",
      description: "Durante 15 años garantizamos que tu sistema solar opere a su máxima capacidad. Nuestro servicio integral incluye inspecciones programadas, limpieza profesional, monitoreo continuo, reemplazo de componentes, reparaciones y actualizaciones tecnológicas. Contamos con un equipo técnico disponible para atender cualquier eventualidad, manteniendo tu inversión eficiente y protegida. Además, recibirás reportes detallados de desempeño y mantenimiento para un control total de tu sistema."
    },
    {
      id: 3,
      title: "Y después...",
      description: "Al finalizar el contrato de 15 años, el sistema solar pasa a ser propiedad de tu empresa sin costo adicional. Tras años de ahorro, contarás con una infraestructura totalmente pagada y funcional. Desde ese momento, toda la energía generada será gratuita, maximizando tus ahorros y retorno de inversión. Así, transformas un servicio en un activo valioso que impulsa la sostenibilidad financiera y ambiental de tu empresa."
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
          <div className="business-titles-column">
            <div className="business-items">
              {businessItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`business-item ${index === activeItem ? 'active' : ''}`}
                  onClick={() => handleItemClick(index)}
                >
                  <div className="business-item-indicator"></div>
                  <h3 className="business-item-title">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
          <div className="business-content-display" key={activeItem}>
            <h3 className="business-content-title">{businessItems[activeItem].title}</h3>
            <p className="business-content-description">{businessItems[activeItem].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
