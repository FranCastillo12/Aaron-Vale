import { useEffect, useRef, useState } from "react";

export function useScrollReveal({ once = true } = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return { ref, visible };
}