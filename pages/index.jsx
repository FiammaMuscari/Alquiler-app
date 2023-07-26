import React from "react";
import Grid from "../components/Grid";
import { createClient } from "contentful";

const Home = ({ properties }) => {
  return (
    <>
      <Grid properties={properties} />
    </>
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

export default Home;
