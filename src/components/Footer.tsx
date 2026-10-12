import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-[#030303] py-8 px-4 text-center text-xs text-gray-500">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-3">
        <p className="font-semibold text-gray-400 tracking-wider uppercase text-[11px]">
          FÁBRICA DE INFLUENCIADORES • MINI TREINAMENTO 100% ONLINE
        </p>
        <p className="max-w-md text-gray-500 leading-relaxed text-[11px]">
          Todos os direitos reservados &copy; {currentYear}. Este site não é afiliado ao Facebook, Google ou qualquer outra plataforma. Todos os conteúdos apresentados têm fins educacionais.
        </p>
      </div>
    </footer>
  );
};
