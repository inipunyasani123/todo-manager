// Metadata per halaman: judul, deskripsi, canonical, Open Graph, dan Twitter yang selalu seragam.
// Next.js tidak menggabungkan openGraph/twitter dari layout induk, jadi tiap halaman mengisi semuanya.
export const SITE_URL = 'https://todo-manager.pintuweb.id';
export const SITE_NAME = 'Tuntas';
export const SITE_TITLE = 'Tuntas — Pengelola tugas dengan kalender';
export const SITE_DESC = 'Pengelola tugas dengan prioritas, tenggat berlabel relatif, label yang bisa diganti nama sekaligus, kalender bulanan, dan saringan tugas yang terlambat.';
const OG = { url: '/og.jpg', width: 1200, height: 630, alt: SITE_TITLE };

export function pageMeta({ title, description, path = '/' }) {
  const full = title ? `${title} — ${SITE_NAME}` : SITE_TITLE;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', locale: 'id_ID', siteName: SITE_NAME, url: path, title: full, description, images: [OG] },
    twitter: { card: 'summary_large_image', title: full, description, images: [OG.url] },
  };
}
