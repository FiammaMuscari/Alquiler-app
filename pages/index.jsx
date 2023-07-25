// pages/index.js
import React from "react";
import propertiesData from "@/public/data/propertiesData";
import Grid from "./components/Grid";

const Home = () => {
  return (
    <>
      <Grid properties={propertiesData} />
    </>
  );
};

export default Home;
