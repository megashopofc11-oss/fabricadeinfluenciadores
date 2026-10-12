/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { VimeoPlayer } from './components/VimeoPlayer';
import { CtaButton } from './components/CtaButton';
import { FeaturesSection } from './components/FeaturesSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-[#008CFF]/30 selection:text-[#80C7FF] overflow-x-hidden relative">
      {/* Cinematic Top Ambient Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[450px] ambient-glow-top pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Main Container */}
      <main className="w-full flex-grow flex flex-col items-center">
        {/* ============================================================== */}
        {/* PRIMEIRA SEÇÃO & VÍDEO DE VENDAS — IMPACTO IMEDIATO            */}
        {/* ============================================================== */}
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-14 pb-8 flex flex-col items-center text-center">
          
          {/* Selo Visual: MINI TREINAMENTO • 100% ONLINE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008CFF]/10 border border-[#008CFF]/30 text-[#008CFF] text-[11px] sm:text-xs font-semibold tracking-wider uppercase mb-5 sm:mb-6 shadow-[0_0_15px_rgba(0,140,255,0.2)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></span>
            MINI TREINAMENTO • 100% ONLINE
          </motion.div>

          {/* Título Principal: FÁBRICA DE INFLUENCIADORES */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight text-title-3d uppercase"
          >
            FÁBRICA DE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#80C7FF] to-[#008CFF]">
              INFLUENCIADORES
            </span>
          </motion.h1>

          {/* Subtítulo: Frase de Impacto */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 max-w-xl font-normal leading-relaxed mb-8 sm:mb-10 px-2"
          >
            Aprenda a criar influenciadores com IA e produzir propagandas profissionais para empresas.
          </motion.p>

          {/* ============================================================== */}
          {/* VÍDEO DE VENDAS — PRINCIPAL DESTAQUE (Vimeo 9:16)              */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full mb-8 sm:mb-10"
          >
            <VimeoPlayer videoId="1235107433" />
          </motion.div>

          {/* ============================================================== */}
          {/* BOTÃO DE COMPRA 1 (Abaixo do Vídeo)                           */}
          {/* ============================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full flex justify-center px-2"
          >
            <CtaButton text="QUERO APRENDER AGORA →" />
          </motion.div>

        </section>

        {/* Subtle Horizontal Divider with Neon Center */}
        <div className="w-full max-w-3xl px-6 my-4 flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#008CFF]/30 to-transparent"></div>
        </div>

        {/* ============================================================== */}
        {/* SEÇÃO — O QUE VOCÊ VAI APRENDER (3 Cards)                     */}
        {/* ============================================================== */}
        <FeaturesSection />

        {/* Subtle Horizontal Divider */}
        <div className="w-full max-w-3xl px-6 my-4 flex items-center justify-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#008CFF]/30 to-transparent"></div>
        </div>

        {/* ============================================================== */}
        {/* SEÇÃO FINAL — CHAMADA PARA AÇÃO                                */}
        {/* ============================================================== */}
        <FinalCtaSection />

      </main>

      {/* Rodapé Minimalista e Seguro */}
      <Footer />
    </div>
  );
}
