import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItemCompo from "../ProductItemComponent/ProductItemCompo";
import "./AllItems.css";
const AllItems = () => {
  const [allProductItems, setAllProductItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/allItems")
      .then((res) => res.json())
      .then((data) => setAllProductItems(data));
  }, []);
  return (
    <div className="ItemContainer">
      {allProductItems.map(
        (pd, index) =>
          index < 6 && <ProductItemCompo key={pd._id} productItem={pd} />
      )}
      <br />
      <Link to="/manageInventories">
        <button>Manage All Inventories</button>
      </Link>
    </div>
  );
};

export default AllItems;
