// components/Grid.js
import React from "react";
import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import FloatingButton from "./FloatingButton";

const Grid = ({ properties }) => {
  if (!properties || properties.length === 0) {
    return <p>No properties available</p>;
  }

  return (
    <>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper m-[3em] h-[28.5em]"
          loop={true}
        >
          {properties.map((property, index) => (
            <SwiperSlide key={index} className="pt-[1em]">
              <Card key={property.id} property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="block md:hidden">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper m-[3em] h-[28.5em]"
          loop={true}
        >
          {properties.map((property, index) => (
            <SwiperSlide key={index} className="pt-[1em]">
              <Card key={property.id} property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Grid;
