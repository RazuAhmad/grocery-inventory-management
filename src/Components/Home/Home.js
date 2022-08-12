import React from "react";
import AllItems from "../AllItems/AllItems";
import Banner from "../Banner/Banner";
import OrganicFarming from "../OrganicFarming/OrganicFarming";
import WhyUs from "../WhyUsSection/WhyUs";

const Home = () => {
  return (
    <>
      <Banner />
      <br />
      <AllItems />
      <br />
      <WhyUs />
      <br />
      <OrganicFarming />
    </>
  );
};

export default Home;
