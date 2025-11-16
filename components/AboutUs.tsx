import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-800">Quem Somos</h2>
          <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">"A vida encolhe ou expande-se em proporção à nossa coragem." - Anaïs Nin</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/elderly_friends_laughing/600/400" alt="Grupo de amigos idosos a rir juntos" className="rounded-lg shadow-2xl w-full" />
          </div>
          <div className="md:w-1/2 text-lg text-slate-600 space-y-4">
            <p>
              A <span className="font-bold text-sky-700">Best Moments</span> nasceu do desejo de transformar a forma como encaramos o envelhecimento. Acreditamos que a terceira idade é uma fase de novas oportunidades, descobertas e, acima de tudo, de muita alegria.
            </p>
            <p>
              Somos uma associação lucrativa dedicada a criar e organizar atividades recreativas para idosos em lares e centros de dia. A nossa missão é combater o isolamento, promover um envelhecimento ativo e saudável, e criar memórias que perduram uma vida inteira.
            </p>
            <p>
              Desde viagens culturais a tardes de lazer, cada evento é planeado com o máximo cuidado, segurança e carinho, garantindo que cada participante se sinta valorizado, feliz e parte de uma comunidade vibrante.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;