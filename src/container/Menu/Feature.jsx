import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

import "./Feature.css";

const Feature = () => (
  <div>
    <div
      style={{ textAlign: "center", paddingInline: "30rem", marginTop: "8rem" }}
    >
      <SubHeading title="Servises" />
      <p className="headtext__primary">
        Everything you need for perfect wedding
      </p>
    </div>
    <div className="app__wrapper app__features section__padding">
      <div className="app__feature">
        <img src={images.featureOne} alt="" />
        <h4 className="app__feature-name">Wedding</h4>
        <div></div>
        <p className="p__poppins">
          Preparing for something as big as a wedding obviously takes a lot of
          effort and thought.
        </p>
        <a className="button-link" href="">
          Learn More
        </a>
      </div>
      <div className="app__feature">
        <img src={images.featureTwo} alt="" />
        <h4 className="app__feature-name">Event Design</h4>
        <div></div>
        <p className="p__poppins">
          Preparing for something as big as a wedding obviously takes a lot of
          effort and thought.
        </p>
        <a className="button-link" href="">
          Learn More
        </a>
      </div>
      <div className="app__feature">
        <img src={images.featureThree} alt="" />
        <h4 className="app__feature-name">Photography</h4>
        <div></div>
        <p className="p__poppins">
          Preparing for something as big as a wedding obviously takes a lot of
          effort and thought.
        </p>
        <a className="button-link" href="">
          Learn More
        </a>
      </div>
    </div>
  </div>
);

export default Feature;
