import React, { useEffect, useState } from "react";
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
      {allProductItems.map((pd) => (
        <ProductItemCompo key={pd._id} productItem={pd} />
      ))}
    </div>
  );
};

export default AllItems;
