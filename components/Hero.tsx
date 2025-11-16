import React, { useState, useEffect } from 'react';
import type { Section } from '../App';
import PersonalizedIcon from './icons/PersonalizedIcon';
import SafetyIcon from './icons/SafetyIcon';
import CommunityIcon from './icons/CommunityIcon';

interface HeroProps {
    setActiveSection: (section: Section) => void;
}

const heroImages = [
  { src: "https://picsum.photos/seed/family_generations/1920/1080", alt: "Família de várias gerações a sorrir, celebrando a união" },
  { src: "https://picsum.photos/seed/cozy_nursing_home/1920/1080", alt: "Ambiente acolhedor de um lar de idosos com residentes a conversar" },
  { src: "https://picsum.photos/seed/grandparent_and_child/1920/1080", alt: "Avô a ler uma história para a sua neta com carinho" },
  { src: "https://picsum.photos/seed/seniors_with_kids/1920/1080", alt: "Idosos a brincar com crianças num jardim, partilhando alegria" },
];

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 15000); // Change image every 15 seconds

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
            A Idade de Ouro Merece Momentos de Ouro
          </h1>
          <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
            Proporcionamos experiências inesquecíveis, repletas de alegria, descoberta e companheirismo para a terceira idade.
          </p>
          <button
            onClick={() => setActiveSection('sobre')}
            className="bg-sky-600 hover:bg-sky-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Saiba Mais
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Porque Escolher a Best Moments?</h2>
                <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Comprometemo-nos a enriquecer a vida dos idosos, um momento de cada vez.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="p-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-100 mx-auto mb-6">
                        <PersonalizedIcon />
                    </div>
                    <h3 className="text-2xl font-bold text-sky-800 mb-3">Experiências Personalizadas</h3>
                    <p className="text-slate-600">Cada atividade é pensada para ir ao encontro dos interesses e capacidades dos nossos participantes, garantindo que todos se sintam incluídos e felizes.</p>
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-100 mx-auto mb-6">
                        <SafetyIcon />
                    </div>
                    <h3 className="text-2xl font-bold text-sky-800 mb-3">Segurança e Conforto</h3>
                    <p className="text-slate-600">A segurança é a nossa prioridade máxima. Oferecemos acompanhamento profissional e toda a logística necessária para que cada momento seja vivido com total tranquilidade.</p>
                </div>
                 <div className="p-6">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-sky-100 mx-auto mb-6">
                        <CommunityIcon />
                    </div>
                    <h3 className="text-2xl font-bold text-sky-800 mb-3">Comunidade Vibrante</h3>
                    <p className="text-slate-600">Fomentamos amizades e um forte espírito de grupo. Na Best Moments, ninguém está sozinho – fazemos parte de uma grande família que partilha sorrisos e memórias.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Hero;