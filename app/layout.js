import { DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_DESC, pageMeta } from "@/lib/seo";

const dmsans = DM_Sans({ subsets: ["latin"], variable: "--font-dmsans", display: "swap" });

const __jsonld = {"@context":"https://schema.org","@type":"WebApplication","name":"Tuntas","description":"Pengelola tugas dengan prioritas, tenggat berlabel relatif, label yang bisa diganti nama sekaligus, kalender bulanan, dan saringan tugas yang terlambat.","url":"https://todo-manager.pintuweb.id","applicationCategory":"ProductivityApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"IDR"}};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s — ${SITE_NAME}` },
  applicationName: SITE_NAME,
  keywords: ["task manager", "manajemen tugas", "produktivitas", "to-do", "pengelola tugas"],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  ...pageMeta({ description: SITE_DESC, path: '/' }),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = { themeColor: "#4f46e5" };

const themeScript = `
(function(){try{var t=localStorage.getItem('tuntas.tema');var d=t? t==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={dmsans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 88px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=task-manager" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
