
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-slate-300 py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} Best Moments. Todos os direitos reservados.</p>
        <p className="text-sm text-slate-400 mt-2">Criando memórias, um momento de cada vez.</p>
      </div>
    </footer>
  );
};

export default Footer;
