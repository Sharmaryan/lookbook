import { Swiper, SwiperSlide } from "swiper/react";
import { containerMock } from "./Container.mock";
import { Mousewheel } from "swiper/modules";
import { InnerImages } from "../InnerImages/InnerImages";
import "swiper/swiper-bundle.css";

export const Container = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      spaceBetween={20}
      mousewheel={true}
      modules={[Mousewheel]}
      className="h-[500px] w-full"
    >
      {containerMock.map((group, index) => (
        <SwiperSlide key={index}>
          <InnerImages images={group} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};