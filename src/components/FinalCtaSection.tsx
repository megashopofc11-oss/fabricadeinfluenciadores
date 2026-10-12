import React from 'react';
import { motion } from 'motion/react';
import { CtaButton } from './CtaButton';
import { ShieldCheck, Zap, Lock } from 'lucide-react';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      {/* Subtle Electric Blue Ambient Light Behind Title */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[400px] bg-radial from-[#008CFF]/20 via-[#008CFF]/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4 text-title-3d"
        >
          O FUTURO DA PUBLICIDADE <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#80C7FF] to-[#008CFF]">
            COMEÇA AQUI.
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 font-medium tracking-wide mb-8 sm:mb-10"
        >
          Aprenda a criar. Comece a produzir.
        </motion.p>

        {/* Final CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full flex justify-center"
        >
          <CtaButton text="GARANTIR MEU ACESSO →" />
        </motion.div>

        {/* Discreet reassurance indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs text-gray-400">
          <div className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-[#008CFF]" />
            <span>Pagamento 100% Seguro</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-[#008CFF]" />
            <span>Acesso Imediato</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#008CFF]" />
            <span>Plataforma Oficial PepperPay</span>
          </div>
        </div>
      </div>
    </section>
  );
};
