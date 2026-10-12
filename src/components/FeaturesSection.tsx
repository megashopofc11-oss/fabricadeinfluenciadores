import React from 'react';
import { motion } from 'motion/react';
import { Icon3DAvatarAI, Icon3DCameraVideo, Icon3DGrowthBusiness } from './Icons3D';

const features = [
  {
    step: '01',
    title: 'Crie Influenciadores com IA',
    description: 'Aprenda a criar personagens virtuais para suas publicidades.',
    icon: <Icon3DAvatarAI className="w-12 h-12" />,
  },
  {
    step: '02',
    title: 'Produza Vídeos Profissionais',
    description: 'Transforme suas ideias em propagandas impactantes.',
    icon: <Icon3DCameraVideo className="w-12 h-12" />,
  },
  {
    step: '03',
    title: 'Divulgue Empresas',
    description: 'Aprenda a criar conteúdos publicitários para oferecer seus serviços a negócios.',
    icon: <Icon3DGrowthBusiness className="w-12 h-12" />,
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Subtle Section Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#008CFF]/10 border border-[#008CFF]/25 text-[#008CFF] text-xs font-semibold uppercase tracking-wider mb-3">
          Conteúdo Direto ao Ponto
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          O QUE VOCÊ VAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#80C7FF] to-[#008CFF]">APRENDER</span>
        </h2>
      </div>

      {/* 3 Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {features.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="neon-border-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group transition-all duration-300"
          >
            {/* Top Row: 3D Icon & Step Label */}
            <div>
              <div className="flex items-start justify-between mb-5">
                <div className="p-2.5 rounded-xl bg-[#008CFF]/10 border border-[#008CFF]/20 group-hover:border-[#008CFF]/50 group-hover:bg-[#008CFF]/15 transition-all duration-300 shadow-[0_0_15px_rgba(0,140,255,0.15)]">
                  {item.icon}
                </div>
                <span className="text-xs font-mono font-bold text-[#008CFF] px-2.5 py-1 rounded-md bg-[#008CFF]/10 border border-[#008CFF]/25 tracking-wider">
                  {item.step}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#80C7FF] transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Subtle bottom accent line */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-gray-400 group-hover:text-[#008CFF] transition-colors">
                <span className="w-1.5 h-1.5 rounded-full bg-[#008CFF]"></span>
                Mini Treinamento
              </span>
              <span className="text-white/40 font-mono text-[11px]">Passo {index + 1} de 3</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
