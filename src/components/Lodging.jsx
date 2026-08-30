import "../css/Lodging.css";

import Hotel from "../assets/images/Lodging/ILUSTRACION_HOTEL.png";

function Lodging() {
  return (
    <div className="invitacion-container">

      <h1 className="invitacion-titulo">
        Hospedaje
      </h1>

      <div className="invitacion-Hotel">

        <img
          src={Hotel}
          alt="Hotel"
          className="hoteel"
        />

        <button className="boton-hospedaje">
          Ver más
        </button>

      </div>

    </div>
  );
}

export default Lodging;