import { ArrowLeft, ArrowRight } from "lucide-react";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { abouts } from "~/lib/constants";

const MissionVisionPurpose = () => {
  return (
    <section className="container mx-auto p-8">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop
        autoplay={{ delay: 4000 }}
      >
        {abouts.map(({ title, description, image }, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2">
              <div className="col-span-1 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-3xl">
                <img
                  src={image}
                  alt="people"
                  className="size-full object-cover object-center"
                />
              </div>

              <div className="col-span-1 flex h-full w-full flex-col items-center justify-evenly gap-8">
                <h3 className="text-center text-6xl font-semibold uppercase text-coffee-50">
                  {title}
                </h3>
                <p className="text-center text-3xl">{description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="relative bottom-5">
          <ArrowLeft className="swiper-button-prev !left-1 !h-max !w-10 rounded-full bg-coffee-400 stroke-white stroke-2 p-1" />
          <ArrowRight className="swiper-button-next !right-1 !h-max !w-10 rounded-full bg-coffee-400 stroke-white stroke-2 p-1" />
        </div>
      </Swiper>
    </section>
  );
};

export default MissionVisionPurpose;
