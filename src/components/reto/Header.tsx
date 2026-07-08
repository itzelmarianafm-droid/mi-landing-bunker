'use client';

import Image from 'next/image';
import CtaButton from './CtaButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Image
          src="/diagnostico/logo-horizontal-blanco.png"
          alt="El Búnker del Vendedor"
          width={3600}
          height={1692}
          priority
          className="h-7 w-auto sm:h-8"
        />
        <CtaButton
          action="anchor"
          className="reto-cta px-4 py-2.5 text-xs sm:px-6 sm:text-sm"
        >
          Entrar al Reto · $24
        </CtaButton>
      </div>
    </header>
  );
}
