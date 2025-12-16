import React from "react";

export const Button = ({children}) => {
  <button className="px-6 py-3 rounded-lg text-white font-semibold
  bg-gradient-to-r from-purple-600 to-fuchsia-700
  hover:from-purple-700 hover:to-fuchsia-800
  transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl">
    {children}
  </button>
}
