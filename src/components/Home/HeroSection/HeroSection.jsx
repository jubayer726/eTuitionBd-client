import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import carosel1 from '../../../assets/images/banner/hero1.jpg'
// import carosel2 from '../../../assets/images/banner/hero2.jpg'
// import carosel3 from '../../../assets/images/banner/hero3.jpg'
// import bannerimg1 from "../../../assets/images/banner/Banner11.jpg";
import bannerimg2 from "../../../assets/images/banner/Banner12.jpg";
import bannerimg3 from "../../../assets/images/banner/Banner13.jpg";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    // <Carousel className="my-5" autoPlay={true} infiniteLoop={true}>
    //   <div className="w-full bg-linear-to-r to-[#f3f5ff] via-[#f4f1ff] from-[#ffecef] px-20 py-5">
    //     <div className="grid grid-cols-2 gap-10 items-center">
    //       {/* LEFT CONTENT */}
    //       <div>
    //         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
    //           Find your perfect <br /> tutor easily
    //         </h1>

    //         <p className="text-gray-600 mt-4 text-lg text-left">
    //           Making tutoring easy, fun, and flexible! Now, <br /> students can focus
    //           on learning and teachers on teaching.
    //         </p>

    //         <Link to='' className="mt-6 btn bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition ">
    //           Get Started →
    //         </Link>

    //         <div className="flex items-center gap-3 mt-8">
    //           <span className="text-yellow-500 text-2xl">⭐</span>
    //           <p className="text-gray-700 font-medium">
    //             Over 5 million students have given a 5-star review to their
    //             tutor
    //           </p>
    //         </div>
    //       </div>

    //       {/* RIGHT IMAGE */}
    //       <div className="flex justify-center">
    //         <img src={carosel1} alt="photo" />
    //       </div>
    //     </div>
    //   </div>

    //   <div className="w-full bg-linear-to-r from-[#f3f5ff] via-[#f4f1ff] to-[#ffecef] px-20 py-5">
    //     <div className="grid grid-cols-2 gap-10 items-center">
    //       {/* RIGHT IMAGE */}
    //       <div className="flex justify-center">
    //         <img src={carosel2} alt="photo" />
    //       </div>
    //       {/* LEFT CONTENT */}
    //       <div>
    //         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
    //           Easily communicate <br /> with tutors
    //         </h1>

    //         <p className="text-gray-600 mt-4 text-lg text-left">
    //           Nomo emm epsam voluplatem quia, <br /> voluptas sit aspernatur audit fugit, sed quis conseptuuntur ma.
    //         </p>

    //         <Link to='' className="mt-6 btn bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition ">
    //           Find a Tutor →
    //         </Link>

    //       </div>
    //     </div>
    //   </div>

    //   <div className="w-full bg-linear-to-r to-[#f3f5ff] via-[#f4f1ff] from-[#ffecef] px-20 py-5">
    //     <div className="grid grid-cols-2 gap-10 items-center">
    //       {/* LEFT CONTENT */}
    //       <div>
    //         <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
    //           Find experienced  <br />tutor by browsing <br />  categories
    //         </h1>

    //         <p className="text-gray-600 mt-4 text-lg text-left">
    //           Making tutoring easy, fun, and flexible! Now, <br /> students can focus
    //           on learning and teachers on teaching.
    //         </p>

    //         <Link to='' className="mt-6 btn bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition ">
    //           Find a Tutor →
    //         </Link>
    //       </div>

    //       {/* RIGHT IMAGE */}
    //       <div className="flex justify-center">
    //         <img src={carosel3} alt="photo" />
    //       </div>
    //     </div>
    //   </div>
    // </Carousel>

    <Carousel className="my-5" autoPlay={true} infiniteLoop={true}>
      <div className="grid grid-cols-2 items-center bg-linear-to-r from-[#ffecef] via-[#f4f1ff] to-[#f3f5ff] px-10">
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-left">
              Find your perfect <br /> tutor easily
            </h1>

            <p className="text-gray-600 mt-4 text-lg text-left">
              Making tutoring easy, fun, and flexible! Now, <br /> students can
              focus on learning and teachers on teaching.
            </p>

            <Link
              to=""
              className="mt-6 btn bg-gray-900 text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition "
            >
              Get Started →
            </Link>

            <div className="flex items-center gap-3 mt-8">
              <span className="text-yellow-500 text-2xl">⭐</span>
              <p className="text-gray-700 font-medium">
                Over 5 million students have given a 5-star review to their
                tutor
              </p>
            </div>
          </div>
          <img src={carosel1} />
      </div>

      <div>
        <img src={bannerimg2} />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src={bannerimg3} />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default HeroSection;
