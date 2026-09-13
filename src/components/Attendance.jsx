import { useState } from "react";

import "../css/Attendance.css";
const Borde = "/images/Attendance/BORDE_RSVP.png";
const Pareja = "/images/Activities/Baile.png";


function Attendance() {

 const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");

 const handleSubmit = () => {
    console.log({ nombre, asistencia });
    // Aquí luego conectas con tu backend / Google Sheets / lo que uses
  };

  return (
    <div className="invitacion-container">

   <div className="Attendance-titulo">
          <h2 className="Attendance"> ¿Nos acompañarás?</h2>
        </div>



       <div className="rsvp-container">
      <img src={Borde} alt="" className="rsvp-borde" />

      <div className="rsvp-contenido">
        <label className="rsvp-label">Nombre Completo</label>
        <input
          type="text"
          className="rsvp-input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

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

        <button className="rsvp-boton" onClick={handleSubmit}>
          Enviar<br />respuesta
        </button>

        <img src={Pareja} alt="Pareja bailando" className="rsvp-pareja" />
      </div>
    </div>

</div>
  );
}

export default Attendance;