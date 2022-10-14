import React from "react";

const SubHeading = ({ title }) => (
  <div>
    <p
      className="p__poppins"
      style={{
        color: "#E0A672",
        textTransform: "uppercase",
      }}
    >
      {title}
    </p>
  </div>
);

export default SubHeading;
