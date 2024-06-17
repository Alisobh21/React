import React from "react";
import Weather from "./Components/Weather";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  return (
    <div className="app">
      <Weather />
    </div>
  );
};

export default App;
