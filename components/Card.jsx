// components/Card.js
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ property }) => {
  return (
    <Link
      href={`/propiedad/${property.id}`}
      className="p-4 max-w-xs mx-auto bg-white shadow-lg rounded-md transition duration-300 transform hover:scale-105"
    >
      <Image
        src={`https:${property.imagenPrincipal.fields.file.url}`}
        alt={property.titulo}
        width={300}
        height={200}
        className="w-full h-48 object-cover rounded-t-md"
      />
      <div className="p-2">
        <h3 className="text-lg font-semibold">{property.titulo}</h3>
        <p className="text-sm text-gray-600">{property.metaDescripcion}</p>
      </div>
    </Link>
  );
};

export default Card;
