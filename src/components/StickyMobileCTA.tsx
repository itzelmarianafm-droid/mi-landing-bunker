'use client';

import { useEffect, useState } from 'react';
import { SKOOL_URL_MONTHLY } from '@/lib/config';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-carbon/95 backdrop-blur-md border-t border-bone/10 px-4 py-3 transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href={SKOOL_URL_MONTHLY}
        target="_blank"
        rel="noopener"
        className="block text-center bg-combat text-bone font-heading font-bold text-sm uppercase tracking-wider py-3.5 rounded hover:bg-combat/85 transition-colors"
      >
        Entrar al Búnker $5/mes
      </a>
    </div>
  );
}
