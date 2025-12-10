import React from "react";
import Container from "../../components/Shared/Container";

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <Container>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[#0f172a] mb-6">
              About eTuitionBd
            </h2>

            <p className="text-gray-700 text-lg leading-7 mb-4">
              Our mission is to connect students with qualified tutors and
              create a supportive environment for learning.
            </p>

            <p className="text-gray-700 text-lg leading-7">
              eTuitionBd is a platform where students and tutors can easily
              connect with each other. We provide qualified Home/Online tutors
              to help students perform better in exams.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="flex justify-center">
            <img
              src="https://i.postimg.cc/HkVGTJnz/about.jpg"
              alt="about illustration"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
