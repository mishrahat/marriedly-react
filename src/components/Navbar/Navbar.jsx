import React from "react";
import { images } from "../../constants";

import "./Navbar.css";

const Navbar = () => (
  <div className="app__navbar">
    <div className="app__navbar-logo">
      <img className="app__navbar-logo-img" src={images.logo} alt="" />
    </div>
    <div className="app__navbar-items">
      <ul className="app__navbar-items_list">
        <li className="app__navbar-item">Services</li>
        <li className="app__navbar-item">Works</li>
        <li className="app__navbar-item">About Us</li>
        <li className="app__navbar-item">Blog</li>
      </ul>
    </div>
    <div className="app__navbar-button">
      <button>Contact Us</button>
    </div>
  </div>
);

export default Navbar;
