import { useState } from "react";

import "../css/Attendance.css";
import { useInvitado } from "../context/InvitadoContext";
const Borde = "/images/Attendance/BORDE_RSVP.png";
const Pareja = "/images/Activities/Baile.png";

import RevealItem from "../components/RevealItem";

/* Componente de afuera: espera a que exista el invitado */
function Attendance() {
  const { invitado, enviar } = useInvitado();

  if (!invitado) return null; // o un "Cargando..." si prefieres

  return <AttendanceForm invitado={invitado} enviar={enviar} />;
}

/* Componente de adentro: tu lógica de siempre */
function AttendanceForm({ invitado, enviar }) {
  const personas = invitado.personas || [];
  const respuestasIniciales = invitado.respuestas || {};

  const yaRespondio =
    personas.length > 0 &&
    personas.every(
      (p) => respuestasIniciales[p] === "si" || respuestasIniciales[p] === "no",
    );

  const [respuestas, setRespuestas] = useState(respuestasIniciales);
  const [sellado, setSellado] = useState(yaRespondio);
  const [bloqueado, setBloqueado] = useState(yaRespondio);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");

  const completo = personas.every(
    (p) => respuestas[p] === "si" || respuestas[p] === "no",
  );

  const cambiar = (persona, valor) => {
    if (bloqueado) return;
    setRespuestas({ ...respuestas, [persona]: valor });
    setError("");
  };

  const handleSubmit = async () => {
    if (bloqueado) return;
    if (!completo) return;

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
    <div className="Attendance-container">
      <RevealItem>
        <div className="Attendance-titulo">
          <h2 className="Attendance"> ¿Nos acompañarás?</h2>
        </div>
      </RevealItem>

      <div className="rsvp-container">
        <img src={Borde} alt="" className="rsvp-borde" />

        <div className={`rsvp-contenido personas-${personas.length}`}>
          {personas.map((persona) => (
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

          <div className="rsvp-pareja-wrap">
            <img src={Pareja} alt="Pareja bailando" className="rsvp-pareja" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attendance;