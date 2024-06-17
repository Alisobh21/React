import "./Navbar.css";
import Logo from "../../assets/logo.png";
import Menu_icon from "../../assets/menu-icon.png";
import Logo1 from "../../assets/B00.png";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""} `}>
      {/* <img src={Logo} alt="Logo" className="logo " /> */}
      {/* <img src={Logo1} alt="Logo" className="owl-logo " /> */}

      <div className="owl-div">
        <img src={Logo1} alt="Logo" className="owl-logo " />
        <h2>Edusity</h2>
      </div>

      {/* With div and absolute  */}
      {/* <div></div>
      <div className={` ${sticky ? "dark-owl owl" : "owl"} `}></div> */}

      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about-us" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="reviews" smooth={true} offset={-260} duration={500}>
            Reviews
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth={true} offset={-260} duration={500}>
              Contact Us
            </Link>
          </button>
        </li>
      </ul>
      <img
        src={Menu_icon}
        alt=""
        className="menu-icon"
        onClick={() => setMobileMenu(!mobileMenu)}
      />
    </nav>
  );
};

export default Navbar;
