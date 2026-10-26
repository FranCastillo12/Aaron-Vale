import { useState, useEffect, useRef } from "react";
import "../css/PhotoSlider.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

// Cambia estas rutas por tus fotos
const fotos = [
  "/images/AaronVale/Slider1.jpeg",
  "/images/AaronVale/Slider2.jpeg",
  "/images/AaronVale/Slider3.jpeg",
];

function PhotoSlider() {
  const { ref, visible } = useScrollReveal();
  const [actual, setActual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const inicioX = useRef(null);

  const siguiente = () => setActual((i) => (i + 1) % fotos.length);
  const anterior = () => setActual((i) => (i - 1 + fotos.length) % fotos.length);

  // Cambio automático cada 4 segundos
  useEffect(() => {
    if (pausado) return;
    const id = setInterval(siguiente, 4000);
    return () => clearInterval(id);
  }, [pausado, actual]);

  // Deslizar con el dedo
  const onTouchStart = (e) => {
    inicioX.current = e.touches[0].clientX;
    setPausado(true);
  };

  const onTouchEnd = (e) => {
    if (inicioX.current === null) return;
    const diff = e.changedTouches[0].clientX - inicioX.current;
    if (Math.abs(diff) > 50) {
      diff < 0 ? siguiente() : anterior();
    }
    inicioX.current = null;
    setPausado(false);
  };

  return (
    <div className="CouplePhoto-container">
      <div
        ref={ref}
        className={`CouplePhoto-wrap ${visible ? "is-visible" : ""}`}
      >
        <div
          className="slider"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="slider-track"
            style={{ transform: `translateX(-${actual * 100}%)` }}
          >
            {fotos.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Foto ${i + 1}`}
                className="slider-img"
                draggable="false"
              />
            ))}
          </div>

          <button
            className="slider-flecha izq"
            onClick={anterior}
            aria-label="Foto anterior"
          >
            ‹
          </button>
          <button
            className="slider-flecha der"
            onClick={siguiente}
            aria-label="Foto siguiente"
          >
            ›
          </button>

          <div className="slider-puntos">
            {fotos.map((_, i) => (
              <button
                key={i}
                className={`punto ${i === actual ? "activo" : ""}`}
                onClick={() => setActual(i)}
                aria-label={`Ir a la foto ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSlider;