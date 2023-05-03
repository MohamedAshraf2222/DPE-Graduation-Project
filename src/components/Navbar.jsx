import React from "react";
import { Link } from "react-router-dom";

import { logo, vector } from "../assets";

const Navbar = () => {
  return (
    <div className="nav-wrapper d-flex j-between i-center">
      <div className="d-flex i-center j-center">
        <Link className="mr-2" to={"/"}>
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Link to={"/"}>
          <p className="fw-500 orange-color logo-text">
            Minimal <span className="pink-color">Shop</span>ping
          </p>
        </Link>
      </div>
      <img className="vector" src={vector} alt="vector" />
    </div>
  );
};

export default Navbar;
