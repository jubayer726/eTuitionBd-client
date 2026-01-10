import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import Play from "../../../assets/images/services/Play.webp";
import Nursery from "../../../assets/images/services/Nursery.webp";
import KG from "../../../assets/images/services/KG.webp";
import Primary from "../../../assets/images/services/Primary.webp";
import Heigh from "../../../assets/images/services/Heigh.webp";
import SSC from "../../../assets/images/services/SSC.webp";
import HSC from "../../../assets/images/services/HSC.webp";
import AdmissionTest from "../../../assets/images/services/AdmissionTest.webp";

const OurServices = () => {
  const services = [
    { img:Play, title: "Play" },
    { img:Nursery, title: "Nursery" },
    { img:KG, title: "KG" },
    { img:Primary, title: "Primary" },
    { img:Heigh, title: "Heigh" },
    { img:SSC, title: "SSC" },
    { img:HSC, title: "HSC" },
    { img:AdmissionTest, title: "Admission Test" },
  ];
  return (
    <div>
      <h1 className="text-3xl text-center font-bold pt-15 text-secondary">
        We've helped thousands of sales teams
      </h1>
      <div className="py-15">
        <Swiper
          slidesPerView={4}
          loop={services.length > 4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {services.map((service, i) => (
            <SwiperSlide key={i} className="shadow-sm bg-gray-50 rounded-lg">
              <img src={service.img} alt="Service" className="w-full h-65  p-5 rounded-lg" />
              <div className="pb-6 text-center">
                    <h3 className="text-lg font-semibold text-[#0b2b5c]">
                    {service.title}
                    </h3>
                </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurServices;
