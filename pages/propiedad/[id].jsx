import React, { useState } from "react";
import Image from "next/image";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const PropertyDetails = ({ properties }) => {
  const router = useRouter();
  const property = properties[0];
  const tieneCocheraText = property.tieneCochera ? "Sí" : "No";
  const handleGoBack = () => {
    router.back();
  };
  const images = property.imagenes.map(
    (imagen) => `https:${imagen.fields.file.url}`
  );
  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      clickable: true,
    },
    navigation: true,
    modules: [Pagination, Navigation],
    className: "mySwiper",
  };

  const nextSvg = () => (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  );

  // Estado para controlar la imagen ampliada
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [zoomedImageIndex, setZoomedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setIsImageZoomed(true);
    setZoomedImageIndex(index);
  };

  const handleCloseZoom = () => {
    setIsImageZoomed(false);
    setZoomedImageIndex(null);
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
      <Image
        src={`https:${property.imagenPrincipal.fields.file.url}`}
        alt={property.titulo}
        width={600}
        height={400}
        className="m-auto h-64 object-cover rounded-md mb-4"
      />
      <p className="text-lg text-black">{property.titulo}</p>
      <h1>{property.descripcion}</h1>
      <h2>- Amb:{property.nmeroDeHabitaciones}</h2>
      <h2>- Direccion:{property.direccion}</h2>
      <h2>- Con cochera: {tieneCocheraText}</h2>

      <Swiper {...swiperParams}>
        {images.map((imageUrl, index) => (
          <SwiperSlide key={index}>
            <div onClick={() => handleImageClick(index)}>
              <Image
                src={imageUrl}
                alt={`Slide ${index + 1}`}
                width={600}
                height={400}
                className="m-auto h-[40em] object-contain rounded-md mb-4 cursor-pointer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {isImageZoomed && zoomedImageIndex !== null && (
        <button
          onClick={handleCloseZoom}
          className="fixed z-50 top-0 left-0 w-screen h-screen bg-black flex items-center justify-center"
        >
          <div className="relative  m-auto">
            <Image
              src={images[zoomedImageIndex]}
              alt={`Slide ${zoomedImageIndex + 1}`}
              width={800}
              height={800}
              className="object-contain h-[40em]"
            />
          </div>
        </button>
      )}
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
