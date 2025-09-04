import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import VideoIntroSection from './components/VideoIntroSection';
import HeroSection from './components/HeroSection';
import DesignSection from './components/DesignSection';
import CarouselSection from './components/CarouselSection';
import BusinessSection from './components/BusinessSection';
import SolutionsSection from './components/SolutionsSection';
import StorageSection from './components/StorageSection';
import QuoteSection from './components/QuoteSection';
import { useNavbar } from './hooks/useNavbar';
import { useScrollAnimations } from './hooks/useScrollAnimations';
import { useEdgeBlendImages } from './hooks/useEdgeBlendImages';
import { useSmoothScrolling } from './hooks/useSmoothScrolling';

function App() {
  useNavbar();
  useScrollAnimations();
  useEdgeBlendImages();
  useSmoothScrolling();

  useEffect(() => {
    // Add loading animation for page load
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    setTimeout(() => {
      document.querySelectorAll('.hero-section .reveal-element').forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('revealed');
        }, index * 100);
      });
    }, 300);

    // Add notification styles
    const notificationStyles = `
      .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }
      
      .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s ease;
      }
      
      .notification-close:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
      
      .notification-message {
        flex: 1;
        font-weight: 500;
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);

    return () => {
      if (styleSheet.parentNode) {
        styleSheet.parentNode.removeChild(styleSheet);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <VideoIntroSection />
        <HeroSection />
        <DesignSection />
        <CarouselSection />
        <BusinessSection />
        <SolutionsSection />
        <StorageSection />
        <QuoteSection />
      </main>
    </>
  );
}

export default App;