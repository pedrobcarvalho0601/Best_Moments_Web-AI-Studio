import React from 'react';

const galleryImages = [
  { src: "https://picsum.photos/seed/elderly_art_class/500/500", alt: "Idosos numa aula de pintura criativa" },
  { src: "https://picsum.photos/seed/seniors_nature_walk/500/500", alt: "Grupo de idosos a desfrutar de um passeio na natureza" },
  { src: "https://picsum.photos/seed/grandmother_with_grandchild/500/500", alt: "Avó a sorrir com o seu neto" },
  { src: "https://picsum.photos/seed/elderly_couple_garden/500/500", alt: "Casal de idosos a tratar do seu jardim com carinho" },
  { src: "https://picsum.photos/seed/seniors_birthday_party/500/500", alt: "Grupo de idosos a celebrar um aniversário com alegria" },
  { src: "https://picsum.photos/seed/old_couple_ocean_view/500/500", alt: "Casal de idosos a contemplar o mar" },
  { src: "https://picsum.photos/seed/elderly_man_guitar/500/500", alt: "Idoso a tocar viola para um grupo de amigos atentos" },
  { src: "https://picsum.photos/seed/senior_friends_trip/500/500", alt: "Foto de grupo de amigos idosos felizes durante uma excursão" },
];

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-sky-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Momentos Inesquecíveis</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Uma imagem vale mais que mil palavras.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;