import "../css/Invitation.css";
const monograma = "/images/assets/monogramaA&V.png";
const NombreYFecha = "/images/assets/aaron&vale_nombrefecha.PNG";
const Noscasamos = "/images/assets/NOSACOMPANAS.png";
// import Hotel from "../assets/ILUSTRACION_HOTEL.PNG";
const Corazon = "/images/assets/ILUSTRACION_CORAZON.PNG";
import CountDown from "../components/CountDown";
import CouplePhoto from "../components/CouplePhoto";
import Itinerary from "../components/Itinerary";
import Details from "../components/Details";




function Invitacion() {



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


         {/* Cambia la fecha por la real de tu boda */}
        <CountDown fecha="2027-01-16T13:00:00" />
        <CouplePhoto />
<Itinerary />
<Details />
      </div>
    </div>
  );
}

export default Invitacion;
