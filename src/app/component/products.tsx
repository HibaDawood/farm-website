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
          <div className="flex flex-col text-center w-full mb-20">
            <p className="text-[#F6FCDF]">Popular Foods & Vegetables </p>
            <h1
              className="sm:text-3xl text-3xl font-bold title-font mb-4 
            text-[#F6FCDF]"
            >
              Quality Foods & Vegetables
            </h1>
          </div>

          <div className="flex flex-wrap -m-4 mt-[3rem] text-center">
            <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-red-600 text-5xl mx-12 ">
                  <GiShinyApple />
                </div>
                <p className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium">Apple</p>
              </div>
            </div>

            <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-orange-500 text-5xl mx-12 ">
                  <PiOrangeFill />
                </div>
                <p className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium">Orange</p>
              </div>
            </div>

            <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-green-400 text-5xl mx-12 ">
                  <GiKiwiFruit />
                </div>
                <p className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium">Kiwi</p>
              </div>
            </div>

            <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-[#F6FCDF] text-5xl mx-12 ">
                  <GiGarlic />
                </div>
                <p className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium">Garlic</p>
              </div>
            </div>

            <div className="p-4 md:w-1/6 sm:w-1/2 w-full">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-pink-900 text-5xl mx-12 ">
                  <GiBeet />
                </div>
                <p className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium">Beet Root</p>
              </div>
            </div>

            <div className="p-4 md:w-1/6 sm:w-1/2 w-full ">
              <div className="bg-[#31511e92] px-4 py-6 rounded-lg hover:bg-[#ffca60]">
                <div className="text-orange-500 text-5xl mx-12 ">
                  <FaCarrot />
                </div>
                <p className="leading-relaxed text-[#F6FCDF] hover:text-[#31511e92] 
                font-medium">Carrot</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
