'use client';

import { useEffect } from 'react';

/**
 * Replica el script del HTML aprobado: al tocar (.item / .pli) alterna la
 * clase .open para mostrar el popover en móvil. En desktop se muestra con
 * :hover (CSS). No renderiza nada.
 */
export default function PopoverToggle() {
  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('.membresia .item, .membresia .pli')
    );
    const handlers = els.map((el) => {
      const h = () => el.classList.toggle('open');
      el.addEventListener('click', h);
      return [el, h] as const;
    });
    return () => handlers.forEach(([el, h]) => el.removeEventListener('click', h));
  }, []);

  return null;
}
