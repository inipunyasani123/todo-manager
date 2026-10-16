import { Suspense } from 'react';
import TaskManager from '@/components/TaskManager';
import TopBar from '@/components/TopBar';

// TaskManager memakai useSearchParams (?label=), jadi HTML awal berisi fallback ini. Fallback setinggi layar
// (dengan bilah atas) supaya bilah demo di bawah tidak terlihat lalu melompat saat aplikasi muncul (CLS).
export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background"><TopBar /><p className="py-32 text-center text-on-surface-variant">Memuat…</p></div>}>
      <TaskManager />
    </Suspense>
  );
}
