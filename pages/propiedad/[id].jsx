// pages/properties/[id].js
import React from "react";
import Image from "next/image";
import propertiesData from "@/public/data/propertiesData";
import { useRouter } from "next/router";

const PropertyDetails = ({ property }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <button
        onClick={handleGoBack}
        className="mb-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none"
      >
        Volver Atrás
      </button>
      <h1 className="text-3xl font-semibold mb-4">{property.title}</h1>
      <Image
        src={property.imageUrl}
        alt={property.title}
        width={600}
        height={400}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <p className="text-lg">{property.description}</p>
      {/* Otras informaciones de la propiedad */}
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { id } = params;
  const property = propertiesData.find((prop) => prop.id === parseInt(id, 10));
  return {
    props: { property },
  };
}

export default PropertyDetails;
