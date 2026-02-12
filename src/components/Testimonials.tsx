import { useState } from 'react';

type FilterType = 'all' | 'shopify' | 'woo';

export default function Testimonials() {
    const [filter, setFilter] = useState<FilterType>('all');

    return (
        <section className="testimonials" id="testimonios">
            <div className="container">
                <span className="pill-badge">Feedback</span>
                <h2>Stories of success and satisfaction</h2>
                <div className="filter-chips">
                    <div className={`chip ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>Todos</div>
                    <div className={`chip ${filter === 'shopify' ? 'active' : ''}`} onClick={() => setFilter('shopify')}>Shopify</div>
                    <div className={`chip ${filter === 'woo' ? 'active' : ''}`} onClick={() => setFilter('woo')}>WooCommerce</div>
                </div>
                <div className="testi-grid">
                    {(filter === 'all' || filter === 'shopify') && (
                        <div className="testi-card">
                            <div className="stars">★★★★★</div>
                            <p>"Javier mejoró la velocidad de nuestra tienda Shopify drásticamente. Las ventas subieron desde el primer mes."</p>
                            <p className="testi-author">Carolina V.</p>
                            <p className="testi-meta">Retail Moda</p>
                        </div>
                    )}
                    {(filter === 'all' || filter === 'woo') && (
                        <div className="testi-card">
                            <div className="stars">★★★★★</div>
                            <p>"Excelente disposición para integrar nuestra logística con WooCommerce. Muy profesional y puntual."</p>
                            <p className="testi-author">Andrés L.</p>
                            <p className="testi-meta">Repuestos Automotrices</p>
                        </div>
                    )}
                    {(filter === 'all' || filter === 'shopify') && (
                        <div className="testi-card">
                            <div className="stars">★★★★★</div>
                            <p>"Un experto que entiende el mercado chileno y las pasarelas de pago locales. Altamente recomendado."</p>
                            <p className="testi-author">Patricia M.</p>
                            <p className="testi-meta">Gourmet Shop</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
