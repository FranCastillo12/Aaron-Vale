import "../css/CouplePhoto.css";
const Olivia = "/images/Olivia.jpg";


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
