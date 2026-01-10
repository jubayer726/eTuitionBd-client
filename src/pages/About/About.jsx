
import React from "react";

const About = () => {
  const teamMembers = [
  {
    name: "Md Jubayer Hossain",
    role: "Founder & Lead Developer",
    image: "https://i.postimg.cc/FzTr6D42/JUBAYER_Photo.jpg", 
  },
  {
    name: "Jabir Adnan",
    role: "Research Specialist",
    image: "https://i.postimg.cc/k43ZxZfv/Jubayer2.jpg",
  },
  {
    name: "Mesbah Uddin Raihan",
    role: "UI/UX Designer",
    image: "https://i.postimg.cc/qv7dR95L/teacher.png",
  },
];
  return (
    <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-purple-600 mb-6">
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

         <section className="bg-[#FBF6EF] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-purple-600 mb-4">
          Meet the Team
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our team is built with dedicated developers, researchers, and
          education-enthusiasts working together to make scholarship access
          easier.
        </p>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>

              <p className="text-gray-600 mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  
    </section>
  );
};

export default About;
