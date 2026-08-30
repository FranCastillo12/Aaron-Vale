import "../css/Invitation.css";
import monograma from "../assets/monogramaA&V.png";
import NombreYFecha from "../assets/aaron&vale_nombrefecha.PNG";
import Noscasamos from "../assets/NOSACOMPANAS.png";
import Hotel from "../assets/images/Lodging/ILUSTRACION_HOTEL.PNG";
import Corazon from "../assets/ILUSTRACION_CORAZON.PNG";



function Hero() {



  return (
    <div className="invitacion-container">
      <div className="invitacion-card">
        <div className="invitacion-monograma">
          <img src={monograma} alt="Monograma" className="monograma" />
        </div>

        <div className="invitacion-nombre-fecha">
          <img
            src={NombreYFecha}
            alt="Nombre y Fecha"
            className="nombre-fecha"
          />
        </div>

        <div className="invitacion-Noscasamos">
          <img src={Noscasamos} alt="Nos Casamos" className="noscasamos" />
        </div>

        <div className="invitacion-Hotel">
          <img src={Hotel} alt="Hotel" className="hotel" />
        </div>
        <div className="invitacion-text">
          <p> 
            Acompáñenos a celebrar juntos el <br/> siguiente capitulo de nuestra historia.
          </p>
        </div>

        
        <div className="invitacion-Corazon">
          <img src={Corazon} alt="Corazón" className="corazon" />
        </div>



      </div>
    </div>
  );
}

export default Hero;
