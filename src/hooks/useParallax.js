import { useEffect, useRef, useState } from "react";

/**
 * Hook para un parallax muy sutil: el elemento se desplaza
 * a una fracción (`speed`) de la velocidad real del scroll.
 * speed = 0.1 => se mueve al 10% de lo que se mueve la página.
 */
export function useParallax(speed = 0.1) {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distanceFromCenter = elementCenter - viewportCenter;
      setOffset(distanceFromCenter * speed * -1);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return { ref, offset };
}