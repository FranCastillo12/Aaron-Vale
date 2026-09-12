import "../css/Activities.css";
import Tuktuk from "../../public/images/Activities/tuktuk.png";
import Oli from "../../public/images/Activities/fun_oli.png";
import Mesa from "../../public/images/Activities/comidita.png";
import Baile from "../../public/images/Activities/baile.png";
import Queque from "../../public/images/Activities/Queque.png";
import Flecha1 from "../../public/images/Activities/LINEA_ILUSTRACION.png";
import Hotel from "../../public/images/Activities/Ilustracion_Hotel.png";
import Flecha2 from "../../public/images/Activities/LINEA_ILUSTRACION02.png";
import Flecha3 from "../../public/images/Activities/LINEA_ILUSTRACION03.png";
import Flecha4 from "../../public/images/Activities/LINEA_ILUSTRACION04.png";
import Flecha5 from "../../public/images/Activities/LINEA_ILUSTRACION05.png";



function Activities() {

return (

<div className="preparamos-container">
      <h2 className="preparamos-titulo">Lo que preparamos</h2>

      <div className="preparamos-timeline">
  {/* Paso 1: Tuktuk */}
  <div className="paso paso-icono-izq">
    <img src={Tuktuk} alt="Tuktuk" className="paso-icono" />
    <div className="paso-texto">
      <p className="paso-hora">1:00pm</p>
      <p className="paso-titulo">Tuktuk</p>
    </div>
    <img src={Flecha1} alt="" className="flecha flecha-1" />
  </div>

  {/* Paso 2: Ceremonia */}
  <div className="paso paso-icono-der">
    <div className="paso-texto">
      <p className="paso-titulo">Ceremonia</p>
    </div>
    <img src={Hotel} alt="Ceremonia" className="paso-icono" />
    <img src={Flecha2} alt="" className="flecha flecha-2" />
  </div>

  {/* Paso 3: Cocktail */}
  <div className="paso paso-icono-izq">
    <img src={Oli} alt="Cocktail" className="paso-icono" />
    <div className="paso-texto">
      <p className="paso-titulo">Cocktail</p>
    </div>
    <img src={Flecha3} alt="" className="flecha flecha-3" />
  </div>

  {/* Paso 4: Comida */}
  <div className="paso paso-icono-der">
    <div className="paso-texto">
      <p className="paso-titulo">Comida</p>
    </div>
    <img src={Mesa} alt="Comida" className="paso-icono" />
    <img src={Flecha4} alt="" className="flecha flecha-4" />
  </div>

  {/* Paso 5: Baile */}
  <div className="paso paso-icono-izq">
    <img src={Baile} alt="Baile" className="paso-icono" />
    <div className="paso-texto">
      <p className="paso-titulo">Baile</p>
    </div>
    <img src={Flecha5} alt="" className="flecha flecha-5" />
  </div>

  {/* Paso 6: Queque y cierre (sin flecha, es el último) */}
  <div className="paso paso-icono-der">
    <div className="paso-texto">
      <p className="paso-hora">8:00pm</p>
      <p className="paso-titulo">Queque y cierre</p>
    </div>
    <img src={Queque} alt="Queque y cierre" className="paso-icono" />
  </div>
</div>
    </div>




);
}

export default Activities;
