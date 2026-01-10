import { motion } from "framer-motion";
import onlineLearning from "../../../assets/images/Online-learning.svg";
import { Link } from "react-router";

const TuitionJob = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b2b5c]">
            SEARCH TUTORING JOBS
          </h2>
          <p className="text-[#6b7da5] mt-3 text-lg">
            Find Your Tuition Jobs, in your area
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Image (Framer Motion) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.img
            src={onlineLearning}
            alt="Floating Image"
            className="w-full max-w-md mx-auto"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-[#0b2b5c] mb-4">
              Looking for interesting tuition jobs to excel your teaching experience?
            </h3>

            <p className="text-[#5f6f94] leading-relaxed mb-8">
              If teaching jobs interest you, then you are in the right place.
              e-TuitionBD offers 500+ genuine and 100% verified home tuition jobs.
              Whether you are starting your career or already an expert, we help
              you find tuition jobs based on location, class, and subjects.
            </p>

            <Link to ='/tuitions'
              className="inline-flex items-center gap-2 px-8 py-3 text-white font-semibold
                         bg-gradient-to-r from-[#a0148f] to-[#6f0d72]
                         hover:from-[#b81aa2] hover:to-[#7f1184]
                         transition-all duration-300 shadow-lg"
            >
              SEARCH TUITION →
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TuitionJob;
