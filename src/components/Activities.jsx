import "../css/Activities.css";
const Tuktuk = "/images/Activities/TUKTUK.png";
const Oli = "/images/Activities/FUN_OLI.png";
const Mesa = "/images/Activities/COMIDITA.png";
const Baile = "/images/Activities/Baile.png";
const Queque = "/images/Activities/QUEQUE.png";
const Flecha1 = "/images/Activities/LINEA_ILUSTRACION.png";
const Hotel = "/images/Activities/CEREMONIA_ILUSTRACION.png";
const Flecha2 = "/images/Activities/LINEA_ILUSTRACION02.png";
const Flecha3 = "/images/Activities/LINEA_ILUSTRACION03.png";
const Flecha4 = "/images/Activities/LINEA_ILUSTRACION04.png";
const Flecha5 = "/images/Activities/LINEA_ILUSTRACION05.png";
import RevealItem from "../components/RevealItem";

function Activities() {
  return (
    <div className="preparamos-container">
      <div className="preparamos-titulo">
        <h2 className="preparamos">Lo que preparamos</h2>
      </div>

      <div className="preparamos-timeline">
        {/* Paso 1: Tuktuk */}

        <RevealItem delay={0}>
          <div className="paso paso-icono-izq">
            <img
              src={Tuktuk}
              alt="Tuktuk"
              className="paso-icono icono-tuktuk"
            />
            <div className="paso-texto">
              <p className="paso-hora">1:00pm</p>
              <p className="paso-titulo">Tuktuk</p>
            </div>
            <img src={Flecha1} alt="" className="flecha flecha-1" />
          </div>
        </RevealItem>

        {/* Paso 2: Ceremonia */}

        <RevealItem delay={0.15}>
          <div className="paso paso-icono-der">
            <div className="paso-texto">
              <p className="paso-titulo">Ceremonia</p>
            </div>
            <img
              src={Hotel}
              alt="Ceremonia"
              className="paso-icono icono-hotel"
            />
            <img src={Flecha2} alt="" className="flecha flecha-2" />
          </div>
        </RevealItem>

        {/* Paso 3: Cocktail */}

        <RevealItem delay={0.3}>
          <div className="paso paso-icono-izq">
            <img src={Oli} alt="Cocktail" className="paso-icono icono-oli" />
            <div className="paso-texto">
              <p className="paso-titulo">Cocktail</p>
            </div>
            <img src={Flecha3} alt="" className="flecha flecha-3" />
          </div>
        </RevealItem>

        {/* Paso 4: Comida */}
        <RevealItem delay={0.45}>
          <div className="paso paso-icono-der">
            <div className="paso-texto">
              <p className="paso-titulo">Comida</p>
            </div>
            <img src={Mesa} alt="Comida" className="paso-icono icono-mesa" />
            <img src={Flecha4} alt="" className="flecha flecha-4" />
          </div>
        </RevealItem>

        {/* Paso 5: Baile */}
        <RevealItem delay={0.6}>
          <div className="paso paso-icono-izq">
            <img src={Baile} alt="Baile" className="paso-icono icono-baile" />
            <div className="paso-texto">
              <p className="paso-titulo">Baile</p>
            </div>
            <img src={Flecha5} alt="" className="flecha flecha-5" />
          </div>
        </RevealItem>

        {/* Paso 6: Queque y cierre (sin flecha, es el último) */}
        <RevealItem delay={0.75}>
          <div className="paso paso-icono-der">
            <div className="paso-texto">
              <p className="paso-hora">8:00pm</p>
              <p className="paso-titulo">Queque y cierre</p>
            </div>
            <img
              src={Queque}
              alt="Queque y cierre"
              className="paso-icono icono-queque"
            />
          </div>
        </RevealItem>
      </div>
    </div>
  );
}

export default Activities;
