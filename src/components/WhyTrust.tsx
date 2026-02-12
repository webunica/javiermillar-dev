interface WhyTrustProps {
    onOpenModal: () => void;
}

export default function WhyTrust({ onOpenModal }: WhyTrustProps) {
    return (
        <section className="services" style={{ background: 'white' }}>
            <div className="container">
                <div className="section-split">
                    <div className="content">
                        <span className="pill-badge">Resultados</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>¿Por qué confiar en mi trabajo?</h2>
                        <ul style={{ marginBottom: '30px' }}>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>●</span> +80 proyectos entregados con éxito en todo Chile.
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>●</span> Optimización Core Web Vitals garantizada.
                            </li>
                            <li style={{ marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>●</span> Integración con Webpay, Starken y Shipit.
                            </li>
                        </ul>
                        <button onClick={onOpenModal} className="btn btn-primary open-modal">Cotizar proyecto</button>
                    </div>
                    <div className="placeholder-box" style={{ position: 'relative', background: '#0f172a' }}>
                        <div style={{ position: 'absolute', top: '30px', right: '30px', background: 'var(--primary)', color: 'var(--dark-bg)', padding: '15px 25px', borderRadius: '50px', fontWeight: 800, fontSize: '1.2rem' }}>
                            +25% Conversión
                        </div>
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1">
                            <path d="M12 20V10M18 20V4M6 20v-4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
