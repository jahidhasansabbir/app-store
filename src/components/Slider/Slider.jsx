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
      <div>
        <SwiperSlide>
          <img src={slide1} className="w-full h-[300]" />
        </SwiperSlide>
      </div>
      <div>
        <SwiperSlide>
          <img src={slide2} className="w-full h-[300]" />
        </SwiperSlide>
      </div>
      <div>
        <SwiperSlide>
          <img src={slide3} className="w-full h-[300]" />
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default Slider;
