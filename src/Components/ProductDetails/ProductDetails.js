import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";

const ProductDetails = (props) => {
  const [singleItem, setSingleItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:7000/singleItem/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, [id]);

  const { _id, itemName, description, quantity, supplierName, price, imgURL } =
    singleItem;
  return (
    <div>
      <h2>
        Your Selected Product Item Is{" "}
        <span style={{ color: "red", fontWeight: "900" }}>{itemName}</span>
      </h2>
      <p>
        <img style={{ width: "45%" }} src={imgURL} alt="" />
      </p>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Available Amount: {quantity}</p>
      <p>Supplier Name: {supplierName}</p>
    </div>
  );
};

export default ProductDetails;
