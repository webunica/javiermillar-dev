interface HeroProps {
    onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="hero" id="inicio">
            <div className="container">
                <div className="hero-content">
                    <span className="pill-badge">Disponible para nuevos proyectos</span>
                    <h1>Transformo ideas en ventas con Shopify y WooCommerce</h1>
                    <p>
                        Tiendas rápidas, diseño moderno, SEO técnico y automatizaciones para escalar tu e-commerce en Chile con resultados medibles.
                    </p>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <button onClick={onOpenModal} className="btn btn-primary open-modal">Agendar reunión</button>
                        <a href="#proyectos" className="btn btn-outline">Ver casos</a>
                    </div>
                    <div className="floating-cards">
                        <div className="mini-card">
                            <h4>Soporte WhatsApp</h4>
                            <p>Respuesta en 24h hábiles</p>
                        </div>
                        <div className="mini-card">
                            <h4>Stack Moderno</h4>
                            <p>Shopify, Woo, SEO, API's</p>
                        </div>
                        <div className="mini-card">
                            <h4>Garantía</h4>
                            <p>Seguridad & Performance</p>
                        </div>
                    </div>
                </div>
                <div className="hero-visual">
                    <div className="hero-card">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div style={{ marginTop: '30px', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.5rem' }}>Webunica.cl</h3>
                            <p style={{ color: 'var(--primary)', fontWeight: 600 }}>Temuco, Chile</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
