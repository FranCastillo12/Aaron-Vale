import { useState } from "react";
import "../css/Itinerary.css";

const Tarjeta = "/images/itinerary/Tarjeta.png";
const Ceremonia = "/images/itinerary/CEREMONIA.png";
const Recepcion = "/images/itinerary/RECEPCION.png";
import { useScrollReveal } from "../hooks/useScrollReveal";
import RevealItem from "../components/RevealItem";
function Itinerary() {
  const { ref: tituloRef, visible: tituloVisible } = useScrollReveal();
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);

  return (
    <section className="itinerary">
      <div
        ref={tituloRef}
        className={`itinerary-titulo ${tituloVisible ? "is-visible" : ""}`}
      >
        <h2 className="Details">Itinerario</h2>
      </div>

      <div className="itinerary-row">
        {/* ================= TARJETA 1: CEREMONIA ================= */}
        <div className="reception-container">
          <div
            className={`flip-card ${flipped1 ? "is-flipped" : ""}`}
            onClick={() => setFlipped1((f) => !f)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setFlipped1((f) => !f)
            }
            role="button"
            tabIndex={0}
            aria-label="Ceremonia. Toca para ver más información"
          >
            <div className="flip-inner">
              {/* FRENTE */}
              <div className="flip-face flip-front">
                <img src={Tarjeta} alt="" className="card-bg" />
                <div className="card-content">
                  <h2 className="card-title">Ceremonia</h2>
                  <img
                    src={Ceremonia}
                    alt=""
                    className="card-illustration"
                    style={{ "--img-width": "110%", "--img-top": "14%" }}
                  />
                </div>
              </div>

              {/* REVERSO */}
              <div className="flip-face flip-back">
                <img src={Tarjeta} alt="" className="card-bg" />
                <div className="card-content">
                  <h2 className="card-title">Ceremonia</h2>
                  <p className="card-info">1:00 pm</p>
                  <p className="card-info">Hotel Marriott</p>
                  <p className="card-info">Hacienda Belén</p>

                  <a
                    className="card-button"
                    href="https://maps.app.goo.gl/NKnF6urh4EkAgnz46"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Ir a ubicación
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= TARJETA 2: RECEPCIÓN ================= */}
        <div className="reception-container">
          <div
            className={`flip-card ${flipped2 ? "is-flipped" : ""}`}
            onClick={() => setFlipped2((f) => !f)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setFlipped2((f) => !f)
            }
            role="button"
            tabIndex={0}
            aria-label="Recepción. Toca para ver más información"
          >
            <div className="flip-inner">
              {/* FRENTE */}
              <div className="flip-face flip-front">
                <img src={Tarjeta} alt="" className="card-bg" />
                <div className="card-content">
                  <h2 className="card-title">Recepción</h2>
                  <img
                    src={Recepcion}
                    alt=""
                    className="card-illustration-reception"
                    style={{ "--img-width": "80%", "--img-top": "15%" }}
                  />
                </div>
              </div>

              {/* REVERSO */}
              <div className="flip-face flip-back">
                <img src={Tarjeta} alt="" className="card-bg" />
                <div className="card-content">
                  <h2 className="card-title">Recepción</h2>
                  <p className="card-info">Al concluir la ceremonia</p>
                  <p className="card-info">
                    Cocktail, comida y fiesta en el <br /> mismo lugar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Itinerary;
