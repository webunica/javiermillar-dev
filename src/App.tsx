import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ServiceSplit from './components/ServiceSplit';
import LogoBand from './components/LogoBand';
import Solutions from './components/Solutions';
import WhyTrust from './components/WhyTrust';
import Projects from './components/Projects';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import './index.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <Header onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <ServiceSplit />
      <LogoBand />
      <Solutions />
      <WhyTrust onOpenModal={openModal} />
      <Projects />
      <Process />
      <Testimonials />
      <CTA onOpenModal={openModal} />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default App;
