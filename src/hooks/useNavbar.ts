import { useEffect } from 'react';

export const useNavbar = () => {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    const updateNavbarState = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        navbar.classList.remove('transparent');
        navbar.classList.add('solid');
      } else {
        navbar.classList.remove('solid');
        navbar.classList.add('transparent');
      }
    };
    
    updateNavbarState();
    
    const handleScroll = () => {
      updateNavbarState();
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
};