import { useState } from "react";
import "../css/Details.css";
import { useScrollReveal } from "../hooks/useScrollReveal";
import RevealItem from "../components/RevealItem";

const tarjetas = [
  {
    id: "Dresscode",
    notas: "/images/Details/TARJETA02_DRESSCODE.png",
    info: "/images/Details/TARJETA02_FORMAL.png",
  },
  {
    id: "gift",
    notas: "/images/Details/TARJETA02_NOTAS.png",
    info: "/images/Details/TARJETA02_NOTASSEGUNDACARA.png",
  },
  {
    id: "child",
    notas: "/images/Details/TARJETA02_VELADAADULTOS.png",
    info: "/images/Details/TARJETA02_VELADA02.png",
  },
];

function Details() {
  const { ref: tituloRef, visible: tituloVisible } = useScrollReveal();

  // Un objeto con el estado de cada tarjeta: { Dresscode: true, gift: false, ... }
  const [flipped, setFlipped] = useState({});

  const toggle = (id) =>
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="Details-container">
      <div className="Details-card">
        <div
          ref={tituloRef}
          className={`Details-titulo ${tituloVisible ? "is-visible" : ""}`}
        >
          <h2 className="Details">Detalles</h2>
        </div>

        <div className="flipcard-grid">
          {tarjetas.map((t, index) => (
            <RevealItem key={t.id} delay={index * 0.15}>
              <div className="flipcard-wrap">
                <div
                  className={`flipcard ${flipped[t.id] ? "is-flipped" : ""}`}
                  onClick={() => toggle(t.id)}
                  onKeyDown={(e) =>
                    (e.key === "Enter" || e.key === " ") && toggle(t.id)
                  }
                  role="button"
                  tabIndex={0}
                  aria-label="Toca para ver más información"
                >
                  <div className="flipcard-face flipcard-front">
                    <img src={t.notas} alt="" />
                  </div>
                  <div className="flipcard-face flipcard-back">
                    <img src={t.info} alt="" />
                  </div>
                </div>
              </div>
            </RevealItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;