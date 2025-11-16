
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-sky-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">Junte-se a Nós</h2>
        <p className="text-lg text-sky-100 mt-4 mb-8 max-w-2xl mx-auto">
          É um lar de idosos ou familiar e quer proporcionar momentos inesquecíveis? Fale connosco. Estamos aqui para criar o plano de atividades perfeito.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="text-lg">
                <strong>Email:</strong> contacto@bestmoments.pt
            </div>
            <div className="text-lg">
                <strong>Telefone:</strong> +351 123 456 789
            </div>
        </div>
        <a 
          href="mailto:contacto@bestmoments.pt" 
          className="bg-white text-sky-700 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-sky-100"
        >
          Fale Connosco
        </a>
      </div>
    </section>
  );
};

export default Contact;