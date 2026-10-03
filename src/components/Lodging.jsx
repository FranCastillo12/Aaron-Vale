import { useState } from "react";

import "../css/Lodging.css";
const Hotel = "/images/Lodging/ILUSTRACION_HOTEL.png";
const Tarjeta = "/images/Lodging/tarjeta_hotel.jpg";

import RevealItem from "../components/RevealItem";

function Lodging() {
  const [mostrarTarjeta, setMostrarTarjeta] = useState(false);

  return (
    <div className="invitacion-container">
      <RevealItem>
        <div className="hospedaje-titulo">
          <h2 className="hospedaje">Hospedaje</h2>
        </div>
      </RevealItem>

      <div className="invitacion-Hotel">
         <RevealItem delay={0.2}>
    <div className="hotel-bloque">
      <img src={Hotel} alt="Hotel" className="hoteel" />

      <button
        className="boton-hospedaje"
        onClick={() => setMostrarTarjeta(true)}
      >
        Ver más
      </button>
    </div>
  </RevealItem>

        <div className="fotos-collage">
          <RevealItem delay={0}>
            <img className="foto-polaroid foto-1" />
          </RevealItem>
          <RevealItem delay={0.15}>
            <img alt="Foto 2" className="foto-polaroid foto-2" />
          </RevealItem>
          <RevealItem delay={0.3}>
            <img alt="Foto 3" className="foto-polaroid foto-3" />
          </RevealItem>
          <RevealItem delay={0.45}>
            <img alt="Foto 4" className="foto-polaroid foto-4" />
          </RevealItem>
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
                <br />o al WhatsApp <span className="subrayado">7051-0292</span>
                <br />
                Consulta por la tarifa social para la
                <br />
                boda <span className="subrayado">Quirós Castillo</span>
              </p>

              <button className="boton-reservar">Ir a reservar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Lodging;
