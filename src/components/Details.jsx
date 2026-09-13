import { useState } from "react";
import "../css/Details.css";

const DressCode1 = "/images/TARJETA02_DRESSCODE.png";
const DressCode2 = "/images/TARJETA02_FORMAL.png";
const Notas1 = "/images/TARJETA02_NOTAS.png";
const Notas2 = "/images/TARJETA02_NOTASSEGUNDACARA.PNG";
const Velada1 = "/images/TARJETA02_VELADAADULTOS.PNG";
const Velada2 = "/images/TARJETA02_VELADA02.PNG";



const tarjetas = [
  { id: "Dresscode", notas: "/images/Details/TARJETA02_DRESSCODE.png", info: "/images/Details/TARJETA02_FORMAL.png" },
  { id: "gift",     notas: "/images/Details/TARJETA02_NOTAS.png", info: "/images/Details/TARJETA02_NOTASSEGUNDACARA.png" },
  { id: "child",      notas: "/images/Details/TARJETA02_VELADAADULTOS.png", info: "/images/Details/TARJETA02_VELADA02.png" },
];




function Details() {

  const [flippedId, setFlippedId] = useState(null);

return (
    <div className="Details-container">
      <div className="Details-card">
        <div className="Details-titulo">
          <h2 className="Details">Detalles</h2>
        </div>

        <div className="flipcard-grid">
          {tarjetas.map((t) => (
            <div className="flipcard-wrap" key={t.id}>
              <div
                className={`flipcard ${flippedId === t.id ? "is-flipped" : ""}`}
                onMouseEnter={() => setFlippedId(t.id)}
                onMouseLeave={() => setFlippedId(null)}
                onClick={() =>
                  setFlippedId((current) => (current === t.id ? null : t.id))
                }
              >
                <div className="flipcard-face flipcard-front">
                  <img src={t.notas} alt="Notas" />
                </div>
                <div className="flipcard-face flipcard-back">
                  <img src={t.info} alt="Información" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Details;