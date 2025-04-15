import React from "react";
import Image from "next/image";
import govt1 from "@/public/assets/partners/govt/1.webp";
import govt2 from "@/public/assets/partners/govt/2.webp";
import govt3 from "@/public/assets/partners/govt/3.webp";
import govt4 from "@/public/assets/partners/govt/4.webp";
import govt5 from "@/public/assets/partners/govt/5.webp";
import govt6 from "@/public/assets/partners/govt/6.webp";
import govt7 from "@/public/assets/partners/govt/7.webp";
import govt8 from "@/public/assets/partners/govt/8.webp";
import govt9 from "@/public/assets/partners/govt/9.webp";
import govt10 from "@/public/assets/partners/govt/10.webp";
import govt11 from "@/public/assets/partners/govt/11.webp";
import govt12 from "@/public/assets/partners/govt/12.webp";
import govt13 from "@/public/assets/partners/govt/13.webp";
import govt14 from "@/public/assets/partners/govt/14.webp";
import govt15 from "@/public/assets/partners/govt/15.webp";
import govt16 from "@/public/assets/partners/govt/16.webp";
import govt17 from "@/public/assets/partners/govt/17.webp";
import govt18 from "@/public/assets/partners/govt/18.webp";
import govt19 from "@/public/assets/partners/govt/19.webp";
import govt20 from "@/public/assets/partners/govt/20.webp";
import govt21 from "@/public/assets/partners/govt/21.webp";
import govt22 from "@/public/assets/partners/govt/22.webp";
import govt23 from "@/public/assets/partners/govt/23.webp";
import govt24 from "@/public/assets/partners/govt/24.webp";

import international2 from "@/public/assets/partners/international/2.webp";
import international3 from "@/public/assets/partners/international/3.webp";
import international4 from "@/public/assets/partners/international/4.webp";
import international5 from "@/public/assets/partners/international/5.webp";
import international6 from "@/public/assets/partners/international/6.webp";
import international7 from "@/public/assets/partners/international/7.webp";
import international8 from "@/public/assets/partners/international/8.webp";
import international9 from "@/public/assets/partners/international/9.webp";
import international10 from "@/public/assets/partners/international/10.webp";
import international11 from "@/public/assets/partners/international/11.webp";
import international12 from "@/public/assets/partners/international/12.webp";
import international13 from "@/public/assets/partners/international/13.webp";
import international14 from "@/public/assets/partners/international/14.webp";
import international15 from "@/public/assets/partners/international/15.webp";
import international16 from "@/public/assets/partners/international/16.webp";
import international17 from "@/public/assets/partners/international/17.webp";
import international18 from "@/public/assets/partners/international/18.webp";
import international19 from "@/public/assets/partners/international/19.webp";

import corporate from "@/public/assets/partners/corporates/1.webp";
import corporate2 from "@/public/assets/partners/corporates/2.webp";
import corporate3 from "@/public/assets/partners/corporates/3.webp";
import corporate4 from "@/public/assets/partners/corporates/4.webp";
import corporate5 from "@/public/assets/partners/corporates/5.webp";
import corporate6 from "@/public/assets/partners/corporates/6.webp";
import corporate7 from "@/public/assets/partners/corporates/7.webp";

const govtPartners = [
  govt1,
  govt2,
  govt3,
  govt4,
  govt5,
  govt6,
  govt7,
  govt8,
  govt9,
  govt10,
  govt11,
  govt12,
  govt13,
  govt14,
  govt15,
  govt16,
  govt17,
  govt18,
  govt19,
  govt20,
  govt21,
  govt22,
  govt23,
  govt24,
];

const internationalPartners = [
  international2,
  international3,
  international4,
  international5,
  international6,
  international7,
  international8,
  international9,
  international10,
  international11,
  international12,
  international13,
  international14,
  international15,
  international16,
  international17,
  international18,
  international19,
];

const corporatePartners = [
  corporate,
  corporate2,
  corporate3,
  corporate4,
  corporate5,
  corporate6,
  corporate7,
];

function Partners() {
  return (
    <div>
      <section className="container mx-auto px-4 my-12">
        <div className="text-center mb-10">
          <h2
            data-aos="zoom-in"
            className="text-4xl py-2 font-bold bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent"
          >
            Our Partners, Our Strength
          </h2>
        </div>

        <div>
          <div className="text-center mb-10">
            <h3 className="text-base md:text-2xl py-2 font-semibold uppercase text-white bg-gradient-to-r from-blue-300 to-blue-800 ">
              Govt. & PSU Partners
            </h3>
          </div>
          <div data-aos="zoom-out">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
              {govtPartners.map((partner, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    width={300}
                    height={300}
                    className="border border-gray-100 px-2 rounded-lg shadow-md w-[85%] h-auto object-cover hover:shadow-xl hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="text-center mb-10">
            <h3 className="text-base md:text-2xl py-2 font-semibold uppercase text-white bg-gradient-to-r from-blue-300 to-blue-800 ">
              International Agencies & Organizational Partners
            </h3>
          </div>
          <div data-aos="zoom-out">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-4">
              {internationalPartners.map((partner, index) => (
                <div key={index} className="flex justify-center items-center">
                  <Image
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    width={300}
                    height={300}
                    className="border border-gray-100 px-2 rounded-lg shadow-md w-[85%] h-auto object-cover hover:shadow-xl hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="text-center mb-10">
            <h3 className="text-base md:text-2xl py-2 font-semibold uppercase text-white bg-gradient-to-r from-blue-300 to-blue-800 ">
              Corporates
            </h3>
          </div>
          <div data-aos="zoom-out">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 justify-center gap-4">
              {corporatePartners.map((partner, index) => (
                <div key={index} className="flex justify-center items-center ">
                  <Image
                    src={partner}
                    alt={`Partner ${index + 1}`}
                    width={300}
                    height={300}
                    className="border border-gray-100 px-2 rounded-lg shadow-md w-[85%] h-auto object-cover hover:shadow-xl hover:scale-110 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Partners;
