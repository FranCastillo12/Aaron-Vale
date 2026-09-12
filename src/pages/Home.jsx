import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sobreCerrado from "../assets/images/SOBREDERECHO.png"; 
import sobreAbierto from "../assets/images/SOBREIZQ.PNG";
import "../css/home.css";


function Home() {
    const [abierto, setAbierto] = useState(false);
    const navigate = useNavigate();

      const handleClick = () => {
    setAbierto(true);

    // Espera a que termine la animación antes de cambiar de página
    setTimeout(() => {
      navigate("/Main-Content"); // Cambia a la ruta de tu página de invitación
    }, 1500); // 1500ms = 1.5 segundos, ajusta según tu animación
  };



  return (
    <div className="home-container">
        <img
        src={abierto ? sobreAbierto : sobreCerrado}
        alt="Sobre de invitación"
        className={`sobre ${abierto ? "sobre-abierto" : ""}`}
        onClick={!abierto ? handleClick : undefined}
      />


     
    </div>
  );
}

export default Home;