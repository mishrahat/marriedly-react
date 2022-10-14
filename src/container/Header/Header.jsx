import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import { images } from "../../constants";

import "./Header.css";

const Header = () => (
  <div className="app__wrapper app__header section__padding">
    <div className="app__wrapper_info">
      <div>
        <SubHeading title="CELEBRATE OUR WEDDING" />
        <p className="headtext__hero">The Wedding of Your Dreams</p>
      </div>
      <p className="p__poppins" style={{ color: "#FFF", fontWeight: "100" }}>
        A Profession that provides services to assist in the preparation and
        execution of marriages.ensure that the implementation of the wedding
        party runs successfully.
      </p>
      <div className="app__header-buttons">
        <button>Book Now</button>
        <button>Our Story</button>
      </div>
    </div>
    <div className="app__header_img">
      <img
        className="app__header-image"
        src={images.headerImg}
        alt="header image"
      />
    </div>
  </div>
);

export default Header;
