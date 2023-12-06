import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function index() {
  return (
    <section className="m-auto max-w-[30em] pt-[7em] justify-center items-center  text-center ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper mt-[2em] rounded-md"
      >
        <SwiperSlide>
          <Image
            alt="playa_mardelplata"
            width={700}
            height={700}
            objectFit
            src={
              "https://cdn-italiani-media.italiani.it/site-mardelplata/2019/09/Mirador-Waikiki-Panoramica.jpg"
            }
            className="h-[270px]"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="playa_mardelplata"
            width={700}
            height={400}
            src={
              "https://cf.bstatic.com/images/hotel/max1024x768/244/244033030.jpg"
            }
            className="h-[270px]"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="playa_mardelplata"
            width={700}
            height={400}
            src={
              "https://th.bing.com/th/id/OIP.FNMvfVIwnb3LM64J0JPGXgHaFm?rs=1&pid=ImgDetMain"
            }
            className="h-[270px]"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            alt="playa_mardelplata"
            width={700}
            height={400}
            src={
              "https://th.bing.com/th/id/OIP.aSimOWqvcDPZbwsBVmyyzQHaEK?rs=1&pid=ImgDetMain"
            }
            className="h-[270px]"
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Image
            alt="playa_mardelplata"
            width={700}
            height={400}
            className="h-[270px]"
            src={
              "https://i.pinimg.com/originals/11/d9/4c/11d94c44cf3db003139a8f98f819e97c.jpg"
            }
          ></Image>
        </SwiperSlide>
      </Swiper>
      <p className="mt-[1em]">
        ¡Bienvenido! Estamos ubicados en la hermosa ciudad de Mar del Plata,
        especializados en ofrecerte los mejores alquileres temporarios para tus
        vacaciones. Entendemos la importancia de encontrar el lugar perfecto
        para disfrutar de tu tiempo en la costa y te lo damos.
      </p>
      <p className="mt-[1em]">
        Nuestra misión es proporcionarte opciones acogedoras y convenientes que
        se adapten a tus necesidades y estilo de vida. Ya sea que estés buscando
        un cómodo departamento frente al mar, un chalet en el bosque o una casa
        con encanto en el corazón de la ciudad, estamos aquí para ayudarte a
        encontrar la propiedad perfecta para que tus vacaciones sean
        inolvidables.
      </p>
    </section>
  );
}
