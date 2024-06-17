import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_11 from "../../assets/New/5.jpeg";
import program_12 from "../../assets/New/14.jpeg";
import program_13 from "../../assets/mag2.jpeg";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_11} alt="Progam" />
        <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_12} alt="Progam" />
        <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_13} alt="Progam" />
        <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;
