"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css";
import Image from "next/image";
import initiative1 from "@/public/assets/initiatives/initiative1.jpg";
import initiative2 from "@/public/assets/initiatives/initiative2.jpg";
import initiative3 from "@/public/assets/initiatives/initiative3.jpg";
import initiative4 from "@/public/assets/initiatives/initiative4.jpg";

import swamiji from "@/public/assets/dignitaries/swamiji.jpg";
import pranabMukherjee from "@/public/assets/dignitaries/pranab-mukherjee.jpg";
import ramNathKovind from "@/public/assets/dignitaries/ram-nath-kovind.jpg";
import droupadiMurmu from "@/public/assets/dignitaries/droupadi-murmu.jpg";
import amitShah from "@/public/assets/dignitaries/amit-shah.jpg";
import rajnathSingh from "@/public/assets/dignitaries/rajnath-singh.jpg";
import thawarchandGehlot from "@/public/assets/dignitaries/thawarchand-gehlot.jpg";
import amitabhBachchan from "@/public/assets/dignitaries/amitabh-bachchan.jpg";
import geetaMittal from "@/public/assets/dignitaries/geeta-mittal.jpg";
import subrahmanyam from "@/public/assets/dignitaries/subrahmanyam.jpg";
import shakuntalaGamlin from "@/public/assets/dignitaries/shakuntala-gamlin.jpg";
import amulyaPatnaik from "@/public/assets/dignitaries/amulya-patnaik.jpg";
import deveshShrivastva from "@/public/assets/dignitaries/devesh-shrivastva.jpg";
import joannaKempers from "@/public/assets/dignitaries/joanna-kempers.jpg";
import vickyKaushal from "@/public/assets/dignitaries/vicky-kaushal.jpg";

const initiatives = [
  {
    title: "Give Social Protection to Vulnerable Women",
    description:
      "Shagun is a word derived from Sanskrit that means auspicious, good omen, or blessing. Shagun, or the offering of gifts, is a way of bringing blessings and harmony to people's lives.",
    image: initiative1,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/social-security-for-vulnerable-women",
  },
  {
    title: "Digital Divide for marginalized Education",
    description:
      "Empowering drop-outs and out-of-school students by providing quality education and a dignified future through unique mobile classes and sensitization workshops.",
    image: initiative2,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/digital-divide-for-marginalized-education",
  },
  {
    title: "Give a new life to GBV survivors​",
    description:
      "Supporting gender-based violence survivors to build their Resilience through Dance, Yoga, meditation, and counseling",
    image: initiative3,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/supporting-gbv-survivors",
  },
  {
    title: "My Village is My Pilgrimage​",
    description:
      "Aims to reconnect overseas Indian youth with their roots and prevent cultural isolation.",
    image: initiative4,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/my-village-is-my-pilgrimage",
  },
  {
    title: "Give Social Protection to Vulnerable Women",
    description:
      "Shagun is a word derived from Sanskrit that means auspicious, good omen, or blessing. Shagun, or the offering of gifts, is a way of bringing blessings and harmony to people's lives.",
    image: initiative1,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/social-security-for-vulnerable-women",
  },
  {
    title: "Digital Divide for marginalized Education",
    description:
      "Empowering drop-outs and out-of-school students by providing quality education and a dignified future through unique mobile classes and sensitization workshops.",
    image: initiative2,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/digital-divide-for-marginalized-education",
  },
  {
    title: "Give a new life to GBV survivors​",
    description:
      "Supporting gender-based violence survivors to build their Resilience through Dance, Yoga, meditation, and counseling",
    image: initiative3,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/supporting-gbv-survivors",
  },
  {
    title: "My Village is My Pilgrimage​",
    description:
      "Aims to reconnect overseas Indian youth with their roots and prevent cultural isolation.",
    image: initiative4,
    contributeLink: "/contribute",
    readMoreLink: "/initiatives/my-village-is-my-pilgrimage",
  },
];

