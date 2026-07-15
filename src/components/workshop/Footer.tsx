import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)]">
      <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6">
        <Image
          src="/diagnostico/logo-horizontal-blanco.png"
          alt="El Búnker del Vendedor"
          width={3600}
          height={1692}
          className="mx-auto h-8 w-auto"
        />
        <p className="mt-5 text-sm italic text-[var(--muted)]">Vender no se improvisa. Se entrena.</p>
        <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--dim)]">
          No vendemos motivación. Construimos vendedores.
        </p>
      </div>
    </footer>
  );
}
