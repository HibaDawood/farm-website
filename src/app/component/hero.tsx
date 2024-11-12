import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="relative font-sans w-full h-screen overflow-x-hidden"
    >
      <Image
        src="/picture/farm-g-1.jpg"
        alt="farms"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority
        className="absolute inset-0 w-full h-full"
      />
      <div
        className="relative z-10 flex flex-col items-center lg:items-start p-4 sm:p-6 md:p-8 xsm:p-4
      lg:p-12 mt-36 space-y-4 text-center lg:text-left w-full max-w-screen-lg mx-auto"
      >
        <h2 className="text-[#F6FCDF] text-[16px] md:text-[20px] sm:text-[18px] xsm:text-[16px] font-medium">
          Original & Natural
        </h2>
        <h1 className="text-[#ffca60] text-4xl xsm:text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Agriculture Matter
        </h1>
        <h1 className="text-[#F6FCDF] text-4xl xsm:text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Good Production
        </h1>
        <p className="text-[#F6FCDF] text-[14px] xsm:text-[14px] sm:text-[16px] md:text-[18px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
          We accelerate plant growth with specialized nutrition feed, ensuring
          faster and healthier crops. Our advanced solutions promote robust
          development for optimal yields.
        </p>
        <button className="w-32 xsm:w-32 xsm:h-10 sm:w-36 h-10 sm:h-12 bg-[#ffca60] mt-6 rounded-xl font-semibold">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Hero;
