import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "contentful";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
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

  useEffect(() => {
    const prevBtn = document.querySelector(".swiper-button-prev");
    const nextBtn = document.querySelector(".swiper-button-next");
    const pagination = document.querySelector(
      ".swiper-pagination-bullet-active"
    );
    const paginationTwo = document.querySelector(
      ".swiper-pagination-horizontal"
    );
    prevBtn?.classList.add("swipperBtnPrev");
    nextBtn?.classList.add("swipperBtnNext");
    pagination?.classList.add("pagination");
    paginationTwo?.classList.add("pagination");
  }, []);

  return (
    <div className="container my-[3em] mx-auto px-4 py-8">
      <button
        onClick={handleGoBack}
        className="mb-4 px-4 py-2 bg-[#bdb5aaeb] font-bold text-white hover:text-[#444444] rounded-md hover:bg-[#d3cabeeb] focus:outline-none"
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
      <section className="flex flex-col gap-1 my-[1em]">
        <h2 className="flex gap-1 mx-[0.3em]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>
          {property.nmeroDeHabitaciones} Ambientes
        </h2>
        <h2 className="flex gap-1 mx-[0.3em]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          Direccion: {property.direccion}
        </h2>
        <h2 className="flex mx-[0.3em] gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
            />
          </svg>
          Con cochera: {tieneCocheraText}
        </h2>
      </section>
      <h1>{property.descripcion}</h1>
      <section className="my-[2em] no-select">
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
      </section>
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
