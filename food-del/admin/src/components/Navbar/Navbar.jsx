import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img alt="Logo" src={assets.logo} className="logo" />
      <img src={assets.ali} alt="Profile" className="profile" />
    </div>
  );
};

export default Navbar;
