import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
