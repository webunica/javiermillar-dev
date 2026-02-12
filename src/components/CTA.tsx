interface CTAProps {
    onOpenModal: () => void;
}

export default function CTA({ onOpenModal }: CTAProps) {
    return (
        <section className="cta-final">
            <div className="container cta-content">
                <h2>Elevemos tu e-commerce</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
                    Hagamos realidad tu tienda online con estándares internacionales.
                </p>
                <div className="cta-btns">
                    <button onClick={onOpenModal} className="btn btn-primary open-modal">Agendar reunión</button>
                    <button className="btn btn-outline" style={{ borderColor: 'white' }}>Cotizar ahora</button>
                </div>
            </div>
        </section>
    );
}
