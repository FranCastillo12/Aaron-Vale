import "../css/Invitation.css";
const monograma = "/images/monogramaAV.png";
const NombreYFecha = "/images/Invitation/aaronvale_nombrefecha.png";
const Noscasamos = "/images/NOSACOMPANAS.png";
const Hotel = "/images/Lodging/ILUSTRACION_HOTEL.png";
const Corazon = "/images/Invitation/ILUSTRACION_CORAZON.png";
import Countdown from "./CountDown";

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

        <div className="acompanas-text">
          <p>¿Nos acompañarás?</p>
        </div>

        <div className="invitacion-Hotel">
          <img src={Hotel} alt="Hotel" className="hotel" />
        </div>
        <div className="invitacion-text">
          <p>
            Acompáñenos a celebrar juntos el <br /> siguiente capitulo de
            nuestra historia.
          </p>
        </div>

        <div className="invitacion-Corazon">
          <img src={Corazon} alt="Corazón" className="corazon" />
        </div>

         <Countdown fecha="2027-01-16T00:00:00" />
      </div>
    </div>
  );
}

export default Hero;
