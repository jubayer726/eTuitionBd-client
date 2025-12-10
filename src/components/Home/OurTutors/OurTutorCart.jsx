import React from "react";
import Container from './../../Shared/Container';

const OurTutorCart = ({ tutor }) => {
  const { name, email,mobile, image, subject, location} = tutor;
  return (
    <div className="max-w-sm p-6 bg-white rounded-xl shadow-md border border-gray-200 space-y-4">
        {/* Quote Icon */}
      <div className="w-32 rounded-full">
          <img className=" items-center mx-auto" src={image} alt="" />
        </div>

      {/* Text */}
      <p className="text-gray-800 leading-relaxed font-bold">Subject: {subject}</p>
      <p className="text-gray-600 leading-relaxed">Location: {location}</p>

      {/* Dotted Line */}
      <div className="border-t border-dotted border-gray-400 my-2"></div>

      {/* Author Info */}
      <h1 className="text-gray-600 leading-relaxed">Name: {name}</h1>
      <h2 className="text-gray-500 text-sm">Email: {email}</h2>
      <h2 className="text-gray-500 text-sm">Mobile: {mobile}</h2>
    </div>
  );
};

export default OurTutorCart;
