import "./Campus.css";
import gallery_5 from "../../assets/g1.jpeg";
import gallery_44 from "../../assets/New/gg6.jpeg";
import gallery_11 from "../../assets/New/gg2.jpeg";
import gallery_1 from "../../assets/gallery-1.png";
import gallery_2 from "../../assets/gallery-2.png";
import gallery_3 from "../../assets/gallery-3.png";
import gallery_4 from "../../assets/gallery-4.png";
import white_arrow from "../../assets/white-arrow.png";
const Campus = () => {
  return (
    <div className="campus" id="campus">
      <div className="gallery">
        <img src={gallery_11} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_44} alt="" />
      </div>
      <button className="btn dark-btn">
        See More <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Campus;
