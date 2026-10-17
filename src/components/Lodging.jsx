import { useState } from "react";

import "../css/Lodging.css";
const Hotel = "/images/Lodging/ILUSTRACION_HOTEL.png";
const Tarjeta = "/images/Lodging/tarjeta_hotel.jpg";

const image1 = "/images/AaronVale/image1.jpeg";
const image2 = "/images/AaronVale/image2.jpeg";
const image3 = "/images/AaronVale/image3.jpeg";
// FALTABA: la foto 4 no tenía imagen. Ajusta el nombre al de tu archivo real.
// Si no tienes una cuarta foto, borra el bloque "foto-4" de más abajo y esta línea.
const image4 = "/images/AaronVale/image4.jpeg";

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

        {/* Cada foto va en su propio "foto-slot" (posición y rotación);
            el RevealItem queda adentro solo para la animación */}
        <div className="fotos-collage">
          <div className="foto-slot foto-1">
            <RevealItem delay={0}>
              <img src={image3} alt="Foto 1" className="foto-polaroid" />
            </RevealItem>
          </div>

          <div className="foto-slot foto-2">
            <RevealItem delay={0.15}>
              <img src={image1} alt="Foto 2" className="foto-polaroid" />
            </RevealItem>
          </div>

          <div className="foto-slot foto-3">
            <RevealItem delay={0.3}>
              <img src={image2} alt="Foto 3" className="foto-polaroid" />
            </RevealItem>
          </div>

          <div className="foto-slot foto-4">
            <RevealItem delay={0.45}>
              <img src={image4} alt="Foto 4" className="foto-polaroid" />
            </RevealItem>
          </div>
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
                Reservá llamando al{" "}
                <a href="tel:+50622980880" className="subrayado">
                  2298-0880
                </a>
                <br />o al WhatsApp{" "}
                <a
                  href="https://wa.me/50670510292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="subrayado"
                >
                  7051-0292
                </a>
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
