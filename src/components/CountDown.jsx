import { useState, useEffect } from "react";

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
        <span className="countdown-numero">{tiempoRestante.dias}</span>
        <span className="countdown-label">DIAS</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-numero">{tiempoRestante.horas}</span>
        <span className="countdown-label">HRS</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-numero">{tiempoRestante.minutos}</span>
        <span className="countdown-label">MIN</span>
      </div>
      <div className="countdown-item">
        <span className="countdown-numero">{tiempoRestante.segundos}</span>
        <span className="countdown-label">SEG</span>
      </div>
    </div>
  );
}

export default Countdown;