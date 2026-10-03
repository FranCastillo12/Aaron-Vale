import "../css/Gifts.css";
import RevealItem from "../components/RevealItem";

const Regalos = "/images/Attendance/MESAREGALOS_detalle.png";   // cambia por la ruta real de tu imagen

function Gifts() {
  return (
    <div className="gifts-container">
      <RevealItem>
        <h2 className="gifts-titulo">Mesa de regalos</h2>
      </RevealItem>

      <RevealItem delay={0.2}>
        <img
          src={Regalos}
          alt="Información de la mesa de regalos"
          className="gifts-imagen"
        />
      </RevealItem>
    </div>
  );
}

export default Gifts;