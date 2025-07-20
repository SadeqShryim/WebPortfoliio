// hooks/use-mobile.ts
"use client";
import { useState, useEffect } from "react";

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const handler = () => setIsMobile(window.innerWidth < breakpoint);

    mql.addEventListener("change", handler);
    handler(); // initial
    return () => mql.removeEventListener("change", handler);
  }, [breakpoint]);

  return Boolean(isMobile);
}
