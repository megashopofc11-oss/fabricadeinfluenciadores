import React from 'react';

// Premium 3D-embossed Vector Icons with realistic lighting, specular highlights and electric blue neon glow

export const Icon3DLightning: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 2px 8px rgba(0, 140, 255, 0.7))' }}
  >
    <defs>
      <linearGradient id="boltGrad" x1="12" y1="4" x2="36" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="35%" stopColor="#80C7FF" />
        <stop offset="70%" stopColor="#008CFF" />
        <stop offset="100%" stopColor="#005BBD" />
      </linearGradient>
      <linearGradient id="boltInnerGlow" x1="20" y1="6" x2="28" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#008CFF" stopOpacity="0.1" />
      </linearGradient>
      <filter id="boltShadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#002D66" floodOpacity="0.8" />
      </filter>
    </defs>
    {/* 3D Depth Layer */}
    <path
      d="M27.5 4.5L13.5 24.5H23.5L19.5 43.5L34.5 21.5H24.5L27.5 4.5Z"
      fill="#00458E"
      transform="translate(1, 1)"
    />
    {/* Main Facet */}
    <path
      d="M27.5 4.5L13.5 24.5H23.5L19.5 43.5L34.5 21.5H24.5L27.5 4.5Z"
      fill="url(#boltGrad)"
      filter="url(#boltShadow)"
    />
    {/* Top Specular Edge Highlight */}
    <path
      d="M27.5 4.5L14.5 24.5H23.5L20.5 35L27 22H24L27.5 4.5Z"
      fill="url(#boltInnerGlow)"
    />
  </svg>
);

export const Icon3DAvatarAI: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 16px rgba(0, 140, 255, 0.4))' }}
  >
    <defs>
      <radialGradient id="sphereGrad" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="20%" stopColor="#99D1FF" />
        <stop offset="60%" stopColor="#008CFF" />
        <stop offset="90%" stopColor="#004085" />
        <stop offset="100%" stopColor="#001838" />
      </radialGradient>
      <linearGradient id="ringGrad" x1="10" y1="10" x2="54" y2="54" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#80C7FF" />
        <stop offset="50%" stopColor="#008CFF" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#00D2FF" />
      </linearGradient>
      <linearGradient id="chipGrad" x1="24" y1="20" x2="40" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E6F4FF" />
        <stop offset="50%" stopColor="#008CFF" />
        <stop offset="100%" stopColor="#00356E" />
      </linearGradient>
    </defs>
    
    {/* Outer Floating Hologram Ring */}
    <ellipse cx="32" cy="32" rx="28" ry="12" stroke="url(#ringGrad)" strokeWidth="2.5" strokeDasharray="3 2" transform="rotate(-25 32 32)" />
    <circle cx="12" cy="22" r="2.5" fill="#00D2FF" style={{ filter: 'drop-shadow(0 0 4px #00D2FF)' }} />
    <circle cx="52" cy="42" r="2" fill="#008CFF" style={{ filter: 'drop-shadow(0 0 4px #008CFF)' }} />

    {/* 3D Head Base */}
    <ellipse cx="32" cy="25" rx="14" ry="17" fill="url(#sphereGrad)" />
    
    {/* Cyber Face Visor / Neural Grid */}
    <rect x="22" y="21" width="20" height="7" rx="3.5" fill="#050C1A" stroke="#00D2FF" strokeWidth="1.2" />
    <circle cx="28" cy="24.5" r="1.5" fill="#00D2FF" style={{ filter: 'drop-shadow(0 0 3px #00D2FF)' }} />
    <circle cx="36" cy="24.5" r="1.5" fill="#00D2FF" style={{ filter: 'drop-shadow(0 0 3px #00D2FF)' }} />

    {/* 3D Cyber Shoulders / Base */}
    <path
      d="M16 54C16 45 22 41 32 41C42 41 48 45 48 54H16Z"
      fill="url(#chipGrad)"
      stroke="rgba(0,140,255,0.6)"
      strokeWidth="1.5"
    />
    
    {/* Neural Core / Diamond Emblem */}
    <polygon points="32,44 36,48 32,52 28,48" fill="#FFFFFF" style={{ filter: 'drop-shadow(0 0 6px #008CFF)' }} />
  </svg>
);

