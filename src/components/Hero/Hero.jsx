import React from "react";
import { IoMdAdd } from "react-icons/io";

const Hero = () => {
  return (
    <div className="text-center px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16 lg:mt-20 mb-8 sm:mb-10">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#1F2937] leading-tight">
        Friends to keep close in your life
      </h2>
      <p className="text-base sm:text-lg mb-6 sm:mb-8 text-[#64748B] max-w-xl mx-auto leading-relaxed">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#1a3a2e] transition-colors">
        <IoMdAdd className="text-lg sm:text-xl" />
        Add a Friend
      </button>
    </div>
  );
};

export default Hero;
