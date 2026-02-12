import { FormEvent, useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission
        setTimeout(() => {
            alert("¡Solicitud enviada con éxito! (Demo)");
            setIsSubmitting(false);
            onClose();
            (e.target as HTMLFormElement).reset();
        }, 1500);
    };

    return (
        <div
            className={`modal-overlay ${isOpen ? 'open' : ''}`}
            id="modal"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div className="modal-card">
                <span className="close-modal" onClick={onClose}>✕</span>
                <h2 style={{ marginBottom: '10px' }}>Agendar reunión</h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '0.9rem' }}>
                    Completa el formulario y te contactaré en menos de 24 horas hábiles.
                </p>

                <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Nombre Completo</label>
                        <input type="text" id="name" required placeholder="Tu nombre" />
                    </div>
                    <div className="form-group">
                        <label>Email Corporativo</label>
                        <input type="email" id="email" required placeholder="tu@empresa.cl" />
                    </div>
                    <div className="form-group">
                        <label>WhatsApp / Teléfono</label>
                        <input type="tel" id="phone" required placeholder="+56 9 ..." />
                    </div>
                    <div className="form-group">
                        <label>Tipo de Proyecto</label>
                        <select id="type">
                            <option value="shopify">Shopify</option>
                            <option value="woo">WooCommerce</option>
                            <option value="seo">SEO / Performance</option>
                            <option value="otro">Otro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Cuéntame de tu negocio</label>
                        <textarea id="message" rows={3} placeholder="¿Qué necesitas lograr?"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                    </button>
                </form>
            </div>
        </div>
    );
}
