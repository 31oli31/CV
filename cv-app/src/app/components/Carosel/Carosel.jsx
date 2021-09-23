import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carosel.scss";
import "../SectionHeadline/SectionHeadline"
import SectionHeadline from "../SectionHeadline/SectionHeadline";

SwiperCore.use([Pagination, Navigation, Mousewheel]);
const Carosel = ({ images, refs }) => {
  const swiperRef = React.useRef(null);
  return (
    <div className="SectionWhite2">
      <div className="container">
      <SectionHeadline text={"Fähigkeiten"} version={2}/>
      <div ref={refs} class="d-flex flex-nowrap align-items-center scroll">
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
          mousewheel={true}
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
                <img src={images[img]} />
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
    </div>
    </div>
  );
};

export default Carosel;
