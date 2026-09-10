// Obtiene la miniatura (poster) del video para mostrarla antes de reproducir,
// así el recuadro del VSL no se ve vacío. Soporta Vimeo (oEmbed) y YouTube.
// Si falla, devuelve null y el reproductor usa su fondo por defecto.

export async function getVslPoster(vslUrl: string): Promise<string | null> {
  if (!vslUrl) return null;
  try {
    // Vimeo → oEmbed
    const vimeoId = vslUrl.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];
    if (vimeoId) {
      const res = await fetch(
        `https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=1280`,
        { next: { revalidate: 3600 } }
      );
      if (!res.ok) return null;
      const j = (await res.json()) as { thumbnail_url?: string };
      return j.thumbnail_url || null;
    }
    // YouTube → miniatura directa
    const ytId = vslUrl.match(/(?:youtube\.com\/embed\/|youtu\.be\/|[?&]v=)([\w-]{11})/)?.[1];
    if (ytId) return `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`;
  } catch {
    return null;
  }
  return null;
}
