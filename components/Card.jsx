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

  const renderStars = (rating) => {
    const starArray = [];
    const baseFillColor = "#f9e464"; // Color base para las estrellas
    const specialFillColor = "#ff00d975"; // Color especial para la cuarta y quinta estrella
    const extraStarWidth = rating === 5 ? "26" : "21"; // Ancho mayor si hay 5 estrellas

    for (let i = 0; i < rating; i++) {
      const fillColor = i === 3 || i === 4 ? specialFillColor : baseFillColor;
      const starWidth = i === rating - 1 ? extraStarWidth : "21";

      starArray.push(
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-star-filled"
          width={starWidth}
          height="30"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          key={i}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z"
            strokeWidth="0.9"
            fill={fillColor}
          />
        </svg>
      );
    }

    return starArray;
  };

  return (
    <Link
      href={`/propiedad/${property.id}`}
      passHref
      className="block max-w-xs mx-auto bg-white shadow-lg rounded-md overflow-hidden transition duration-300 transform hover:scale-105"
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
        <div className="flex justify-between">
          <div className="flex items-center mb-2">
            {renderStars(property.estrellas)}
          </div>
          {property.zona && (
            <p className="neon max-w-fit flex justify-center border-solid border-2">
              {property.zona}
            </p>
          )}
        </div>
        <p className="text-sm  text-gray-600 flex-grow mt-2">
          {truncateText(property.metaDescripcion, 130)}
        </p>
      </div>
    </Link>
  );
};

export default Card;
