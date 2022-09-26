import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import AddItems from "./Components/AddItems/AddItems";
import AllItems from "./Components/AllItems/AllItems";
import Home from "./Components/Home/Home";
import LogIn from "./Components/LogIn/LogIn";
import ManageInventories from "./Components/ManageInventories/ManageInventories";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import SignUp from "./Components/SignUp/SignUp";

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
        {/* <Route path="/manageInventories" element={<AllItems />} /> */}
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/manageInventories" element={<ManageInventories />} />
      </Routes>
    </>
  );
};

export default App;
