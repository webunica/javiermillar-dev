import { useState, useEffect } from 'react';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <a href="#" className="logo">
          <span>Javier Millar</span>
          <span className="logo-tag">Webunica.cl</span>
        </a>
        
        {/* Mobile Menu Logic added since original didn't have it */}
        <nav 
          className="nav-links" 
          style={mobileMenuOpen ? { 
            display: 'flex', 
            flexDirection: 'column', 
            position: 'absolute', 
            top: '100%', 
            left: 0, 
            width: '100%', 
            background: 'var(--dark-surface)', 
            padding: '20px', 
            borderBottom: '1px solid var(--border)',
            gap: '15px' 
          } : {}}
        >
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
          <a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
          <a href="#proyectos" onClick={() => setMobileMenuOpen(false)}>Proyectos</a>
          <a href="#proceso" onClick={() => setMobileMenuOpen(false)}>Proceso</a>
          <a href="#testimonios" onClick={() => setMobileMenuOpen(false)}>Testimonios</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
        </nav>

        <div className="header-actions">
          <a href="#" className="btn btn-outline" style={{ padding: '10px 20px' }}>Iniciar sesión</a>
          <button onClick={onOpenModal} className="btn btn-primary open-modal">Agendar reunión</button>
          <div className="menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</div>
        </div>
      </div>
    </header>
  );
}
