import { useState } from "react";

import "../css/Attendance.css";
import { useInvitado } from "../context/InvitadoContext";
const Borde = "/images/Attendance/BORDE_RSVP.png";
const Pareja = "/images/Activities/Baile.png";

import RevealItem from "../components/RevealItem";

function Attendance() {
  const { invitado, enviar } = useInvitado();

  const yaRespondio = invitado.personas.every(
    (p) => invitado.respuestas[p] === "si" || invitado.respuestas[p] === "no",
  );

  const [respuestas, setRespuestas] = useState(invitado.respuestas);
  const [sellado, setSellado] = useState(yaRespondio);
  const [bloqueado, setBloqueado] = useState(yaRespondio);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  const completo = invitado.personas.every(
    (p) => respuestas[p] === "si" || respuestas[p] === "no",
  );

  const cambiar = (persona, valor) => {
    if (bloqueado) return;
    setRespuestas({ ...respuestas, [persona]: valor });
    setError("");
  };

  const handleSubmit = async () => {
    if (bloqueado) return;

    if (!seguro) return;

    setGuardando(true);
    setError("");
    try {
      await enviar(respuestas);
      setSellado(true);
      setBloqueado(true);
    } catch (err) {
      if (err.message === "ya_respondio") {
        setSellado(true);
        setBloqueado(true);
        setError("Esta invitación ya fue respondida.");
      } else if (err.message === "plazo") {
        setError("El plazo para responder ya terminó.");
      } else {
        setError("No pudimos guardar tu respuesta. Intenta de nuevo.");
      }
    } finally {
      setGuardando(false);
    }
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
          {/* <div className="campo-grupo">
            <label className="rsvp-label">Nombre Completo</label>
            <input
              type="text"
              className="rsvp-input"
              value={invitado.nombres}
              readOnly
            />
          </div> */}

          {invitado.personas.map((persona) => (
            <div className="campo-grupo" key={persona}>
              <label className="rsvp-label">Asistencia de {persona}</label>
              <select
                className="rsvp-select"
                value={respuestas[persona] || ""}
                onChange={(e) => cambiar(persona, e.target.value)}
                disabled={bloqueado}
              >
                <option value="">Selecciona una opción</option>
                <option value="si">Sí, ahí estaré</option>
                <option value="no">No podré asistir</option>
              </select>
            </div>
          ))}

          {error && (
            <p style={{ color: "#b00020", margin: "8px 0" }}>{error}</p>
          )}

          <button
            className={`rsvp-boton ${sellado ? "sellando" : ""}`}
            onClick={handleSubmit}
            disabled={bloqueado || !completo || guardando}
          >
            {guardando ? (
              "Guardando…"
            ) : sellado ? (
              <>
                Respuesta
                <br />
                sellada
              </>
            ) : (
              <>
                Sellar
                <br />
                respuesta
              </>
            )}
          </button>

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
