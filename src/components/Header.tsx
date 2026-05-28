'use client';

import Image from 'next/image';
import { SKOOL_URL_MONTHLY } from '@/lib/config';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-carbon/90 backdrop-blur-md border-b border-bone/5">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Image
          src="/logo-bunker.png"
          alt="El Búnker del Vendedor"
          width={160}
          height={36}
          className="h-8 w-auto"
          priority
        />
        <a
          href={SKOOL_URL_MONTHLY}
          target="_blank"
          rel="noopener"
          className="bg-combat text-bone text-xs font-heading font-semibold uppercase tracking-wider px-5 py-2.5 rounded hover:bg-combat/85 transition-colors"
        >
          Entrar al Búnker
        </a>
      </div>
    </header>
  );
}
