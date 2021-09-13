import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carosel.scss";

SwiperCore.use([Pagination, Navigation]);
const Carosel = ({ images }) => {
  const swiperRef = React.useRef(null);
  return (
    <>
      <div class="d-flex flex-nowrap align-items-center">
        <div
          className="swipe-button"
          id="previousButton"
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <i class="fas fa-chevron-circle-left fa-2x"></i>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={70}
          loop={true}
          loopFillGroupWithBlank={true}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
          ref={swiperRef}
        >
          {Object.keys(images).map((img) => {
            console.log(img);
            return (
              <SwiperSlide>
                <img src={images[img].default} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div
          className="swipe-button"
          id="nextButton"
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <i class="fas fa-chevron-circle-right fa-2x"></i>
        </div>
      </div>
    </>
  );
};

export default Carosel;
