import React from "react";
import "./OrganicFarming.css";
const OrganicFarming = () => {
  return (
    <div className="divContainer">
      <div className="farmingDescription">
        <h3>Our Grocery shop brings</h3>
        <h1>World Class</h1>
        <h1>Quality</h1>
        <h1>Products</h1>
        <br /> <br /> <br />
        <div className="btnContainer">
          <p>
            <button>EXPLORE OUR SERVICES</button>
          </p>
        </div>
      </div>
      <div className="farmingImg">
        <img
          style={{ width: "78%", height: " 80%" }}
          src="https://i.ibb.co/KqzMv8z/organic-summer-offer.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default OrganicFarming;
