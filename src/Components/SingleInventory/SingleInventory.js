import React from "react";
import { Link } from "react-router-dom";
import "./SingleInventory.css";
const SingleInventory = ({ allItems, allInventories, setAllInventories }) => {
  // const [allItems, setAllItems] = useState([]);
  // useEffect(() => {
  //   fetch("http://localhost:7000/allItems")
  //     .then((res) => res.json())
  //     .then((data) => setAllItems(data));
  // }, []);

  const { _id, imgURL, itemName, description, price, supplierName, quantity } =
    allInventories;
  // console.log(allInventories);

  const handleDeleteItem = (id) => {
    fetch(`http://localhost:7000/singleItem/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("You have Deleted Successfully!!");
          const remainingItems = allItems.filter((pd) => pd._id !== id);
          setAllInventories(remainingItems);
        }
      });
  };

  return (
    <div className="singleInventory">
      <p>
        <img style={{ width: "20%" }} src={imgURL} alt="" />
      </p>
      <h1> {itemName}</h1>
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Supplier Name: {supplierName}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={() => handleDeleteItem(_id)}>Delete Item</button>
      <Link to="/addItem">
        {" "}
        <button>Add New Item</button>{" "}
      </Link>
    </div>
  );
};

export default SingleInventory;
