import React, { useEffect, useRef, useState } from 'react';
import Player from '@vimeo/player';
import { Volume2, VolumeX, Play } from 'lucide-react';

interface VimeoPlayerProps {
  videoId?: string;
}

export const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoId = '1235107433' }) => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [hasInteractedAudio, setHasInteractedAudio] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;

    try {
      const player = new Player(iframeRef.current);
      playerRef.current = player;

      player.on('play', () => {
        setIsPlaying(true);
      });

      player.on('pause', () => {
        setIsPlaying(false);
      });

      player.on('volumechange', (data: { volume: number }) => {
        setIsMuted(data.volume === 0);
      });

      player.on('loaded', () => {
        setIsReady(true);
        // Attempt autoplay muted as per standard browser policies
        player.setMuted(true).then(() => {
          player.play().catch(() => {
            // Autoplay was blocked by browser; user can click the play button
            setIsPlaying(false);
          });
        });
      });

      // Extra check: query muted state
      player.getMuted().then((muted: boolean) => {
        setIsMuted(muted);
      }).catch(() => {
        // Fallback default
        setIsMuted(true);
      });

    } catch (err) {
      console.warn('Vimeo player init notice:', err);
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.unload().catch(() => {});
      }
    };
  }, [videoId]);

  const toggleSound = () => {
    if (!playerRef.current) return;

    if (isMuted) {
      playerRef.current.setMuted(false)
        .then(() => playerRef.current?.setVolume(1))
        .then(() => {
          setIsMuted(false);
          setHasInteractedAudio(true);
          // ensure playing
          playerRef.current?.play().catch(() => {});
        })
        .catch(() => {
          // Fallback if browser blocked unmuting without user gesture
        });
    } else {
      playerRef.current.setMuted(true)
        .then(() => {
          setIsMuted(true);
        })
        .catch(() => {});
    }
  };

  const handleManualPlay = () => {
    if (!playerRef.current) return;
    playerRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  };

  // Vimeo iframe embed URL with strict parameters:
  // autoplay=1, muted=1, playsinline=1, loop=1, dnt=1, portrait=0, title=0, byline=0
  const embedSrc = `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=1&playsinline=1&loop=1&autopause=0&transparent=0&title=0&byline=0&portrait=0&badge=0&app_id=122963`;

  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] mx-auto">
      {/* Cinematic Ambient Glow Behind Video */}
      <div 
        className="absolute -inset-2 sm:-inset-3 bg-gradient-to-b from-[#008CFF]/25 via-[#008CFF]/15 to-transparent rounded-[26px] blur-xl opacity-75 -z-10 pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Video Card Frame - Clean, subtle, exactly 9:16 */}
      <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-[#000000] border border-[#008CFF]/35 shadow-[0_10px_35px_rgba(0,0,0,0.9),0_0_25px_rgba(0,140,255,0.25)]">
        <iframe
          ref={iframeRef}
          src={embedSrc}
          className="w-full h-full object-cover block border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          title="Fábrica de Influenciadores - Vídeo de Vendas"
        />

        {/* Discreet Sound Activation Pill Overlay (visible when muted) */}
        {isMuted && (
          <div className="absolute top-3 left-3 right-3 flex justify-center pointer-events-none z-20 transition-all duration-300">
            <button
              type="button"
              onClick={toggleSound}
              className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-[#008CFF]/60 shadow-[0_0_15px_rgba(0,140,255,0.4)] hover:shadow-[0_0_22px_rgba(0,140,255,0.7)] hover:border-[#008CFF] hover:scale-105 active:scale-95 transition-all cursor-pointer group"
              aria-label="Ativar som do vídeo"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#008CFF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
              </span>
              <VolumeX className="w-3.5 h-3.5 text-[#008CFF] group-hover:text-white transition-colors" />
              <span>Toque para ativar o som</span>
            </button>
          </div>
        )}

        {/* Discreet Audio Status indicator when unmuted */}
        {!isMuted && hasInteractedAudio && (
          <div className="absolute top-3 right-3 z-20 pointer-events-none transition-opacity duration-500">
            <button
              type="button"
              onClick={toggleSound}
              className="pointer-events-auto flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 text-white/90 text-[11px] font-medium backdrop-blur-sm border border-white/10 hover:border-[#008CFF]/50 transition-all cursor-pointer"
              aria-label="Mutar som"
            >
              <Volume2 className="w-3 h-3 text-[#008CFF]" />
              <span>Som ligado</span>
            </button>
          </div>
        )}

        {/* Play fallback overlay if browser totally blocked initial autoplay */}
        {!isPlaying && isReady && (
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity">
            <button
              type="button"
              onClick={() => {
                handleManualPlay();
                toggleSound();
              }}
              className="w-16 h-16 rounded-full bg-[#008CFF] hover:bg-[#0077DB] text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,140,255,0.8)] hover:scale-110 active:scale-95 transition-all cursor-pointer group"
              aria-label="Assistir vídeo com som"
            >
              <Play className="w-7 h-7 text-white fill-white ml-1 group-hover:scale-105 transition-transform" />
            </button>
            <span className="mt-3 text-xs font-semibold text-white/90 px-3 py-1 bg-black/70 rounded-full border border-[#008CFF]/40 backdrop-blur-sm">
              Assistir com Som
            </span>
          </div>
        )}
      </div>

      {/* Discreet Live Tag / Watch helper */}
      <div className="mt-2.5 flex items-center justify-center gap-2 text-xs text-white/70">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]"></span>
        <span className="tracking-wide">Assista à apresentação completa acima</span>
      </div>
    </div>
  );
};
