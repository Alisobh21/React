import React, { useContext } from "react";
import "./Navbar.css";
import logoc from "../../assets/cry.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../context/CoinContext.jsx";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      {/* <img src={logo} alt="Logo" className="logo" /> */}

      <Link to="/" className="logo-div">
        <img src={logoc} alt="Logo" className="logo1" />
        <h3>Cryptoplace</h3>
      </Link>

      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Feautres</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign Up <img src={arrow_icon} alt="Logo" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
