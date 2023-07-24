// pages/index.js
import React from "react";
import propertiesData from "@/public/data/propertiesData";
import Grid from "./components/Grid";

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-center font-semibold mb-6">
        Propiedades en Alquiler
      </h1>
      <Grid properties={propertiesData} />
    </div>
  );
};

export default Home;
