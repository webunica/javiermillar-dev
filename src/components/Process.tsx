export default function Process() {
    return (
        <section id="proceso" style={{ background: 'white', color: 'var(--text-dark)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="pill-badge">Metodología</span>
                    <h2>From concept to completion</h2>
                </div>
                <div className="grid-3">
                    <div className="solution-card">
                        <h3 style={{ color: 'var(--primary)' }}>01.</h3>
                        <h4>Discovery</h4>
                        <p>Entender los objetivos de negocio, la audiencia y los desafíos técnicos actuales.</p>
                    </div>
                    <div className="solution-card">
                        <h3 style={{ color: 'var(--primary)' }}>02.</h3>
                        <h4>Diseño & UX</h4>
                        <p>Creación de interfaces limpias, intuitivas y optimizadas para la conversión rápida.</p>
                    </div>
                    <div className="solution-card">
                        <h3 style={{ color: 'var(--primary)' }}>03.</h3>
                        <h4>Desarrollo</h4>
                        <p>Codificación limpia, integración de sistemas y pruebas rigurosas de performance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
