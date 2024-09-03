import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Carousel = () => {
  return (
    <Swiper
      centeredSlides={true}
      coverflowEffect={{ depth: 100, modifier: 2.5, rotate: 0, stretch: 0 }}
      effect="coverflow"
      grabCursor={true}
      loop={true}
      modules={[EffectCoverflow, Navigation, Autoplay]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      slidesPerView={"auto"}
      spaceBetween={300}
      className="relative h-96"
      autoplay
    >
      <SwiperSlide className="relative !h-full !w-max overflow-hidden rounded-xl">
        <div className="flex h-full w-96 items-center justify-center">
          <div className="h-full w-full bg-red-500"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative !h-full !w-max overflow-hidden rounded-xl">
        <div className="flex h-full w-96 items-center justify-center">
          <div className="h-full w-full bg-orange-500"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative !h-full !w-max overflow-hidden rounded-xl">
        <div className="flex h-full w-96 items-center justify-center">
          <div className="h-full w-full bg-yellow-500"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative !h-full !w-max overflow-hidden rounded-xl">
        <div className="flex h-full w-96 items-center justify-center">
          <div className="h-full w-full bg-green-500"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative !h-full !w-max overflow-hidden rounded-xl">
        <div className="flex h-full w-96 items-center justify-center">
          <div className="h-full w-full bg-blue-500"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative !h-full !w-max overflow-hidden rounded-xl">
        <div className="flex h-full w-96 items-center justify-center">
          <div className="h-full w-full bg-indigo-500"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="relative !h-full !w-max overflow-hidden rounded-xl">
        <div className="flex h-full w-96 items-center justify-center">
          <div className="h-full w-full bg-violet-500"></div>
        </div>
      </SwiperSlide>

      <div className="relative bottom-5">
        <ChevronLeft className="swiper-button-prev !left-1/4 !h-max !w-10 rounded-full bg-coffee-400 stroke-white stroke-2 p-1" />
        <ChevronRight className="swiper-button-next !right-1/4 !h-max !w-10 rounded-full bg-coffee-400 stroke-white stroke-2 p-1" />
      </div>
    </Swiper>
  );
};

export default Carousel;
