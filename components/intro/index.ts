'use client';

import { useEffect, useState } from 'react';

export function useIntro(duration = 2600, onComplete?: () => void) {
  const [isBooting, setIsBooting] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const start = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);

      if (elapsed < duration) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setIsBooting(false);
          document.body.style.overflow = '';
          onComplete?.();
        }, 300);
      }
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [duration]);

  return { isBooting, progress };
}