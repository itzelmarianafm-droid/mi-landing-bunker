'use client';

import { useState } from 'react';

function track(event: string) {
  const w = window as unknown as { dataLayer?: unknown[] };
  const payload = { event, source: 'workshop-prospecta' };
  if (Array.isArray(w.dataLayer)) w.dataLayer.push(payload);
  else console.log('[workshop]', payload);
}

const PlayIcon = () => (
  <span className="play">
    <svg width="22" height="24" viewBox="0 0 22 24" fill="none" aria-hidden>
      <path d="M21 12 0 24V0z" fill="#1A1105" />
    </svg>
  </span>
);

const LABEL = 'Video · Prospecta sin Rogar';

export default function Vsl({ url, poster }: { url: string; poster: string | null }) {
  const [playing, setPlaying] = useState(false);

  if (!url) {
    return (
      <div className="video">
        <PlayIcon />
        <div className="vlabel">{LABEL}</div>
      </div>
    );
  }

  return (
    <div className="video">
      {playing ? (
        <iframe
          src={`${url}${url.includes('?') ? '&' : '?'}autoplay=1`}
          title="Workshop Prospecta sin Rogar — video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          aria-label="Reproducir el video del workshop"
          onClick={() => {
            setPlaying(true);
            track('vsl_play');
          }}
        >
          {poster && (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={poster} alt="" className="poster" />
              <span className="shade" aria-hidden />
            </>
          )}
          <PlayIcon />
          <span className="vlabel" style={poster ? { color: '#F3EDE2' } : undefined}>
            {LABEL}
          </span>
        </button>
      )}
    </div>
  );
}
