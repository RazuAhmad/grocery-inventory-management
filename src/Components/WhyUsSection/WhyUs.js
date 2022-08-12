import React from "react";
import "./WhyUs.css";
const WhyUs = () => {
  return (
    <div className="whyUsContainer">
      <div className="whyUsImg">
        <img src="https://i.ibb.co/GM1d1rR/why-us-grocery-image.png" alt="" />
      </div>
      <div className="whyUsDescription">
        <h1>
          <span style={{ color: "yellow" }}>Why Our Grocery</span>
        </h1>
        <h1>
          <span style={{ color: "yellow" }}>Market?</span>
        </h1>{" "}
        <br />
        <p style={{ fontSize: "20px" }}>
          We shorten the time between the farm and your table. Our motto is to
          deliver the local food which is better, fresher and tastier. The
          wholesale prices that farmers get for their products are low, often
          near the cost of production. It is an investment in the future. By
          supporting local farmers today, we are helping to ensure that there
          will be farms in our community tomorrow!
        </p>{" "}
        <br />
        <p style={{ fontSize: "20px" }}>
          We have 6 points quality control system that ensures that each piece
          of fruits and vegetables should match Grade A Quality. Our Logistics
          chain ensure each fruits and vegetables reaches your doorsteps within
          24 hours of plucking and harvesting
        </p>
        <br />
        <button>See All Items</button>
      </div>
    </div>
  );
};

export default WhyUs;
