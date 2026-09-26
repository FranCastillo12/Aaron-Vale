import "../css/CouplePhoto.css";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Olivia = "/images/Olivia.jpg";

function CouplePhoto() {
  const { ref, visible } = useScrollReveal();

  return (
    <div className="CouplePhoto-container">
      <div
        ref={ref}
        className={`CouplePhoto-wrap ${visible ? "is-visible" : ""}`}
      >
        <img src={Olivia} alt="CouplePhoto" className="CouplePhoto" />
      </div>
    </div>
  );
}

export default CouplePhoto;