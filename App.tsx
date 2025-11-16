
import React, { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export type Section = 'home' | 'sobre' | 'atividades' | 'testemunhos' | 'galeria' | 'contacto';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Hero setActiveSection={setActiveSection} />;
      case 'sobre':
        return <AboutUs />;
      case 'atividades':
        return <Services />;
      case 'testemunhos':
        return <Testimonials />;
      case 'galeria':
        return <Gallery />;
      case 'contacto':
        return <Contact />;
      default:
        return <Hero setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="bg-slate-50 text-slate-700 flex flex-col min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
