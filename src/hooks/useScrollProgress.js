import { useEffect, useRef, useState } from "react";

/**
 * Calcula un progreso de 0 a 1 mientras el elemento entra desde abajo.
 * progress = 0  -> el elemento todavía está por debajo de la pantalla (recién empieza a asomar)
 * progress = 1  -> el elemento ya llegó a su "punto de reposo" y queda fijo ahí
 *
 * settlePoint: a qué % de la altura de pantalla (desde arriba) se considera
 * que el elemento ya "se posicionó" (0.6 = 60% de la pantalla).
 */
export function useScrollProgress(settlePoint = 0.6) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const startPoint = vh;                 // cuando el tope del elemento está en el borde inferior de la pantalla
      const endPoint = vh * settlePoint;      // cuando ya se considera "posicionado"

      let raw = (startPoint - rect.top) / (startPoint - endPoint);
      raw = Math.min(1, Math.max(0, raw));    // clamp entre 0 y 1

      setProgress(raw);
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
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [settlePoint]);

  return { ref, progress };
}