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
            <h1
              className="bg-[#31511e79] inline-block xsm:inline-block xsm:text-5xl sm:text-5xl md:text-7xl 
            lg:text-5xl"
            >
              Agriculture Matters to
            </h1>
            <br />
            <h1
              className="bg-[#31511e7a] inline-block xsm:inline-block xsm:text-5xl sm:text-5xl md:text-7xl 
            lg:text-5xl"
            >
              the future Pakistan
            </h1>
          </div>
          <p
            className="text-[#ffca60] text-center mx-80 bg-[#31511e6c] mt-3 lg:mx-44 xsm:text-[14px] sm:text-[14px]
           xsm:mx-4 sm:mx-4 
          md:text-xl md:mt-5 md:mx-8 lg:text-lg"
          >
            Agriculture is vital to Pakistans future, providing employment for
            much of the population, supporting food security, and fueling
            economic growth. Sustainable agricultural practices and innovation
            can help address climate challenges, improve yields, and ensure a
            prosperous future for generations to come.
          </p>
        </div>

        <div>
          <section
            className="text-[#F6FCDF] bg-[#859F3D] body-font h-screen w-full xsm:h-full xsm:w-full
           sm:h-full sm:w-full"
          >
            <h1
              className="text-xl font-semibold text-[#ffca60] text-center pt-24 xsm:text-lg sm:text-lg xsm:pt-8 sm:pt-8 xl:text-3xl
            2xl:text-3xl"
            >
              Recently Completed Work
            </h1>
            <h1 className="text-5xl font-bold text-center xsm:text-3xl sm:text-3xl xl:text-5xl 2xl:text-5xl">
              Explore Our Projects
            </h1>
            <div className="container px-5 py-24 mx-auto xsm:-mt-20 sm:-mt-20 md:-mt-10">
              <div className="flex flex-wrap -m-4">
                <div
                  className="p-4 w-full xsm:w-3/4 sm:w-3/4 xsm:mx-10 sm:mx-10 xsm:h-3/4 sm:h-3/4 md:w-3/4
                md:mx-24 lg:w-2/4 lg:mx-60 xl:w-1/4 2xl:w-1/4 xl:mx-auto 2xl:mx-auto"
                >
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
                <div
                  className="p-4 w-full xsm:w-3/4 sm:w-3/4 xsm:mx-10 sm:mx-10 xsm:h-3/4 sm:h-3/4
                 xsm:-mt-2 sm:-mt-2 md:w-3/4 md:mx-24 lg:w-2/4 lg:mx-60 xl:w-1/4 2xl:w-1/4 xl:mx-auto 2xl:mx-auto"
                >
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
                <div
                  className="p-4 w-full xsm:w-3/4 sm:w-3/4 xsm:mx-10 sm:mx-10 xsm:h-3/4
                sm:h-3/4 xsm:-mt-2 sm:-mt-2 md:w-3/4 md:mx-24 lg:w-2/4 lg:mx-60 xl:w-1/4 2xl:w-1/4 xl:mx-auto 2xl:mx-auto"
                >
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
                <div
                  className="p-4 w-full xsm:w-3/4 sm:w-3/4 xsm:mx-10 sm:mx-10 xsm:h-3/4 sm:h-3/4
                 xsm:-mt-2 sm:-mt-2 md:w-3/4 md:mx-24 lg:w-2/4 lg:mx-60 xl:w-1/4 2xl:w-1/4 xl:mx-auto 2xl:mx-auto"
                >
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
