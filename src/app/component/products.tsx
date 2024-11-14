import React from "react";
import { GiShinyApple } from "react-icons/gi";
import { PiOrangeFill } from "react-icons/pi";
import { GiKiwiFruit } from "react-icons/gi";
import { GiGarlic } from "react-icons/gi";
import { GiBeet } from "react-icons/gi";
import { FaCarrot } from "react-icons/fa";

const Products = () => {
  return (
    <div>
      <section className=" bg-[#859F3D] h-screen">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 xsm:-mt-8 sm:-mt-24 md:mt-10 lg:-mt-4">
            <p className="text-[#F6FCDF] md:text-2xl">
              Popular Foods & Vegetables{" "}
            </p>
            <h1
              className="sm:text-3xl text-3xl font-bold title-font mb-4 
            text-[#F6FCDF] md:text-4xl"
            >
              Quality Foods & Vegetables
            </h1>
          </div>

          <div className="flex flex-wrap -m-4 mt-[3rem] text-center xsm:-mt-10 sm:-mt-32 md:mt-10 lg:-mt-6 mx-3">
            <div className="p-4 w-full xsm:w-3/6 sm:w-3/6 md:w-3/6 lg:w-2/6 text-center">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-red-600 text-5xl mx-12 xsm:mx-4  md:mx-[120px] lg:mx-[105px] xl:mx-36 2xl:mx-36">
                  <GiShinyApple />
                </div>
                <p
                  className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium"
                >
                  Apple
                </p>
              </div>
            </div>

            <div className="p-4 w-full xsm:w-3/6 sm:w-3/6 md:w-3/6 lg:w-2/6 text-center">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-orange-500 text-5xl mx-12 xsm:mx-4 md:mx-[120px] lg:mx-[105px]  xl:mx-36 2xl:mx-36">
                  <PiOrangeFill />
                </div>
                <p
                  className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium"
                >
                  Orange
                </p>
              </div>
            </div>

            <div className="p-4 w-full xsm:w-3/6 sm:w-3/6 md:w-3/6 lg:w-2/6 text-center">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-green-400 text-5xl mx-12 xsm:mx-4 md:mx-[120px] lg:mx-[105px] xl:mx-36 2xl:mx-36">
                  <GiKiwiFruit />
                </div>
                <p
                  className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium"
                >
                  Kiwi
                </p>
              </div>
            </div>

            <div className="p-4 w-full xsm:w-3/6 sm:w-3/6 md:w-3/6 lg:w-2/6 text-center">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-[#F6FCDF] text-5xl mx-12 xsm:mx-4 md:mx-[120px] lg:mx-[105px] xl:mx-36 2xl:mx-36">
                  <GiGarlic />
                </div>
                <p
                  className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium"
                >
                  Garlic
                </p>
              </div>
            </div>

            <div className="p-4 w-full xsm:w-3/6 sm:w-3/6 md:w-3/6 lg:w-2/6 text-center">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-pink-900 text-5xl mx-12 xsm:mx-4 md:mx-[132px] lg:mx-[105px] xl:mx-36 2xl:mx-36">
                  <GiBeet />
                </div>
                <p
                  className="leading-relaxed   text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium"
                >
                  Beet Root
                </p>
              </div>
            </div>

            <div className="p-4 w-full xsm:w-3/6 sm:w-3/6 md:w-3/6 lg:w-2/6 text-center">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-orange-500 text-5xl mx-12 xsm:mx-4 md:mx-[120px] lg:mx-[105px] xl:mx-36 2xl:mx-36 ">
                  <FaCarrot />
                </div>
                <p
                  className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium"
                >
                  Carrot
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
