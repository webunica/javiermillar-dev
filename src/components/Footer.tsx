import { useEffect, useState } from 'react';

export default function Footer() {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-col">
                        <a href="#" className="logo">
                            <span>Javier Millar</span>
                            <span className="logo-tag">Webunica.cl</span>
                        </a>
                        <p style={{ marginTop: '20px', fontSize: '0.85rem' }}>Especialista en desarrollo e-commerce para empresas que buscan escalar.</p>
                        <div className="social-links">
                            <a href="#" className="social-icon">in</a>
                            <a href="#" className="social-icon">gh</a>
                            <a href="#" className="social-icon">ig</a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Servicios</h4>
                        <ul>
                            <li><a href="#">Tiendas Shopify</a></li>
                            <li><a href="#">Desarrollo WooCommerce</a></li>
                            <li><a href="#">Optimización SEO</a></li>
                            <li><a href="#">Automatización E-commerce</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Recursos</h4>
                        <ul>
                            <li><a href="#">Casos de Estudio</a></li>
                            <li><a href="#">Blog E-commerce</a></li>
                            <li><a href="#">Herramientas Chile</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Contacto</h4>
                        <ul>
                            <li><a href="tel:+56984410379">+56 9 8441 0379</a></li>
                            <li><a href="mailto:desarrollo@webunica.cl">desarrollo@webunica.cl</a></li>
                            <li>Temuco, IX Región, Chile</li>
                        </ul>
                    </div>
                </div>
                <div className="legal">
                    © <span id="year">{year}</span> Javier Millar — Webunica.cl. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
