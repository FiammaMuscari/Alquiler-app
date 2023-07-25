// components/Grid.js
import React from "react";
import Card from "./Card";

const Grid = ({ properties }) => {
  return (
    <div className="grid m-[5em] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  );
};

export default Grid;
