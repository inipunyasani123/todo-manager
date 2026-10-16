// Ilustrasi kecil untuk keadaan kosong. SVG sebaris (tanpa unduhan), warnanya dari token tema sehingga ikut
// berganti di mode gelap. Dekoratif: teks di sebelahnya yang membawa pesan.

const ukuran = 'mx-auto mb-4 h-16 w-24 md:h-20 md:w-28';

function Papan({ centang }) {
  return (
    <>
      <ellipse cx="80" cy="111" rx="42" ry="5" className="fill-on-surface/5" />
      <rect x="44" y="14" width="72" height="92" rx="10" strokeWidth="2.5" className="fill-surface-container-lowest stroke-outline-variant" />
      <rect x="64" y="8" width="32" height="14" rx="5" className="fill-primary-container" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="56" y={36 + i * 22} width="13" height="13" rx="4" strokeWidth="2.5"
            className={centang ? 'fill-secondary stroke-secondary' : 'fill-none stroke-outline'} />
          {centang && <path d={`M59 ${42.5 + i * 22}l3 3 5-6`} fill="none" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="stroke-surface-container-lowest" />}
          <path d={`M76 ${42.5 + i * 22}h${i === 1 ? 20 : 28}`} fill="none" strokeWidth="2.5" strokeLinecap="round" className="stroke-outline-variant" />
        </g>
      ))}
    </>
  );
}

/** Semua tugas tuntas: papan klip dengan semua kotak tercentang. */
export function SemuaTuntas() {
  return (
    <svg viewBox="0 0 160 120" className={ukuran} aria-hidden="true" focusable="false">
      <Papan centang />
      <path d="M130 22l2.2 5 5 2.2-5 2.2-2.2 5-2.2-5-5-2.2 5-2.2z" className="fill-primary/50" />
      <path d="M28 64l1.8 4 4 1.8-4 1.8-1.8 4-1.8-4-4-1.8 4-1.8z" className="fill-tertiary-container/60" />
    </svg>
  );
}

/** Belum ada yang selesai: papan klip dengan kotak kosong. */
export function BelumSelesai() {
  return (
    <svg viewBox="0 0 160 120" className={ukuran} aria-hidden="true" focusable="false">
      <Papan />
    </svg>
  );
}

/** Saringan tidak menemukan apa pun: kaca pembesar di atas daftar pudar. */
export function TakCocok() {
  return (
    <svg viewBox="0 0 160 120" className={ukuran} aria-hidden="true" focusable="false">
      <ellipse cx="80" cy="111" rx="42" ry="5" className="fill-on-surface/5" />
      <rect x="30" y="26" width="84" height="16" rx="8" className="fill-surface-container-high" />
      <rect x="30" y="50" width="64" height="16" rx="8" className="fill-surface-container-high" />
      <rect x="30" y="74" width="74" height="16" rx="8" className="fill-surface-container-high" />
      <circle cx="106" cy="60" r="22" strokeWidth="6" className="fill-surface-container-lowest/70 stroke-primary" />
      <path d="M122 76l16 16" fill="none" strokeWidth="8" strokeLinecap="round" className="stroke-primary" />
    </svg>
  );
}

/** Belum ada label: satu label tag kosong. */
export function LabelKosong() {
  return (
    <svg viewBox="0 0 160 120" className={ukuran} aria-hidden="true" focusable="false">
      <ellipse cx="80" cy="111" rx="40" ry="5" className="fill-on-surface/5" />
      <path d="M52 30h44l26 30-26 30H52a8 8 0 0 1-8-8V38a8 8 0 0 1 8-8z" strokeWidth="2.5" strokeLinejoin="round" className="fill-primary/15 stroke-primary" transform="rotate(-10 83 60)" />
      <circle cx="98" cy="54" r="6" strokeWidth="2.5" className="fill-surface-container-lowest stroke-primary" />
      <path d="M62 52h20M60 64h18" fill="none" strokeWidth="3" strokeLinecap="round" className="stroke-primary/50" transform="rotate(-10 83 60)" />
    </svg>
  );
}
