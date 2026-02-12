export default function ServiceSplit() {
    return (
        <section className="services" id="servicios">
            <div className="container">
                <div className="section-split">
                    <div className="placeholder-box" style={{ backgroundImage: "url('https://insidex.tokotema.xyz/wp-content/uploads/2025/10/Black-3.jpg')" }}>
                        <div style={{ color: 'white', fontWeight: 800, fontSize: '2rem' }}>E-COMMERCE EXPERT</div>
                    </div>
                    <div>
                        <span className="pill-badge">Especialidad</span>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px' }}>Delivering excellence en servicios e-commerce</h2>

                        <div className="service-block">
                            <h3><span style={{ color: 'var(--primary)' }}>✓</span> Expertise</h3>
                            <p>Dominio total de Shopify y WooCommerce. Migraciones seguras, desarrollo de plantillas a medida y configuración técnica avanzada.</p>
                        </div>
                        <div className="service-block">
                            <h3><span style={{ color: 'var(--primary)' }}>✓</span> Security</h3>
                            <p>Implementación de certificados SSL, backups automáticos, protección contra inyecciones y auditorías de seguridad periódicas.</p>
                        </div>
                        <div className="service-block">
                            <h3><span style={{ color: 'var(--primary)' }}>✓</span> Scalability</h3>
                            <p>Optimización de Core Web Vitals para mejorar el ranking en Google y automatización de flujos de trabajo para reducir carga operativa.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
