'use client';

import { SEATS_TOTAL, SEATS_THRESHOLD, SEATS_REMAINING } from '@/lib/workshop/config';

/**
 * Escasez HONESTA:
 * - Siempre muestra el badge estático "Cupo limitado: 50 lugares".
 * - Solo si hay un dato REAL de lugares restantes (variable de entorno) y es
 *   ≤ umbral, muestra la alerta "¡Solo quedan X!".
 * - Si el dato es 0, muestra "Registro lleno".
 * - Si NO hay dato real, NO inventa ningún número.
 */
export default function SeatBadge() {
  const showAlert = SEATS_REMAINING !== null && SEATS_REMAINING > 0 && SEATS_REMAINING <= SEATS_THRESHOLD;
  const full = SEATS_REMAINING !== null && SEATS_REMAINING <= 0;

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="ws-seat-badge">
        <span aria-hidden>▦</span> Cupo limitado: {SEATS_TOTAL} lugares
      </span>
      {showAlert && (
        <span className="ws-seat-alert">¡Solo quedan {SEATS_REMAINING} lugares!</span>
      )}
      {full && <span className="ws-seat-alert">Registro lleno</span>}
    </div>
  );
}
