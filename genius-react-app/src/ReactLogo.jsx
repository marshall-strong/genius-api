import React from "react";
import logo from "./logo.svg";
import "./ReactLogo.css";

const ReactLogo = () => {
  return (
    <div className="ReactLogo">
      <img src={logo} className="ReactLogo-logo" alt="logo" />
    </div>
  );
};

export default ReactLogo;
