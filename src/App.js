import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import AddItems from "./Components/AddItems/AddItems";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addItem" element={<AddItems />} />
        <Route path="/inventory/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default App;
