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
      className="block max-w-xs mx-auto bg-white shadow-lg rounded-md overflow-hidden transition duration-300 transform hover:scale-105"
      href={`/propiedad/${property.id}`}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`https:${property.imagenPrincipal.fields.file.url}`}
          alt={property.titulo}
          width={700}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col h-[11em]  p-4">
        <h3 className="text-lg font-semibold mb-2">{property.titulo}</h3>
        <p className="text-sm  text-gray-600 flex-grow">
          {truncateText(property.metaDescripcion, 130)}
        </p>
      </div>
    </Link>
  );
};

export default Card;
