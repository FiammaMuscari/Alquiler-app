import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ property }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "…";
    }
    return text;
  };
  return (
    <Link
      href={`/propiedad/${property.id}`}
      className="block p-4 max-w-xs mx-auto bg-white shadow-lg rounded-md transition duration-300 transform hover:scale-105 w-full"
    >
      <div className="relative h-48 overflow-hidden rounded-t-md">
        <Image
          src={`https:${property.imagenPrincipal.fields.file.url}`}
          alt={property.titulo}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col h-full p-2">
        <h3 className="text-lg font-semibold">{property.titulo}</h3>
        <p className="text-sm text-gray-600 flex-grow">
          {truncateText(property.metaDescripcion, 130)}
        </p>
      </div>
    </Link>
  );
};

export default Card;
