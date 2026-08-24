import { useState } from "react";
import "../css/Details.css";
import Detalles from "../assets/LETRAS_DETALLES.png";
import DressCode1 from "../assets/TARJETA02_DRESSCODE.png";
import DressCode2 from "../assets/TARJETA02_FORMAL.png";
import Notas1 from "../assets/TARJETA02_NOTAS.png";
import Notas2 from "../assets/TARJETA02_NOTASSEGUNDACARA.PNG";
import Velada1 from "../assets/TARJETA02_VELADAADULTOS.PNG";
import Velada2 from "../assets/TARJETA02_VELADA02.PNG";

function Details() {
  const [VolteaDressCode, setVolteaDressCode] = useState(false);
  const [VolteaNotas, setVolteaNotas] = useState(false);
  const [VolteaVelada, setVolteaVelada] = useState(false);

  return (
    <div className="Details-container">
      <div className="Details-card">
        <div className="Details-titulo">
          <img src={Detalles} alt="Detalles" className="Details" />
        </div>

        <div className="tarjetas-wrapper">
          <div className="tarjeta-container">
            <div
              className={`tarjeta ${VolteaDressCode ? "volteada" : ""}`}
              onClick={() => setVolteaDressCode(!VolteaDressCode)}
            >
              <div className="tarjeta-cara tarjeta-frente">
                <img src={DressCode1} alt="Dress Code" />
              </div>
              <div className="tarjeta-cara tarjeta-reverso">
                <img src={DressCode2} alt="Detalles del dress code" />
              </div>
            </div>
          </div>

          <div className="tarjeta-container">
            <div
              className={`tarjeta ${VolteaNotas ? "volteada" : ""}`}
              onClick={() => setVolteaNotas(!VolteaNotas)}
            >
              <div className="tarjeta-cara tarjeta-frente">
                <img src={Notas1} alt="Notas" />
              </div>
              <div className="tarjeta-cara tarjeta-reverso">
                <img src={Notas2} alt="Detalles de las notas" />
              </div>
            </div>
          </div>

          <div className="tarjeta-container">
            <div
              className={`tarjeta ${VolteaVelada ? "volteada" : ""}`}
              onClick={() => setVolteaVelada(!VolteaVelada)}
            >
              <div className="tarjeta-cara tarjeta-frente">
                <img src={Velada1} alt="Velada" />
              </div>
              <div className="tarjeta-cara tarjeta-reverso">
                <img src={Velada2} alt="Detalles de la velada" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;