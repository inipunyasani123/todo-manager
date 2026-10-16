'use client';
import { useEffect, useRef } from 'react';

const FOKUS = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

// Dialog modal: simpan elemen pemicu, kurung Tab di dalam dialog, lalu kembalikan fokus ke pemicu saat
// dialog ditutup (atau ke cariPemicu() bila elemen lamanya sudah tidak ada, mis. kartu pindah lajur).
export function useDialog(open, ref, cariPemicu) {
  const pemicu = useRef(null);
  const cari = useRef(cariPemicu);
  cari.current = cariPemicu;
  useEffect(() => {
    if (!open) return undefined;
    pemicu.current = document.activeElement;
    const onKey = (e) => {
      if (e.key !== 'Tab' || !ref.current) return;
      const els = [...ref.current.querySelectorAll(FOKUS)].filter((el) => el.offsetParent !== null);
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      const el = pemicu.current;
      setTimeout(() => {
        const t = el && el.isConnected && el !== document.body ? el : cari.current?.();
        t?.focus?.();
      }, 0);
    };
  }, [open, ref]);
}
