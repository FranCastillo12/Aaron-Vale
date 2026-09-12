import { useState } from "react";

import "../css/Lodging.css";
import Hotel from "../assets/images/Lodging/ILUSTRACION_HOTEL.png";
import Tarjeta from "../assets/images/Lodging/tarjeta_hotel.jpg";


function Lodging() {

  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

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

        <button className="boton-hospedaje" onClick={() => setMostrarTarjeta(true)}>
          Ver más
        </button>

        <div className="fotos-collage">
          <img  alt="Foto 1" className="foto-polaroid foto-1" />
          <img  alt="Foto 2" className="foto-polaroid foto-2" />
          <img  alt="Foto 3" className="foto-polaroid foto-3" />
          <img  alt="Foto 4" className="foto-polaroid foto-4" />
        </div>

      </div>

      {mostrarTarjeta && (
        <div className="modal-overlay" onClick={() => setMostrarTarjeta(false)}>
          <div className="card-hospedaje" onClick={(e) => e.stopPropagation()}>
            <button
              className="cerrar-modal"
              onClick={() => setMostrarTarjeta(false)}
            >
              ✕
            </button>

            <img
              src={Tarjeta}
              alt="Tarjeta de Hospedaje"
              className="card-imagen"
            />

            <div className="card-contenido-overlay">
              <h3 className="card-titulo">Hotel Mariott Hacienda Belén</h3>

              <p className="card-texto">
                Reservá llamando al <span className="subrayado">2298-0880</span>
                <br />
                o al WhatsApp <span className="subrayado">7051-0292</span>
                <br />
                Consulta por la tarifa social para la
                <br />
                boda <span className="subrayado">Quirós Castillo</span>
              </p>

              <button className="boton-reservar">
                Ir a reservar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default Lodging;