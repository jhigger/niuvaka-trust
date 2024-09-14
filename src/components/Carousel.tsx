import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "~/lib/utils";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

const Carousel = () => {
  return (
    <div className="mx-auto w-full max-w-screen-lg md:max-w-screen-2xl">
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
        className="relative h-[40vw] w-full"
        autoplay
      >
        {colors.map((color) => (
          <SwiperSlide
            key={color}
            className="relative !h-full !w-max overflow-hidden rounded-xl"
          >
            <div className="flex aspect-video h-full w-full items-center justify-center">
              <div className={cn("h-full w-full", `bg-${color}-500`)}></div>
            </div>
          </SwiperSlide>
        ))}

        <div className="relative bottom-1/2">
          <ChevronLeft className="swiper-button-prev !left-[5%] !h-max !w-10 rounded-full bg-coffee-400 stroke-white stroke-2 p-1 md:!left-[10%]" />
          <ChevronRight className="swiper-button-next !right-[5%] !h-max !w-10 rounded-full bg-coffee-400 stroke-white stroke-2 p-1 md:!right-[10%]" />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
