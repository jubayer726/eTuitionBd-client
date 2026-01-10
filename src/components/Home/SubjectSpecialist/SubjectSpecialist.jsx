import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const subjects = [
  "Physics",
  "Chemistry",
  "Biology",
  "ICT",
  "Mathematics",
  "English",
  "Bangla",
  "Higher Math",
];

const SubjectSpecialist = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b5c]">
            Find Your Subject Specialist
          </h2>
          <p className="text-[#6b7da5] mt-3 text-lg">
            Find Our Specialist to reach your dream goal
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          loop={subjects.length > 4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {subjects.map((subject, index) => (
            <SwiperSlide key={index}>
              <div
                className="shadow-sm rounded-xl py-10 text-center
                           bg-[#caced8] hover:bg-[#f0f2f7]
                           transition duration-300
                           hover:shadow-lg cursor-pointer
                           font-black text-3xl"
              >
                <h3 className="text-xl font-semibold text-[#041227]">
                  {subject}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default SubjectSpecialist;
