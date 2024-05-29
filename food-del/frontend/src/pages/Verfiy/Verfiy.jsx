/* eslint-disable no-unused-vars */
import { useContext, useEffect } from "react";
import "./Verfiy.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
const Verfiy = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const navgiate = useNavigate();
  const { url } = useContext(StoreContext);

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verfiy", {
      success,
      orderId,
    });
    console.log("Response", response.data);
    if (response.data.succes) {
      navgiate("/myorders");
    } else {
      navgiate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="spinner"></div>
    </div>
  );
};

export default Verfiy;
