import { useEffect } from 'react';

export const useEdgeBlendImages = () => {
  useEffect(() => {
    const edgeBlendImages = document.querySelectorAll('.edge-blend-image');
    
    edgeBlendImages.forEach(imageContainer => {
      const element = imageContainer as HTMLElement;
      const topColor = element.dataset.topColor || '#f9f9f9';
      const bottomColor = element.dataset.bottomColor || '#222b49';
      const topStrength = element.dataset.topStrength || '18%';
      const bottomStrength = element.dataset.bottomStrength || '22%';
      
      const overlay = imageContainer.querySelector('.image-overlay') as HTMLElement;
      if (!overlay) return;
      
      const gradientStyle = `
        linear-gradient(to bottom, ${topColor}, transparent ${topStrength}),
        linear-gradient(to top, ${bottomColor}, transparent ${bottomStrength})
      `;
      
      overlay.style.backgroundImage = gradientStyle;
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            overlay.style.opacity = '1';
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(imageContainer);
    });
  }, []);
};