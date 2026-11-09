// Textos de la barra de avance que no vienen en Referencia/landing-v2.html
// (aprobados aparte). Los usan la landing y la vista previa del panel.

import type { Barra } from './config';

/** "¡Solo quedan 7!" — solo cuando quedan <= umbral. */
export function textoUrgencia(barra: Barra, umbral: number): string | null {
  if (barra.quedan > umbral) return null;
  return barra.quedan === 1 ? '¡Solo queda 1!' : `¡Solo quedan ${barra.quedan}!`;
}

/** "Quedan 7 lugares en el Lote 1" */
export function textoLugares(barra: Barra, lote: string): string {
  return barra.quedan === 1
    ? `Queda 1 lugar en el ${lote}`
    : `Quedan ${barra.quedan} lugares en el ${lote}`;
}
