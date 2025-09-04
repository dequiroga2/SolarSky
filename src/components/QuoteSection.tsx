import React, { useState } from 'react';
import { showNotification } from '../utils/notifications';
import type { FormData } from '../types';

const QuoteSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: FormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      projectType: formData.get('projectType') as string,
      description: formData.get('description') as string
    };
    
    // Simulate form submission
    setTimeout(() => {
      showNotification('¡Gracias! Hemos recibido tu solicitud. Te contactaremos pronto.', 'success');
      form.reset();
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="quote" className="quote-section">
      <div className="container">
        <div className="quote-content">
          <h3 className="quote-title">Solicita una cotización</h3>
          <p className="quote-subtitle">Déjanos tus datos y te contactaremos con una propuesta personalizada para tu proyecto solar.</p>
          <form className="quote-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input 
                type="text" 
                name="name"
                placeholder="Nombre completo" 
                className="form-input" 
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="form-input" 
                required 
              />
            </div>
            <div className="form-row">
              <input 
                type="tel" 
                name="phone"
                placeholder="Teléfono" 
                className="form-input" 
                required 
              />
              <select name="projectType" className="form-input" required>
                <option value="">Tipo de proyecto</option>
                <option value="residential">Residencial</option>
                <option value="commercial">Comercial</option>
                <option value="industrial">Industrial</option>
              </select>
            </div>
            <textarea 
              name="description"
              placeholder="Cuéntanos sobre tu proyecto..." 
              className="form-textarea" 
              rows={4}
            ></textarea>
            <button 
              type="submit" 
              className="btn-primary form-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar solicitud'}
            </button>
          </form>
          <p className="quote-note">Un futuro sostenible y brillante comienza con SolarSky.</p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;