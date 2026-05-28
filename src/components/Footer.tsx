import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-10 bg-[#0A0A0A] border-t border-bone/5">
      <div className="max-w-6xl mx-auto px-5 flex flex-col items-center gap-4 text-center">
        <Image
          src="/logo-bunker.png"
          alt="El Búnker del Vendedor"
          width={120}
          height={28}
          className="h-6 w-auto opacity-50"
        />
        <p className="text-bone/30 text-xs">
          El Búnker del Vendedor · Vender no se improvisa. Se entrena.
        </p>
        <div className="flex gap-4 text-bone/25 text-xs">
          <a href="#" className="hover:text-bone/50 transition-colors">Términos</a>
          <a href="#" className="hover:text-bone/50 transition-colors">Privacidad</a>
          <a href="#" className="hover:text-bone/50 transition-colors">Contacto</a>
        </div>
        <p className="text-bone/20 text-[11px]">
          © {new Date().getFullYear()} El Búnker del Vendedor. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
