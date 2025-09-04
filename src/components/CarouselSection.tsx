import React, { useState, useEffect } from 'react';

const CarouselSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/imagen1.png',
    '/imagen2.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="carousel-section">
      {/* Degradado superior (azul) */}
      <div className="carousel-gradient-top"></div>
      
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>

        {/* Controles de navegación */}
        <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
          ‹
        </button>
        <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
          ›
        </button>

        {/* Indicadores */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Degradado inferior (blanco) */}
      <div className="carousel-gradient-bottom"></div>
    </section>
  );
};

export default CarouselSection;
