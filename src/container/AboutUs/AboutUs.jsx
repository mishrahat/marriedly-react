import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div className="app__wrapper section__padding">
    <div className="app__wrapper_img-reverse">
      <img src={images.aboutImg} alt="about img" />
    </div>
    <div className="app__wrapper_info" style={{ marginLeft: "1rem" }}>
      <div>
        <SubHeading title="About" />
        <p className="headtext__primary">Your wedding is our priority</p>
      </div>
      <p className="p__poppins">
        Wedding Organizer is a service that helps the bride and groom in terms
        of the concept of the wedding event, making a budget plan, recommending
        the best vendors for the wedding. coordinating all parties involved at
        the wedding.
      </p>
      <button className="custom__button">Book Now</button>
    </div>
  </div>
);

export default AboutUs;
