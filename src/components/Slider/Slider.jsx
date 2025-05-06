import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import slide1 from "../../assets/image3501.png";
import slide2 from "../../assets/image3502.png";
import slide3 from "../../assets/image3503.png";

const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src={slide1} className="w-full rounded-2xl h-[160px] md:h-[320px] lg:h-[400px]" alt="slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} className="w-full rounded-2xl h-[160px] md:h-[320px] lg:h-[400px]" alt="slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} className="w-full rounded-2xl h-[160px] md:h-[320px] lg:h-[400px]" alt="slide 3" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
