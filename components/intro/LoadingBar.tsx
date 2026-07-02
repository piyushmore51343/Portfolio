'use client';

export default function LoadingBar({ progress }: { progress: number }) {
  return (
    <div className="relative h-[2px] w-64 overflow-hidden rounded-full bg-white/10 sm:w-80">
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
      <div
        className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-cyan-300 blur-[6px] transition-[left] duration-150 ease-out"
        style={{ left: `${progress}%` }}
      />
    </div>
  );
}