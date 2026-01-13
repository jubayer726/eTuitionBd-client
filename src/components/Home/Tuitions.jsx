import Card from "./Card";
import { motion } from "framer-motion";
import Container from "../Shared/Container";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { Link } from "react-router";

const Tuitions = () => {
  const { data: tuitions = [], isLoading } = useQuery({
    queryKey: ["approvedTuitions"],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/tuitions/approved`
      );
      return res.data;
    },
  });
  if (isLoading) <LoadingSpinner></LoadingSpinner>;

  return (
    <Container>
      <motion.div
      initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Tuition Listings
        </h2>
        <p className="text-gray-600 mt-2">
          Find the best tuition that matches your learning needs
        </p>
      </div>
      {tuitions && tuitions.length > 0 ? (
        <div className="py-5 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tuitions.map((stdn) => (
            <Card key={stdn._id} stdn={stdn} />
          ))}
        </div>
      ) : null}
      <div className="flex justify-center">
        <Link
          to="/tuitions"
          className="btn bg-gradient-to-r from-[#8e0e7b] to-[#5c0a5f] hover:from-[#a0148f] hover:to-[#6f0d72]
         transition-all duration-300 ease-in-out px-10 mt-8 py-3 rounded  shadow-md hover:shadow-lg
         active:scale-95 text-white font-bold"
        >
          Show More
        </Link>
      </div>
      </motion.div>
    </Container>
  );
};

export default Tuitions;
