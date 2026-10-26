import "../css/CouplePhoto.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const CouplePhoto1 = "/images/AaronVale/CouplePhoto.jpeg";


function CouplePhoto() {
  const { ref, visible } = useScrollReveal();

  return (
    <div className="CouplePhoto-container">
      <div
        ref={ref}
        className={`CouplePhoto-wrap ${visible ? "is-visible" : ""}`}
      >
        <img src={CouplePhoto1} alt="CouplePhoto" className="CouplePhoto" />
      </div>
    </div>
  );
}

export default CouplePhoto;