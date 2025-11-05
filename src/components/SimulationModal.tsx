import React, { useState, useEffect } from 'react';
import { showNotification } from '../utils/notifications';
import type { SimulationFormData } from '../types';

interface SimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SimulationModal: React.FC<SimulationModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: SimulationFormData = {
      name: formData.get('name') as string,
      companyName: formData.get('companyName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      monthlyConsumption: formData.get('monthlyConsumption') as string,
      averageBill: formData.get('averageBill') as string,
      installationType: formData.get('installationType') as string,
      location: formData.get('location') as string,
      additionalInfo: formData.get('additionalInfo') as string
    };
    
    try {
      // Send data to webhook
      const response = await fetch('https://automation.luminotest.com/webhook/00a720c4-4bab-4ab9-ae53-872a5b449b7c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        showNotification('¡Excelente! Hemos recibido tu solicitud de simulación. Te contactaremos pronto con una propuesta personalizada.', 'success');
        form.reset();
        onClose();
      } else {
        showNotification('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.', 'error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('Hubo un error al enviar tu solicitud. Por favor, intenta nuevamente.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Simulador de Instalación Solar</h2>
          <button 
            className="modal-close" 
            onClick={onClose}
            aria-label="Cerrar modal"
          >
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <p className="modal-description">
            Completa la información para recibir una cotización personalizada y descubre cuánto puedes ahorrar con energía solar.
          </p>
          
          <form className="simulation-form" onSubmit={handleSubmit}>
            {/* Información Personal */}
            <div className="form-section">
              <h3 className="form-section-title">Información de Contacto</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Nombre completo *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    placeholder="Juan Pérez" 
                    className="modal-input" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="companyName" className="form-label">Nombre de la empresa</label>
                  <input 
                    type="text" 
                    id="companyName"
                    name="companyName"
                    placeholder="Mi Empresa S.A.S." 
                    className="modal-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Correo electrónico *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="juan@ejemplo.com" 
                    className="modal-input" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Teléfono *</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="+52 123 456 7890" 
                    className="modal-input" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="location" className="form-label">Ciudad/Ubicación *</label>
                  <input 
                    type="text" 
                    id="location"
                    name="location"
                    placeholder="Ciudad de México" 
                    className="modal-input" 
                    required 
                  />
                </div>
              </div>
            </div>

            {/* Información del Proyecto */}
            <div className="form-section">
              <h3 className="form-section-title">Detalles del Proyecto</h3>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="installationType" className="form-label">Tipo de instalación *</label>
                  <select 
                    id="installationType"
                    name="installationType" 
                    className="modal-input" 
                    required
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="residential">Residencial</option>
                    <option value="commercial">Comercial</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="monthlyConsumption" className="form-label">Consumo mensual (kWh) *</label>
                  <input 
                    type="number" 
                    id="monthlyConsumption"
                    name="monthlyConsumption"
                    placeholder="300" 
                    className="modal-input" 
                    min="0"
                    step="1"
                    required 
                  />
                  <span className="form-hint">Revisa tu recibo de luz</span>
                </div>
                <div className="form-group">
                  <label htmlFor="averageBill" className="form-label">Costo máximo en la factura *</label>
                  <input 
                    type="number" 
                    id="averageBill"
                    name="averageBill"
                    placeholder="1500" 
                    className="modal-input" 
                    min="0"
                    step="0.01"
                    required 
                  />
                  <span className="form-hint">En pesos colombianos (COP)</span>
                </div>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="form-section">
              <div className="form-group full-width">
                <label htmlFor="additionalInfo" className="form-label">Información adicional (opcional)</label>
                <textarea 
                  id="additionalInfo"
                  name="additionalInfo"
                  placeholder="Cuéntanos más sobre tu proyecto, necesidades específicas o preguntas..." 
                  className="modal-textarea" 
                  rows={4}
                ></textarea>
              </div>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                className="btn-secondary" 
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancelar
              </button>
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Obtener Cotización'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimulationModal;
