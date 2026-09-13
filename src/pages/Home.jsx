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
    if (abierto) return; // evita doble click mientras anima
    setAbierto(true);
audio.play().catch(() => {});
    // Espera a que termine la animación antes de cambiar de página
    setTimeout(() => {
      navigate("/Main-Content"); // Cambia a la ruta de tu página de invitación
    }, 2500); // debe ser >= tiempo de la animación CSS (.95s) + un margen
  };





  return (
    <div className="home-container">
      <div
        className={`envelope ${abierto ? "open" : ""}`}
        onClick={handleClick}
      >
        <img src={SobreSolapa} alt="" className="body-layer" />
        <img src={SobreFondo} alt="" className="flap-layer" />
      </div>

      {!abierto && <p className="hint">Toca el sobre para abrir</p>}
    </div>
  );
}

export default Home;