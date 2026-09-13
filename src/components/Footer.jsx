import "../css/Footer.css";

const Monograma = "/images/monogramaAV.png";
const NombreFecha = "/images/Invitation/aaronvale_nombrefecha.png";

function Footer() {
  return (
    <footer className="footer-container">
      <img src={Monograma} alt="" className="footer-monograma" />
      <img src={NombreFecha} alt="Aarón & Vale — 16.01.27" className="footer-nombrefecha" />
    </footer>
  );
}

export default Footer;