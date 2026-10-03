import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SobreFondo = "/images/SOBREDERECHO.png"; 
const SobreSolapa = "/images/SOBREIZQ.png";

import audio from "../audioManager";
import "../css/Home.css";


function Home() {
    const [abierto, setAbierto] = useState(false);
    const navigate = useNavigate();

    

     const handleClick = () => {
  if (abierto) return;
  setAbierto(true);
  audio.play().catch(() => {});
  setTimeout(() => {
    navigate("/Main-Content");
  }, 1150); // coincide con la duración de la transición (1.1s) + un pelín de margen
};




return (
    <div className={`home-container ${abierto ? "fading" : ""}`}>
      <div
        className={`envelope ${abierto ? "open" : ""}`}
        onClick={handleClick}
      >
        <img src={SobreSolapa} alt="" className="body-layer" />
        <img src={SobreFondo} alt="" className="flap-layer" />
      </div>

      {!abierto && <p style={{ textAlign: "center" }} className="hint">Toca el sobre para abrir</p>}
    </div>
  );
}

export default Home;