import React from "react";

const SingleInventory = ({ allInventories }) => {
  const { imgURL, itemName, description, price } = allInventories;
  return (
    <div>
      <p>
        <img style={{ width: "50%" }} src={imgURL} alt="" />
      </p>
      <h2> {itemName}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
    </div>
  );
};

export default SingleInventory;
