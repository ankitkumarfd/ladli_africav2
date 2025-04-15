"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Link from "next/link";
import Image from "next/image";
import "./InitiativesSlider.css"; // Custom CSS for flip
import initiative1 from "@/public/assets/initiatives/initiative1.jpg";
import initiative2 from "@/public/assets/initiatives/initiative2.jpg";
import initiative3 from "@/public/assets/initiatives/initiative3.jpg";
import initiative4 from "@/public/assets/initiatives/initiative4.jpg";

import card_mhm from "@/public/assets/cards/card_mhm.png";
import card_wash from "@/public/assets/cards/card_wash.jpg";
import card_hiv from "@/public/assets/cards/card_hiv.jpg";

const initiativesData = [
  {
    title: "Empowering Girls through Menstrual Hygiene Management (MHM)",
    description:
      "The initiative aims to empower adolescent girls with knowledge, resources, and a supportive environment to manage menstruation with dignity and confidence.",
    image: card_mhm,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/mhm",
  },
  {
    title: "Advancing Sexual and Reproductive Health for School girls",
    description:
      "Empower schoolgirls with knowledge, life skills, and safe spaces to make informed decisions about their bodies and health—laying the foundation for confident, healthy, and empowered young women.",
    image: initiative2,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/advancing-srh",
  },
  {
    title: "Strengthening WASH Infrastructure & Awareness in Schools",
    description:
      "Support to build inclusive, sustainable WASH infrastructure in schools while fostering hygiene awareness and behavioural change among students, teachers, and communities",
    image: card_wash,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/wash-awareness",
  },
  {
    title:
      "Combating TB & HIV through Awareness and Early Detection for Adolescents in Schools",
    description:
      "School-based awareness and sensitization program designed to educate adolescents about TB and HIV prevention, symptoms, and the importance of empathy and non-discrimination. ",
    image: card_hiv,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/tb-and-hiv",
  },
  {
    title: "Empowering Girls through Menstrual Hygiene Management (MHM)",
    description:
      "The initiative aims to empower adolescent girls with knowledge, resources, and a supportive environment to manage menstruation with dignity and confidence.",
    image: card_mhm,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/mhm",
  },
  {
    title: "Advancing Sexual and Reproductive Health for School girls",
    description:
      "Empower schoolgirls with knowledge, life skills, and safe spaces to make informed decisions about their bodies and health—laying the foundation for confident, healthy, and empowered young women.",
    image: initiative2,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/advancing-srh",
  },
  {
    title: "Strengthening WASH Infrastructure & Awareness in Schools",
    description:
      "Support to build inclusive, sustainable WASH infrastructure in schools while fostering hygiene awareness and behavioural change among students, teachers, and communities",
    image: card_wash,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/wash-awareness",
  },
  {
    title:
      "Combating TB & HIV through Awareness and Early Detection for Adolescents in Schools",
    description:
      "School-based awareness and sensitization program designed to educate adolescents about TB and HIV prevention, symptoms, and the importance of empathy and non-discrimination. ",
    image: card_hiv,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/tb-and-hiv",
  },
];

export default function InitiativesSlider() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 bg-gray-100">
      <div className="text-center mb-10">
        <h2
          data-aos="zoom-in"
          className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent"
        >
          Our Initiatives
        </h2>
        <p className="text-lg mt-4 text-gray-700">
          Your generous support has the power to bring smiles to the faces of
          vulnerable populations!
          <br /> We anticipate your kindness to uplift and include them
          socially.
        </p>
      </div>

      <Swiper
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className="w-full h-full px-4 lg:px-0"
      >
        {initiativesData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full md:max-w-[50vw] flex justify-center rounded-xl overflow-hidden relative group"
          >
            <div className="flip-card ">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front bg-white rounded-xl shadow-lg p-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-[100%] h-[60%]"
                  />
                  <h3 className="text-blue-800 font-semibold text-base sm:text-lg lg:text-xl mt-4 text-center">
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-md text-gray-600 mt-2 text-center">
                    {item.description}
                  </p>
                </div>

                {/* Back Side */}
                <div className="flip-card-back bg-blue-700 rounded-xl shadow-xl flex flex-col justify-center items-center p-6 text-white">
                  <Link
                    href={item.contributeLink}
                    className="bg-white text-blue-700 font-semibold py-2 px-4 rounded-full mb-4 shadow-md hover:bg-gray-200 transition"
                  >
                    Contribute Now
                  </Link>
                  <Link
                    href={item.readMoreLink}
                    className="bg-white text-blue-700 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition text-center"
                  >
                    Read More
                    <br />
                    About the Initiative
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
