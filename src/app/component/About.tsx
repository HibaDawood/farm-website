import React from "react";
import Image from "next/image";
import { PiPottedPlantBold } from "react-icons/pi";

const About = () => {
  return (
    <div>
      <section className=" bg-[#859F3D] body-font font-sans h-screen">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 ">
            <Image
              alt="About Image"
              src={"/picture/iamge2-about.avif"}
              width={500}
              height={500}
              className="object-cover object-center rounded"
            />
          </div>
          <div
            className="bg-[#31511ee9] absolute z-10 w-80 h-20 mt-[20rem] ml-[5rem] flex
     "
          >
            <div className="text-6xl my-3 text-[#ffca60] ml-1">
              <PiPottedPlantBold />
            </div>
            <div className="text-[#F6FCDF] ml-6 mt-3">
              <h1 className="text-2xl font-bold ml-14">89,700</h1>
              <h2 className="font-medium">Successfully project completed</h2>
            </div>
          </div>
          <div
            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start 
    md:text-left items-center text-center"
          >
            <p className="text-[#F6FCDF]">Our Introduction</p>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-white">
              Pure agriculture and
              <br className="hidden lg:inline-block" />
              Organic Form
            </h1>
            <p className="text-[#ffca60] font-bold">
              Were Leader in Agriculture Market
            </p>
            <p className="text-[#F6FCDF] leading-relaxed font-medium">
              where various versions of a passage exist, but most have been
              altered in some way—either through the addition of human or random
              words, even if they appear somewhat believable.
            </p>
            <ul
              className="text-[#F6FCDF] list-disc marker:text-[#ffca60] marker:text-3xl
      font-medium "
            >
              <li>Organic food contains more vitamins</li>
              <li>Eat organic because supply Meets demand</li>
              <li>organic food is never irradiated</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
