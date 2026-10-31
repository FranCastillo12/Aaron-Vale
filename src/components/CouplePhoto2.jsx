import "../css/CouplePhoto.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CouplePhoto= "/images/AaronVale/Slider3.jpeg";


function CouplePhoto2() {
  const { ref, visible } = useScrollReveal();

  return (
    <div className="CouplePhoto-container">
      <div
        ref={ref}
        className={`CouplePhoto-wrap ${visible ? "is-visible" : ""}`}
      >
        <img src={CouplePhoto} alt="CouplePhoto" className="CouplePhoto" />
      </div>
    </div>
  );
}

export default CouplePhoto2;