export const Icon3DCameraVideo: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 16px rgba(0, 140, 255, 0.4))' }}
  >
    <defs>
      <radialGradient id="lensShine" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#52B2FF" />
        <stop offset="70%" stopColor="#0064C8" />
        <stop offset="100%" stopColor="#021429" />
      </radialGradient>
      <linearGradient id="bodyGrad" x1="10" y1="16" x2="46" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="40%" stopColor="#0F172A" />
        <stop offset="100%" stopColor="#030712" />
      </linearGradient>
      <linearGradient id="bevelGrad" x1="12" y1="18" x2="48" y2="18" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00D2FF" />
        <stop offset="50%" stopColor="#008CFF" />
        <stop offset="100%" stopColor="#004C99" />
      </linearGradient>
    </defs>

    {/* Camera Body 3D Chassis */}
    <rect x="8" y="20" width="36" height="28" rx="8" fill="url(#bodyGrad)" stroke="url(#bevelGrad)" strokeWidth="1.8" />
    
    {/* Lens Barrel (3D Cone effect) */}
    <circle cx="26" cy="34" r="10.5" fill="#030712" stroke="#008CFF" strokeWidth="2" />
    <circle cx="26" cy="34" r="7.5" fill="url(#lensShine)" />
    <circle cx="24" cy="31.5" r="2.2" fill="#FFFFFF" fillOpacity="0.8" />

    {/* Video Projector Cone / Lens Hood */}
    <path
      d="M44 26L56 19V49L44 42V26Z"
      fill="linear-gradient(135deg, #008CFF 0%, #00458E 100%)"
      stroke="#00D2FF"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    
    {/* Recording Red / Cyan Light */}
    <circle cx="15" cy="26" r="2.2" fill="#00FFCC" style={{ filter: 'drop-shadow(0 0 5px #00FFCC)' }} />

    {/* Reel Details on Top */}
    <rect x="18" y="14" width="16" height="6" rx="3" fill="#0D1B2A" stroke="#008CFF" strokeWidth="1.2" />
  </svg>
);

export const Icon3DGrowthBusiness: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 4px 16px rgba(0, 140, 255, 0.4))' }}
  >
    <defs>
      <linearGradient id="rocketBody" x1="20" y1="10" x2="44" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="30%" stopColor="#BAE0FF" />
        <stop offset="70%" stopColor="#008CFF" />
        <stop offset="100%" stopColor="#003D7A" />
      </linearGradient>
      <linearGradient id="finGrad" x1="12" y1="36" x2="28" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00D2FF" />
        <stop offset="100%" stopColor="#004B99" />
      </linearGradient>
      <radialGradient id="flameGrad" cx="50%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="40%" stopColor="#00D2FF" />
        <stop offset="80%" stopColor="#008CFF" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>

    {/* Megaphone / Rocket Launch 3D Symbol */}
    {/* Left & Right Wings */}
    <path d="M18 36L12 48L24 45L22 36H18Z" fill="url(#finGrad)" />
    <path d="M46 36L52 48L40 45L42 36H46Z" fill="url(#finGrad)" />

    {/* Rocket Fuselage */}
    <path
      d="M32 8C25 18 22 28 22 44C22 46 24 48 26 48H38C40 48 42 46 42 44C42 28 39 18 32 8Z"
      fill="url(#rocketBody)"
      stroke="#00D2FF"
      strokeWidth="1.5"
    />

    {/* Porthole */}
    <circle cx="32" cy="26" r="5" fill="#050F1E" stroke="#00D2FF" strokeWidth="1.5" />
    <circle cx="32" cy="26" r="2.5" fill="#00D2FF" style={{ filter: 'drop-shadow(0 0 4px #00D2FF)' }} />

    {/* Thrust Glow */}
    <ellipse cx="32" cy="52" rx="6" ry="9" fill="url(#flameGrad)" style={{ filter: 'drop-shadow(0 0 10px #00D2FF)' }} />
  </svg>
);

export const Icon3DShieldCheck: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ filter: 'drop-shadow(0 1px 4px rgba(0, 140, 255, 0.5))' }}
  >
    <defs>
      <linearGradient id="shieldGrad" x1="4" y1="2" x2="20" y2="22" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#80C7FF" />
        <stop offset="50%" stopColor="#008CFF" />
        <stop offset="100%" stopColor="#00488F" />
      </linearGradient>
    </defs>
    <path
      d="M12 2L4 5V11C4 16.5 7.4 21.6 12 23C16.6 21.6 20 16.5 20 11V5L12 2Z"
      fill="url(#shieldGrad)"
      stroke="#B3DCFF"
      strokeWidth="1"
    />
    <path
      d="M9 11.5L11 13.5L15 9.5"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
