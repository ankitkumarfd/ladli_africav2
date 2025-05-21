import React from "react";
import bg from "@/public/assets/homewall.png";
import AnimateOnScroll from "@/components/common/AOS/AnimateOnScroll";
import Image from "next/image";

import {
  TypographyH1,
  TypographyH2,
  TypographyH4,
  TypographyP,
} from "@/components/custom/Typhographies";
import founder1 from "@/public/assets/founder/founder1.webp";

function page() {
  return (
    <AnimateOnScroll>
      <main className="flex-grow ">
        <div className="relative w-full h-[85vh] overflow-hidden home mb-12">
          /* Background Image */
          <div
            style={{ backgroundImage: `url(${bg.src})` }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[85vh]"
          ></div>
          {/* Overlay */}
          {/* <div className="absolute inset-0 bg-black/60 z-0 h-[85vh]" /> */}
        </div>

        <section className="">
          <div className="text-center mb-8">
            <TypographyH1 className="">Donate Now</TypographyH1>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-center">
              <div data-aos="fade-right" className="text-justify">
                <TypographyP className="text-justify mb-4 ">
                  {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis arcu aliquam, vehicula tortor quis, rhoncus ex. Maecenas feugiat felis dui, et ultricies dui pharetra nec. Aenean ac mi nisl. Mauris lobortis, ligula nec placerat viverra, quam tellus eleifend mi, eu imperdiet ante orci vitae purus. Donec a semper lorem. Ut a leo tellus. Pellentesque vestibulum malesuada turpis quis accumsan. Suspendisse nec hendrerit lectus. Curabitur rhoncus nisi ac elit consequat, quis mollis ex eleifend.`}
                </TypographyP>
              </div>
              <div
                className="flex relative justify-center"
                data-aos="fade-left"
              >
                <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div className="mb-4">
                    <label
                      htmlFor="amount"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      id="amount"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Amount"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AnimateOnScroll>
  );
}

export default page;
