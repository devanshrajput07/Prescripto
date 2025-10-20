import React from "react";
import { assets } from "../assets/assets_frontend/assets.js";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 overflow-hidden">
      {/* Left side */}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] text-white">
        <p className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            src={assets.group_profiles}
            alt="Group of Doctors"
            className="w-28"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className="hidden sm:block" /> schedule your appointment
            hassle-free.
          </p>
        </div>
        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white text-primary font-medium px-8 py-3 text-sm m-auto md:m-0 rounded-full hover:scale-105 transition-all duration-300"
        >
          Book Appointment
          <img src={assets.arrow_icon} alt="Arrow Icon" className="w-4 h-4" />
        </a>
      </div>

      {/* Right side */}
      <div className="md:w-1/2 relative flex justify-center items-center">
        <img
          src={assets.header_img}
          alt="Doctor Consultation"
          className="w-[90%] md:w-full md:absolute bottom-0 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Header;
