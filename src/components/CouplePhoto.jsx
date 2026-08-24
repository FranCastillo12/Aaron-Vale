import "../css/CouplePhoto.css";
import Olivia from "../assets/Olivia.jpg";


function CouplePhoto() {


  return (
    <div className="CouplePhoto-container">
      
        <div className="CouplePhoto">
          <img
            src={Olivia}
            alt="CouplePhoto"
            className="CouplePhoto"
          />
        </div>

    
    </div>
  );
}

export default CouplePhoto;
