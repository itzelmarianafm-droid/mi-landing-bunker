'use client';

import { useEffect } from 'react';

/**
 * Control de los popovers (ⓘ) en móvil:
 * - Solo uno abierto a la vez (al abrir uno, se cierran los demás).
 * - Se cierra tocándolo otra vez, tocando su propio popover, o tocando fuera.
 * - También se cierra al hacer scroll, para no dejar nada encimado.
 * En escritorio el detalle también se muestra al pasar el cursor (CSS :hover).
 */
export default function PopoverToggle() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.membresia .item, .membresia .pli')
    );

    const closeAll = (except?: HTMLElement) => {
      els.forEach((el) => {
        if (el !== except) el.classList.remove('open');
      });
    };

    const onItemClick = (e: Event) => {
      const el = e.currentTarget as HTMLElement;
      const willOpen = !el.classList.contains('open');
      closeAll(willOpen ? el : undefined);
      el.classList.toggle('open', willOpen);
      // Evita que el click burbujee al documento y lo cierre de inmediato.
      e.stopPropagation();
    };

    const onOutside = () => closeAll();
    const onScroll = () => closeAll();

    els.forEach((el) => el.addEventListener('click', onItemClick));
    document.addEventListener('click', onOutside);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      els.forEach((el) => el.removeEventListener('click', onItemClick));
      document.removeEventListener('click', onOutside);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
