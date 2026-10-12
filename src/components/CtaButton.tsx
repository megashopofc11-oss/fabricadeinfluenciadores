import React from 'react';
import { Icon3DLightning } from './Icons3D';

interface CtaButtonProps {
  text: string;
  className?: string;
  showIcon?: boolean;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  className = '',
  showIcon = true,
}) => {
  const checkoutUrl = 'https://go.pepperpay.com.br/r/tlkfd';

  return (
    <div className={`relative inline-block w-full max-w-md ${className}`}>
      {/* Outer Neon Glow Aura */}
      <div 
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#008CFF] via-[#00D2FF] to-[#008CFF] opacity-70 blur-lg group-hover:opacity-100 transition duration-500 animate-pulse pointer-events-none"
        aria-hidden="true"
      />

      <a
        href={checkoutUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-shimmer relative w-full flex items-center justify-center gap-3 px-6 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-b from-[#1AA0FF] to-[#0070D1] hover:from-[#29A9FF] hover:to-[#007DEB] active:scale-[0.98] text-white font-bold text-base sm:text-lg tracking-wide uppercase shadow-[0_4px_25px_rgba(0,140,255,0.65),inset_0_1px_0_rgba(255,255,255,0.4)] border border-[#80C7FF]/40 transition-all duration-200 cursor-pointer text-center select-none"
      >
        {showIcon && (
          <span className="flex-shrink-0 transition-transform duration-200 hover:rotate-6">
            <Icon3DLightning className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
        )}
        <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] font-extrabold tracking-wider">
          {text}
        </span>
      </a>
    </div>
  );
};
