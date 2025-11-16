
import React from 'react';
import type { Service } from '../types';
import TravelIcon from './icons/TravelIcon';
import CultureIcon from './icons/CultureIcon';
import WellnessIcon from './icons/WellnessIcon';
import SocialIcon from './icons/SocialIcon';

const services: Service[] = [
  {
    icon: <TravelIcon />,
    title: "Viagens e Turismo",
    description: "Exploramos novos destinos, desde escapadinhas culturais a retiros na natureza, sempre com o máximo conforto e segurança."
  },
  {
    icon: <CultureIcon />,
    title: "Arte e Cultura",
    description: "Visitas a museus, espetáculos, workshops de pintura e música para estimular a criatividade e a alma."
  },
  {
    icon: <WellnessIcon />,
    title: "Bem-Estar e Lazer",
    description: "Aulas de ioga suave, passeios ao ar livre e tardes de convívio para cuidar do corpo e da mente."
  },
  {
    icon: <SocialIcon />,
    title: "Eventos Sociais",
    description: "Celebramos a vida com festas temáticas, jantares e encontros que fortalecem laços de amizade."
  }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:-translate-y-2">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-sky-100 mx-auto mb-6">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-sky-800 mb-3">{service.title}</h3>
    <p className="text-slate-600">{service.description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">As Nossas Atividades</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Criamos momentos que inspiram e conectam.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;