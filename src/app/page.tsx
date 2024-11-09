import React from "react";
import Hero from "./component/hero";
import About from "./component/About";
import Products from "./component/products";
import Image from "next/image";


const Page = () => {
  return (
    <div>
      <Hero />
      <About />
      <Products />

      <div>
        <div
          className="relative bg-[url('/picture/bg.jpg')]
       bg-cover bg-center w-full h-screen"
        >
          <div className=" pt-44 text-center text-[#ffca60] text-5xl font-bold">
            <h1 className="bg-[#31511e96] inline-block">
              Agriculture Matters to
            </h1>
            <br />
            <h1 className="bg-[#31511e96] inline-block ">
              {" "}
              the future Pakistan
            </h1>
          </div>
          <p className="text-[#ffca60] text-center mx-80 bg-[#31511e96] mt-3">
            Agriculture is vital to Pakistan's future, providing employment for
            much of the population, supporting food security, and fueling
            economic growth. Sustainable agricultural practices and innovation
            can help address climate challenges, improve yields, and ensure a
            prosperous future for generations to come.
          </p>
        </div>

        <div>
          <section className="text-[#F6FCDF] bg-[#859F3D] body-font h-screen">
            <h1 className="text-xl font-semibold text-[#ffca60] text-center pt-24">
              Recently Completed Work
            </h1>
            <h1 className="text-5xl font-bold text-center">
              Explore Our Projects
            </h1>
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a
                    className="block relative h-48 rounded overflow-hidden 
          border-[#ffca60] border-[2px]"
                  >
                    <Image
                      alt="ecommerce"
                      width={500}
                      height={500}
                      className="object-cover object-center w-full h-full block"
                      src={"/picture/gallery-img-1.jpg"}
                    />
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a
                    className="block relative h-48 rounded overflow-hidden 
        border-[#ffca60] border-[2px]"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={"/picture/gallery-img-2.jpg"}
                    />
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a
                    className="block relative h-48 rounded overflow-hidden 
        border-[#ffca60] border-[2px]"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={"/picture/gallery-img-3.jpg"}
                    />
                  </a>
                </div>
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a
                    className="block relative h-48 rounded overflow-hidden 
        border-[#ffca60] border-[2px]"
                  >
                    <img
                      alt="ecommerce"
                      className="object-cover object-center w-full h-full block"
                      src={"/picture/gallery-img-4.jpg"}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>


    </div>

    
  );
};

export default Page;
