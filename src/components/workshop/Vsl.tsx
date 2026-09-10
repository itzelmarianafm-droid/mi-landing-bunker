'use client';

import { useState } from 'react';
import { useWorkshopConfig } from './WorkshopProvider';

function track(event: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  const payload = { event, source: 'workshop-prospecta' };
  if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
  else console.log('[workshop]', payload);
}

const PlayIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M8 5v14l11-7L8 5z" fill="#0B0B0B" />
  </svg>
);

export default function Vsl() {
  const { vslUrl, vslPoster } = useWorkshopConfig();
  const [playing, setPlaying] = useState(false);

  if (vslUrl) {
    return (
      <div className="ws-vsl ws-brackets">
        {playing ? (
          <iframe
            src={`${vslUrl}${vslUrl.includes('?') ? '&' : '?'}autoplay=1`}
            title="Workshop Prospecta sin Rogar — VSL"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => {
              setPlaying(true);
              track('vsl_play');
            }}
            className="group absolute inset-0 flex flex-col items-center justify-center gap-3"
            aria-label="Reproducir video"
          >
            {/* Poster del video de fondo */}
            {vslPoster && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={vslPoster}
                alt="Vista previa del video"
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            {/* Capa oscura para contraste (siempre, con o sin poster) */}
            <span className="absolute inset-0 bg-black/45" aria-hidden />
            <span className="ws-play relative z-10 transition-transform group-hover:scale-105">
              <PlayIcon />
            </span>
            <span className="relative z-10 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--text)]">
              Ver el video
            </span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="ws-vsl ws-brackets ws-grid flex flex-col items-center justify-center gap-4">
      <span className="ws-play" aria-hidden>
        <PlayIcon />
      </span>
      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">
        VSL próximamente
      </span>
    </div>
  );
}
