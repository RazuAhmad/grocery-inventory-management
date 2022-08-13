import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
// import sweetAlert from "sweetalert";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetails = (props) => {
  const [singleItem, setSingleItem] = useState({});
  // const [updatedQuantity, setUpdatedQuantity] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:7000/singleItem/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleItem(data));
  }, [id]);

  const { _id, itemName, description, quantity, supplierName, price, imgURL } =
    singleItem;

  const handleQuantity = (e) => {
    const givenQuantity = e.target?.value;

    const updatedDetails = {
      itemName: singleItem.itemName,
      description: singleItem.description,
      price: singleItem.price,
      quantity: parseFloat(
        parseInt(singleItem?.quantity) + parseInt(givenQuantity)
      ),
      supplierName: singleItem.supplierName,
      imgURL: singleItem.imgURL,
    };
    setSingleItem(updatedDetails);
  };

  const handleDelivered = () => {
    const updatedDetails = {
      itemName: singleItem.itemName,
      description: singleItem.description,
      price: singleItem.price,
      quantity: parseInt(singleItem.quantity) - 1,
      supplierName: singleItem.supplierName,
      imgURL: singleItem.imgURL,
    };
    setSingleItem(updatedDetails);

    fetch(`http://localhost:7000/singleItem/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(singleItem),
    }).then((res) => {
      res.json().then((data) => {
        if (data.lastErrorObject.updatedExisting) {
          alert("Item delivered Successfully!!!");
          // setSingleItem({});
          // setUpdatedQuantity({});
        }
      });
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:7000/singleItem/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(singleItem),
    }).then((res) => {
      res.json().then((data) => {
        // if (data) {
        //   alert("Updated Quantity Successfully!!!");
        //   setSingleItem({});
        //   // setUpdatedQuantity({});
        // }
      });
    });
  };

  return (
    <div className="itemDetailsContainer">
      <div className="itemDetailsEverything">
        <h2>
          Your Selected Product Item Is{" "}
          <span style={{ color: "red", fontWeight: "900" }}>{itemName}</span>
        </h2>
        <p>
          <img style={{ width: "45%" }} src={imgURL} alt="" />
        </p>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>Available Quantity: {quantity}</p>
        <p>Supplier Name: {supplierName}</p>
        <button onClick={handleDelivered}>Delivered</button>
        <Link to="/manageInventories">
          <button style={{ marginLeft: "10px" }}>Manage All Inventories</button>
        </Link>
      </div>
      <div className="restockFrom">
        <form onClick={handleSubmit}>
          <h3>Restock the items</h3>
          <p>
            <input
              required
              onBlur={handleQuantity}
              placeholder="restock the items"
              type="number"
              name=""
              id=""
            />
          </p>

          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default ProductDetails;
