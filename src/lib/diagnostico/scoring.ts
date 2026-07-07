// =====================================================================
// Lógica de cálculo del diagnóstico (según sección 6 del system prompt).
// =====================================================================

import { PILLARS, ZONES, PROFILES, type Pillar, type Zone, type Profile } from './data';

export interface PillarResult {
  key: Pillar['key'];
  n: number;
  code: string;
  title: string;
  short: string;
  score: number;   // 5..25
  zone: Zone['name'];
  color: string;
}

export interface DiagnosticResult {
  total: number;                 // 30..150
  profile: Profile;
  pillars: PillarResult[];       // en orden P1..P6
  weakest: PillarResult[];       // las 2 fugas prioritarias
}

/** Devuelve la zona (color + nombre) para un puntaje de pilar 5..25. */
export function getZone(score: number): Zone {
  return ZONES.find((z) => score >= z.min && score <= z.max) ?? ZONES[0];
}

/** Devuelve el perfil general para un total 30..150. */
export function getProfile(total: number): Profile {
  return PROFILES.find((p) => total >= p.min && total <= p.max) ?? PROFILES[0];
}

/**
 * Calcula el resultado completo.
 * @param answers matriz 6x5 con valores 1..5 (0 = sin responder).
 */
export function computeResult(answers: number[][]): DiagnosticResult {
  const pillars: PillarResult[] = PILLARS.map((pillar, i) => {
    const score = (answers[i] ?? []).reduce((sum, v) => sum + (v || 0), 0);
    const zone = getZone(score);
    return {
      key: pillar.key,
      n: pillar.n,
      code: pillar.code,
      title: pillar.title,
      short: pillar.short,
      score,
      zone: zone.name,
      color: zone.color,
    };
  });

  const total = pillars.reduce((sum, p) => sum + p.score, 0);
  const profile = getProfile(total);

  // 2 fugas prioritarias: menor puntaje primero; empate → orden natural P1→P6.
  const weakest = [...pillars]
    .sort((a, b) => (a.score !== b.score ? a.score - b.score : a.n - b.n))
    .slice(0, 2);

  return { total, profile, pillars, weakest };
}
