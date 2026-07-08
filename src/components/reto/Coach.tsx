import Image from 'next/image';

interface Props {
  name: string;
  role: string;
  photo?: string;   // si no hay foto, muestra placeholder con iniciales
  bio?: string;
  compact?: boolean; // versión chica (hero) vs tarjeta completa (autoridad)
}

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function Coach({ name, role, photo, bio, compact = false }: Props) {
  return (
    <div className={compact ? '' : 'reto-panel overflow-hidden'}>
      {/* Foto o placeholder, recorte 4:5 */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--panel-2)]">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(max-width: 640px) 50vw, 320px"
            className="reto-coach-photo"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--dim)]">
            <span className="text-4xl font-black tracking-widest">{initials(name)}</span>
            <span className="text-[10px] uppercase tracking-[0.2em]">Foto próximamente</span>
          </div>
        )}
      </div>

      <div className={compact ? 'pt-3' : 'p-5'}>
        {/* barrita naranja + nombre */}
        <div className="mb-1 h-0.5 w-8 bg-[var(--combat)]" />
        <p className="font-extrabold uppercase leading-tight tracking-wide">{name}</p>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--combat)]">
          {role}
        </p>
        {bio && <p className="mt-3 text-sm leading-relaxed reto-muted">{bio}</p>}
      </div>
    </div>
  );
}
