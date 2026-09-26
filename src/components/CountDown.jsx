import { useState, useEffect } from "react";

function Digit({ value, dark }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    if (value !== displayValue) {
      setDisplayValue(value);
      setAnimKey((k) => k + 1);
    }
  }, [value, displayValue]);

  return (
    <span className="countdown-numero-wrap">
      <span key={animKey} className="countdown-numero">
        {displayValue}
      </span>
    </span>
  );
}

function Countdown({ fecha }) {
  const calcularTiempoRestante = () => {
    const diferencia = new Date(fecha) - new Date();

    if (diferencia <= 0) {
      return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
    }

    return {
      dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
      horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((diferencia / (1000 * 60)) % 60),
      segundos: Math.floor((diferencia / 1000) % 60),
    };
  };

  const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempoRestante(calcularTiempoRestante());
    }, 1000);

    return () => clearInterval(intervalo);
  }, [fecha]);

  return (
    <div className="countdown">
      <div className="countdown-item">
        <Digit value={tiempoRestante.dias} />
        <span className="countdown-label">DIAS</span>
      </div>
      <div className="countdown-item">
        <Digit value={tiempoRestante.horas} />
        <span className="countdown-label">HRS</span>
      </div>
      <div className="countdown-item">
        <Digit value={tiempoRestante.minutos} />
        <span className="countdown-label">MIN</span>
      </div>
      <div className="countdown-item">
        <Digit value={tiempoRestante.segundos} />
        <span className="countdown-label">SEG</span>
      </div>
    </div>
  );
}

export default Countdown;