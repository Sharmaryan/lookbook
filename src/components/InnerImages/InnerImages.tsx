import { useRef } from "react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const InnerImages = ({
  images,
}: {
  images: { id: number; src: string; type: string }[];
}) => {
  const swiperRef = useRef<any>(null);

  const stopOuterScroll = (event: any) => {
    event.stopPropagation();
  };

  const handleImageClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const swiper = swiperRef.current?.swiper;
    if (!swiper) return;

    const clickX = event.clientX;
    const imageWidth = event.currentTarget.clientWidth;

    if (clickX < imageWidth / 2) {
      swiper.slidePrev(); // Tap left → Move left
    } else {
      swiper.slideNext(); // Tap right → Move right
    }
  };
  const pagination = {
    clickable: true,
    renderBullet(index: number, className: string) {
      return `<span key="${index}${className}" class="${className}"></span>`;
    },
  };

  return (
    <Swiper
      ref={swiperRef}
      slidesPerView={1}
      spaceBetween={10}
      modules={[FreeMode, Pagination, Autoplay]}
      pagination={pagination}
      className="w-full"
      onWheel={stopOuterScroll}
      onTouchStart={stopOuterScroll}
      onTouchMove={stopOuterScroll}
      onTouchEnd={stopOuterScroll}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {images.map((item) => (
        <SwiperSlide key={item.id}>
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={`Slide ${item.id}`}
              className="w-full h-full object-cover rounded-lg cursor-pointer"
              onClick={handleImageClick}
            />
          ) : (
            <video
              src={item.src}
              className="w-full h-full object-cover rounded-lg"
              controls
              autoPlay
              loop
              muted
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
