import React, { useEffect, useState } from "react";
import "./ManageInventories.css";
import SingleInventory from "../SingleInventory/SingleInventory";
// import { useParams } from 'react-router-dom';

const ManageInventories = () => {
  const [allInventories, setAllInventories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/allItems")
      .then((res) => res.json())
      .then((data) => setAllInventories(data));
  }, []);

  //   console.log(allInventories);
  return (
    <div className="InventoriesContainer">
      {allInventories.map((pd) => (
        <SingleInventory allInventories={pd} key={pd._id} />
      ))}
    </div>
  );
};

export default ManageInventories;
