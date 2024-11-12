//

import React from "react";
import Image from "next/image";
import { PiPottedPlantBold } from "react-icons/pi";

const About = () => {
  return (
    <div>
      <section className="bg-[#859F3D] body-font font-sans h-auto w-screen overflow-x-hidden">
        <div className="container mx-auto flex px-5 py-24 flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="relative xsm:w-64 sm:w-1/2 md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="About Image"
              src="/picture/iamge2-about.avif"
              width={500}
              height={500}
              className="object-cover object-center rounded-lg"
            />

            <div
              className="absolute z-10 mt-1 xsm:w-44 xsm:h-16 sm:w-14 sm:h-16 md:w-72 md:h-16 
               bottom-[-30px] transform ml-28 xsm:ml-9 w-[6rem] h-52  bg-[#31511ee9]
               flex items-center rounded-md lg:ml-[100px]"
            >
              <div className="text-4xl xsm:text-4xl sm:text-5xl lg:text-6xl text-[#ffca60] ">
                <PiPottedPlantBold />
              </div>
              <div className="text-[#F6FCDF]">
                <h1
                  className="text-xl xsm:text-[18px] sm:text-2xl lg:text-3xl font-semibold text-center xsm:text-center 
                sm:text-center md:text-center"
                >
                  89,700
                </h1>
                <h2
                  className="text-xs sm:text-sm lg:text-base font-medium text-center xsm:text-center 
                sm:text-center md:text-center lg:text-center"
                >
                  Successfully project completed
                </h2>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div
            className="lg:flex-grow flex flex-col items-center md:items-start md:text-left text-center md:ml-4 md:w-96 md:h-44
           md:-mt-[6rem]"
          >
            <p className="text-[#F6FCDF] text-sm sm:text-base font-medium xsm:mt-4">
              Our Introduction
            </p>
            <h1 className="title-font text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:text-[26px] md:mt-1">
              Pure agriculture and Organic Form
              {/* <br className="hidden lg:inline-block" /> */}
              {/* Organic Form */}
            </h1>
            <p className="text-[#ffca60] font-bold text-lg sm:text-xl md:text-[18px] md:-mt-[0.5rem]">
              We are a Leader in the Agriculture Market
            </p>
            <p className="text-[#F6FCDF] leading-relaxed font-medium text-base sm:text-lg md:text-[16px] md:-mt-[0.5rem] ">
              We provide superior solutions in the agriculture industry,
              empowering farmers with organic, sustainable methods that deliver
              quality yields and promote environmental sustainability.
            </p>

            {/* List of benefits */}
            <ul
              className="text-[#F6FCDF]  list-disc marker:text-[#ffca60] marker:text-2xl ml-6 mt-4 sm:text-lg md:text-[16px]
             font-medium md:-mt-[0.1rem] "
            >
              <li className="md:-mt-[0.5rem] ">
                Organic food contains more vitamins
              </li>
              <li className="md:-mt-[0.5rem] ">
                Eat organic because supply meets demand
              </li>
              <li className="md:-mt-[0.5rem] ">
                Organic food is never irradiated
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
