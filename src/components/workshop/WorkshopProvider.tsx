'use client';

import { createContext, useContext } from 'react';
import type { Tier } from '@/lib/workshop/config';

// Solo los datos que necesitan los componentes cliente interactivos.
export interface WorkshopClientConfig {
  tiers: Tier[];
  eventMs: number;
  checkoutUrl: string;
  vslUrl: string;
  vslPoster: string | null;
}

const Ctx = createContext<WorkshopClientConfig | null>(null);

export function useWorkshopConfig(): WorkshopClientConfig {
  const v = useContext(Ctx);
  if (!v) throw new Error('useWorkshopConfig debe usarse dentro de WorkshopProvider');
  return v;
}

export default function WorkshopProvider({
  config,
  children,
}: {
  config: WorkshopClientConfig;
  children: React.ReactNode;
}) {
  return <Ctx.Provider value={config}>{children}</Ctx.Provider>;
}
