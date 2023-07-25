import React from "react";
import Image from "next/image";
import { createClient } from "contentful";
import { useRouter } from "next/router";

const PropertyDetails = ({ properties }) => {
  const router = useRouter();
  const property = properties[0];
  console.log(properties);
  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="container my-[3em] mx-auto px-4 py-8">
      <button
        onClick={handleGoBack}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
      >
        Volver Atrás
      </button>
      <h1 className="text-3xl font-semibold mb-4"></h1>
      {/* <Image
        src={`https:${properties.imagenPrincipal}`}
        alt={properties.titulo}
        width={600}
        height={400}
        className="w-full h-64 object-cover rounded-md mb-4"
      /> */}
      <p className="text-lg text-black">{property.titulo}</p>
    </div>
  );
};

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  // Obtener las entradas (propiedades) desde Contentful
  const entries = await client.getEntries({
    content_type: "alquiler", // Asegúrate de usar el nombre correcto del tipo de contenido
  });

  // Mapear las entradas y retornarlas como propiedades
  const properties = entries.items.map((entry) => entry.fields);

  return {
    props: { properties },
  };
}

export default PropertyDetails;
