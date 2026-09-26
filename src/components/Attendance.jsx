import { useState } from "react";

import "../css/Attendance.css";
const Borde = "/images/Attendance/BORDE_RSVP.png";
const Pareja = "/images/Activities/Baile.png";

import RevealItem from "../components/RevealItem";

function Attendance() {
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [sellado, setSellado] = useState(false);

  const handleSubmit = () => {
    console.log({ nombre, asistencia });
    setSellado(true);
    // Aquí luego conectas con tu backend / Google Sheets / lo que uses
  };

  return (
    <div className="invitacion-container">
      <RevealItem>
        <div className="Attendance-titulo">
          <h2 className="Attendance"> ¿Nos acompañarás?</h2>
        </div>
      </RevealItem>

      <div className="rsvp-container">
        <RevealItem delay={0.15}>
          <img src={Borde} alt="" className="rsvp-borde" />
        </RevealItem>

        <div className="rsvp-contenido">
          <RevealItem delay={0.3}>
            <div className="campo-grupo">
              <label className="rsvp-label">Nombre Completo</label>
              <input
                type="text"
                className="rsvp-input"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
          </RevealItem>

          <RevealItem delay={0.45}>
            <div className="campo-grupo">
              <label className="rsvp-label">Asistencia</label>
              <select
                className="rsvp-select"
                value={asistencia}
                onChange={(e) => setAsistencia(e.target.value)}
              >
                <option value="">Selecciona una opción</option>
                <option value="si">Sí, ahí estaré</option>
                <option value="no">No podré asistir</option>
              </select>
            </div>
          </RevealItem>

          <RevealItem delay={0.6}>
            <button
              className={`rsvp-boton ${sellado ? "sellando" : ""}`}
              onClick={handleSubmit}
            >
              Sellar
              <br />
              respuesta
            </button>
          </RevealItem>

          {sellado && (
            <div className="sello-confirmacion">
              ¡Respuesta
              <br />
              sellada!
            </div>
          )}

          <RevealItem delay={0.2}>
            <div className="rsvp-pareja-wrap">
              <img src={Pareja} alt="Pareja bailando" className="rsvp-pareja" />
            </div>
          </RevealItem>
        </div>
      </div>
    </div>
  );
}

export default Attendance;
