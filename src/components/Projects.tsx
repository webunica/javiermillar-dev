export default function Projects() {
    return (
        <section className="projects" id="proyectos">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                    <span className="pill-badge">Portafolio</span>
                    <h2>Delivering excellence in every project</h2>
                </div>
                <div className="grid-2x2">
                    <div className="project-card">
                        <div className="project-img">
                            <span style={{ color: 'var(--text-muted)' }}>MODA & RETAIL</span>
                        </div>
                        <div className="project-content">
                            <div className="project-tags">
                                <span className="tag">Shopify</span>
                                <span className="tag">Performance</span>
                            </div>
                            <h3>Tienda Shopify — Moda</h3>
                            <p style={{ color: 'var(--text-muted)', margin: '15px 0' }}>Rediseño enfocado en CRO para marca de ropa urbana en Santiago.</p>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Ver detalle</button>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-img">
                            <span style={{ color: 'var(--text-muted)' }}>EDUCACIÓN ONLINE</span>
                        </div>
                        <div className="project-content">
                            <div className="project-tags">
                                <span className="tag">WooCommerce</span>
                                <span className="tag">LMS</span>
                            </div>
                            <h3>WooCommerce — Cursos</h3>
                            <p style={{ color: 'var(--text-muted)', margin: '15px 0' }}>Plataforma automatizada para venta de cursos y certificados.</p>
                            <button className="btn btn-outline" style={{ width: '100%' }}>Ver detalle</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
