import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
//import "./swiper-bundle.css"
import { Pagination } from "swiper";
//import "swiper/css";
//import "swiper/css/navigation";
//import "swiper/css";
//import "swiper/css/pagination";
//mySwiper
const Slider = () => (
    <Swiper navigation={true} modules={[Pagination]} className="flex flex-row justify-center">
            <SwiperSlide className="w-full h-24 bg-red-300 object-cover">Slide 1</SwiperSlide>
            <SwiperSlide className="w-full h-24 bg-red-300 object-cover">Slide 2</SwiperSlide>
            <SwiperSlide className="w-full h-24 bg-red-300 object-cover">Slide 3</SwiperSlide>
    </Swiper>

);

export default Slider