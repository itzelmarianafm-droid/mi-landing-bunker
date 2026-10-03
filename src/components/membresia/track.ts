'use client';

/** Dispara InitiateCheckout en Meta Pixel, Google Analytics y dataLayer. */
export function trackInitiateCheckout(plan: 'mensual' | 'anual') {
  if (typeof window === 'undefined') return;
  const w = window as unknown as {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };

  // Meta Pixel
  if (typeof w.fbq === 'function') {
    w.fbq('track', 'InitiateCheckout', { content_name: `membresia-${plan}` });
  }
  // Google Analytics (gtag)
  if (typeof w.gtag === 'function') {
    w.gtag('event', 'begin_checkout', { plan });
  }
  // dataLayer (GTM / fallback)
  if (Array.isArray(w.dataLayer)) {
    w.dataLayer.push({ event: 'initiate_checkout', plan, source: 'membresia' });
  }
}
