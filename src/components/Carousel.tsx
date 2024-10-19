import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const gallery = [
  "/gallery/1.webp",
  "/gallery/2.webp",
  "/gallery/3.webp",
  "/gallery/4.webp",
  "/gallery/5.webp",
  "/gallery/6.webp",
  "/gallery/7.webp",
  "/gallery/8.webp",
  "/gallery/9.webp",
  "/gallery/10.webp",
];

const Carousel = () => {
  return (
    <div className="mx-auto w-full max-w-screen-lg md:max-w-screen-2xl">
      <Swiper
        centeredSlides={true}
        coverflowEffect={{ depth: 100, modifier: 2.5, rotate: 0, stretch: 0 }}
        effect="coverflow"
        grabCursor={true}
        loop={true}
        modules={[EffectCoverflow, Navigation, Autoplay, Pagination]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={"auto"}
        spaceBetween={400}
        className="relative h-[70vh] max-h-[720px] w-full lg:h-[60vw]"
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' +
              className +
              ' !bg-coffee-400 !size-4">' +
              "</span>"
            );
          },
        }}
      >
        {gallery.map((image) => (
          <SwiperSlide
            key={image}
            className="relative !h-full !w-full p-6 lg:p-8"
          >
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl">
              <img
                src={image}
                alt="gallery image"
                className="h-full w-full object-cover object-[50%_25%]"
              />
            </div>
          </SwiperSlide>
        ))}

        <div className="relative bottom-1/2">
          <ChevronLeft className="swiper-button-prev !left-[1%] !h-max !w-10 rounded-full bg-coffee-400 stroke-white stroke-2 p-1" />
          <ChevronRight className="swiper-button-next !right-[1%] !h-max !w-10 rounded-full bg-coffee-400 stroke-white stroke-2 p-1" />
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