const dignitariesData = [
  {
    id: "1",
    name: "H. H.Swami Avdheshanand Giri",
    designation:
      "International Saint, Acharya Mahamandleshwar & Junapeethadhishwar",
    data: "I sincerely appreciate the endless devotion of team Ladli for enhancing the quality of life of socially victimized females. The efforts of the Ladli Foundation present the Vedic Proclamation of preservation of a woman's respect and dignity promptly and realize the dream of 'Beti Bachao Beti Padhao",
    img: swamiji,
  },
  {
    id: "2",
    name: "Smt. Droupadi Murmu",
    designation: "Hon'ble 15th President of India",
    data: "Ladli Foundation's tireless efforts in upliftment through grassroots work are a beacon of hope. Their dedication to the upliftment of the most vulnerable population is a remarkable model of driving positive change. Their work stands as a testament to the transformative power of compassion and action.",
    img: droupadiMurmu,
  },
  {
    id: "3",
    name: "Shri Ram Nath Kovind",
    designation: "Hon'ble 14th President of India",
    data: "I Congratulate the Ladli Foundation for their commendable works and tireless efforts for the upliftment of the most vulnerable and oppressed population. Their initiatives are innovative, impactful, and inspiring. Ladli Foundation's revolutionary initiative like Run For Laadli has great potential to Create a Gender Neutral Society. I congratulate them for their achievements and wish them success in their noble mission",
    img: ramNathKovind,
  },
  {
    id: "4",
    name: "Late Shri Pranab Mukherjee",
    designation: "Hon'ble 13th President of India (Bharat Ratna)",
    data: "The grassroots initiatives of the Ladli Foundation demonstrate their unwavering commitment and profound impact on vulnerable communities. Their commitment to equal healthcare, education, and empowerment is absolutely inspirational. Their art expresses a vision that is in line with humanity's highest ideals",
    img: pranabMukherjee,
  },
  {
    id: "5",
    name: "Mr. Amit Shah",
    designation: "Hon'ble Home Minister of India ( 2019 - till Date)",
    data: "The Ladli Foundation's dedication to providing a brighter future for orphaned females is not only commendable but also a source of inspiration for everyone fortunate enough to witness your efforts. Organizing The Mass Marriages Events for destitute females can provide social security which stands as a remarkable example of your unwavering commitment to our society. I would like to extend my heartfelt gratitude to the Ladli Foundation for your dedication to the betterment of our society.",
    img: amitShah,
  },
  {
    id: "6",
    name: "Mr. Rajnath Singh",
    designation:
      "Hon'ble Defence Minister of India ( 2019 - till Date) Ex. Home Minister of India (2014 - 2019",
    data: "I am not here to inaugurate this mega event or to deliver any speech. But I am here to join and support this revolutionary initiative and give honor to this cause. By providing any address no one can create the motivation, but it can only be created by the work done at ground level.",
    img: rajnathSingh,
  },
  {
    id: "7",
    name: "Shri Thawarchand Gehlot",
    designation: "Hon'ble Governor of Karnataka",
    data: "Ladli Foundation has created and implemented the model of the World’s Largest Social Adoption Campaign which ensures the holistic development of underprivileged girls by performing their Kanyapujan rituals by senior public dignitaries and elite professionals.",
    img: thawarchandGehlot,
  },
  {
    id: "8",
    name: "Mr. Amitabh Bachchan",
    designation: "World Famous Actor & Padma Vibhushan",
    data: "I Congratulate Ladli Foundation for conceptualizing a World Record Campaign “Run for Laadli” to create mass awareness about crucial issues like Gender Equality and Women’s Safety.",
    img: amitabhBachchan,
  },
  {
    id: "9",
    name: "Ms. Geeta Mittal",
    designation: "Hon'ble First Women Chief Justice of Jammu & Kashmir",
    data: "Ladli Foundation's innovative initiatives and passion for bringing positive change to the lives of disadvantaged women and children are truly inspiring. The organization's tireless efforts in promoting gender equality and empowering vulnerable communities are remarkable. I am confident that the foundation will continue to achieve great success in their mission and make a lasting impact on society.",
    img: geetaMittal,
  },
  {
    id: "10",
    name: "Mr. R. Subrahmanyam",
    designation: "Ex-Secretary, Dept of Social Justice, Govt of India",
    data: "The Ladli Foundation's commitment to advancing the rights and well-being of marginalized populations is truly commendable. Their innovative initiatives and unwavering dedication to their cause are a testament to their passion and commitment to creating a better world. I am proud to support their work and wish them continued success in their mission.",
    img: subrahmanyam,
  },
  {
    id: "11",
    name: "Ms. Shakuntala Gamlin",
    designation:
      "Ex-Secretary, Dept of Empowerment of Persons with Disabilities, Govt of India",
    data: "Ladli Foundation's relentless efforts in creating awareness and providing support to marginalized communities are truly inspiring. Their innovative initiatives and dedication to their cause are a testament to their passion and commitment to making a difference. I am proud to support their work and wish them continued success in their mission.",
    img: shakuntalaGamlin,
  },
  {
    id: "12",
    name: "Mr. Amulya Patnaik",
    designation: "Ex-Commissioner of Police, Delhi",
    data: "Ladli Foundation's dedication to empowering disadvantaged women and children is truly commendable. Their innovative initiatives and tireless efforts in promoting gender equality and social justice are an inspiration to us all. I am confident that the foundation will continue to achieve great success in their mission and make a lasting impact on society.",
    img: amulyaPatnaik,
  },
  {
    id: "14",
    name: "Mr. Devesh Srivastava",
    designation: "Ex-Special Commissioner of Police, Delhi",
    data: "Ladli Foundation's tireless efforts in promoting gender equality and empowering vulnerable communities are truly commendable. Their innovative initiatives and dedication to their cause are a testament to their passion and commitment to making a difference. I am proud to support their work and wish them continued success in their mission.",
    img: deveshShrivastva,
  },
  {
    id: "15",
    name: "Ms. Joanna Kempers",
    designation: "Chairperson, Delhi Commission for Women",
    data: "Ladli Foundation's relentless efforts in creating awareness and providing support to marginalized communities are truly inspiring. Their innovative initiatives and dedication to their cause are a testament to their passion and commitment to making a difference. I am proud to support their work and wish them continued success in their mission.",
    img: joannaKempers,
  },
  {
    id: "16",
    name: "Mr. Vicky Kaushal",
    designation: "Actor",
    data: "Ladli Foundation's commitment to empowering disadvantaged women and children is truly commendable. Their innovative initiatives and tireless efforts in promoting gender equality and social justice are an inspiration to us all. I am confident that the foundation will continue to achieve great success in their mission and make a lasting impact on society.",
    img: vickyKaushal,
  },
];

