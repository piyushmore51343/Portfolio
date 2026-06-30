"use client";

import { useEffect, useState } from "react";

export default function useIntro(delay: number = 2500) {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return showIntro;
}