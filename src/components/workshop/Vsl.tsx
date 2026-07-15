'use client';

import { useState } from 'react';
import { VSL_EMBED_URL } from '@/lib/workshop/config';

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
  const [playing, setPlaying] = useState(false);

  // VSL real disponible
  if (VSL_EMBED_URL) {
    return (
      <div className="ws-vsl ws-brackets">
        {playing ? (
          <iframe
            src={`${VSL_EMBED_URL}${VSL_EMBED_URL.includes('?') ? '&' : '?'}autoplay=1`}
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
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Reproducir video"
          >
            <span className="ws-play">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
    );
  }

  // Placeholder mientras no hay VSL
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
