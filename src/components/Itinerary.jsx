import { useState } from "react";
import "../css/Itinerary.css";
const Itinerario = "/images/LETRAS_ITINERARIOS.png";
const Ceremonia_Ilustracion = "/images/itinerary/CEREMONIA_ILUSTRACION1.png";
const Recepcion01 = "/images/TARJETA01_RECEPCION01.png";

function Itinerary() {
  const [VolteaCermonia, setVolteaCermonia] = useState(false);
  const [VolteaRecepcion, setVolteaRecepcion] = useState(false);

  return (
    <div className="itinerario-container">
      <div className="itinerario-titulo">
        <img src={Itinerario} alt="Itinerario" className="Itinerario" />
      </div>

      <div className="tarjetas-wrapper">
        {/* Tarjeta Ceremonia con flip */}
        <div
          className="flip-container"
          onClick={() => setVolteaCermonia(!VolteaCermonia)}
        >
          <div className={`flip-card ${VolteaCermonia ? "volteada" : ""}`}>
            {/* Cara frontal */}
            <div className="cara cara-frente">
              <div className="tarjeta-contenedor">
                <h1 className="texto-tarjeta">Ceremonia</h1>
                <img
                  src={Ceremonia_Ilustracion}
                  alt="Ilustración ceremonia"
                  className="ilustracion"
                />
              </div>
            </div>

            {/* Cara trasera */}
            <div className="cara cara-atras">
              <div className="tarjeta-contenedor">
                <div className="contenido-atras">
                  <h1 className="texto-tarjeta-atras">Ceremonia</h1>
                  <p className="info-atras">1:00pm</p>
                  <p className="info-atras">Hotel Marriot</p>
                  <p className="info-atras">Hacienda Belén</p>

                  <button className="boton-ubicacion">Ir a ubicación</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tarjeta Recepción con flip */}
        <div
          className="flip-container"
          onClick={() => setVolteaRecepcion(!VolteaRecepcion)}
        >
          <div className={`flip-card ${VolteaRecepcion ? "volteada" : ""}`}>
            {/* Cara frontal */}
            <div className="cara cara-frente">
              <div className="tarjeta-contenedor">
                <h1 className="texto-tarjeta">Recepción</h1>
                <img
                  src={Recepcion01}
                  alt="Ilustración recepción"
                  className="ilustracion"
                />
              </div>
            </div>

            {/* Cara trasera */}
            <div className="cara cara-atras">
              <div className="tarjeta-contenedor">
                <div className="contenido-atras">
                  <h1 className="texto-tarjeta-atras">Recepción</h1>
                  <p className="info-atras">Al concluir la ceremonia.</p>
                  <p style={{ textAlign: "center" }} className="info-atras">
                    Cocktail, comida y fiesta en el <br /> mismo lugar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itinerary;