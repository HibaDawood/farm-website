import React from "react";
import { GiThreeLeaves } from "react-icons/gi";
import { BsInstagram  } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="text-[#F6FCDF] bg-[#31511ee9] body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <div
              className="w-10 h-10 text-[#F6FCDF] p-2 bg-[#859F3D] rounded-full text-2xl
      items-center"
            >
              <GiThreeLeaves />
            </div>
            <span className="ml-3 text-xl">Smart Argo</span>
          </a>
          <p
            className="text-base text-[#F6FCDF] sm:ml-4 sm:pl-4 sm:border-l-2
     sm:border-[#31511ee9] sm:py-2 sm:mt-0 mt-4"
          >
            © 2024 Smart Agro —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center 
          sm:justify-start">
            
            <div className="ml-3 text-2xl text-[#F6FCDF]">
            <BsInstagram />
            </div>
            <div className="ml-3 text-2xl text-[#F6FCDF]">
            <FaFacebookSquare />
            </div>
            
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
