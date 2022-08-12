import React from "react";
import { Link } from "react-router-dom";
import "./ProductItemCompo.css";
const ProductItemCompo = ({ productItem }) => {
  const { _id, imgURL, itemName, price, quantity, supplierName, description } =
    productItem;
  //   console.log(productItem);
  return (
    <div className="ProductContainer">
      <p>
        <img style={{ width: "50%" }} src={imgURL} alt="" />
      </p>
      <h2> {itemName}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
      <Link to={`/inventory/${_id}`}>
        <button>Manage Item</button>
      </Link>
      {/* <p>Available Amount: {quantity}</p>
      <p>Supplier Name: {supplierName}</p> */}
    </div>
  );
};

export default ProductItemCompo;