function Dignitaries() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 bg-gray-100">
      <div className="text-center mb-10">
        <h2
          data-aos="zoom-in"
          className="text-4xl py-2 font-bold bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent"
        >
          Dignitaries Testimonials
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
        // autoplay={{ delay: 3000, disableOnInteraction: false }}
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
        // modules={[Autoplay]}
        className="w-full h-full px-4 lg:px-0"
      >
        {dignitariesData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full md:max-w-[50vw] flex justify-center rounded-xl overflow-hidden relative group"
          >
            <div className="flip-card">
              <div className="flip-card-inner-dignitary">
                {/* Front Side */}
                <div className="flip-card-front bg-white rounded-xl shadow-lg p-4">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-[100%] h-[82%]"
                  />
                  <h3 className="text-blue-800 font-semibold text-base sm:text-lg lg:text-xl mt-4 text-center">
                    {item.name}
                  </h3>
                  <p className="text-sm lg:text-md text-gray-600 font-semibold text-center">
                    {item.designation}
                  </p>
                </div>

                {/* Back Side */}
                <div className="flip-card-back bg-pink-500 text-white rounded-xl shadow-xl flex flex-col justify-start p-4">
                  <div className="flex flex-col items-center justify-center">
                    <div className="w-[40%]">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={300}
                        height={300}
                        className="rounded-full object-cover w-[100%] "
                      />
                    </div>
                    <div className="w-full px-4">
                      <h3 className="text-white font-semibold text-base sm:text-base lg:text-lg text-center">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-700 font-semibold text-center">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                  <div className="overflow-y-auto">
                    <p className="text- bg-gray-200 p-3 rounded-md text-gray-700 mt-4 text-justify">
                      {item.data}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Dignitaries;
