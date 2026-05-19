"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart, Quote } from "lucide-react";

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

const dignitariesData = [
  {
    name: "H. H. Swami Avdheshanand Giri",
    designation:
      "International Saint, Acharya Mahamandleshwar & Junapeethadhishwar",
    img: swamiji,
    testimonial:
      "I sincerely appreciate the endless devotion of team Ladli for enhancing the quality of life of socially victimized females. The efforts of the Ladli Foundation present the Vedic Proclamation of preservation of a woman's respect and dignity promptly and realize the dream of 'Beti Bachao Beti Padhao'.",
  },
  {
    name: "Smt. Droupadi Murmu",
    designation: "Hon'ble 15th President of India",
    img: droupadiMurmu,
    testimonial:
      "Ladli Foundation's tireless efforts in upliftment through grassroots work are a beacon of hope. Their dedication to the upliftment of the most vulnerable population is a remarkable model of driving positive change. Their work stands as a testament to the transformative power of compassion and action.",
  },
  {
    name: "Shri Ram Nath Kovind",
    designation: "Hon'ble 14th President of India",
    img: ramNathKovind,
    testimonial:
      "I congratulate the Ladli Foundation for their commendable works and tireless efforts for the upliftment of the most vulnerable and oppressed population. Their initiatives are innovative, impactful, and inspiring. Ladli Foundation's revolutionary initiative like Run For Laadli has great potential to create a Gender Neutral Society.",
  },
  {
    name: "Late Shri Pranab Mukherjee",
    designation: "Hon'ble 13th President of India (Bharat Ratna)",
    img: pranabMukherjee,
    testimonial:
      "The grassroots initiatives of the Ladli Foundation demonstrate their unwavering commitment and profound impact on vulnerable communities. Their commitment to equal healthcare, education, and empowerment is absolutely inspirational. Their art expresses a vision that is in line with humanity's highest ideals.",
  },
  {
    name: "Mr. Amit Shah",
    designation: "Hon'ble Home Minister of India (2019 - till Date)",
    img: amitShah,
    testimonial:
      "The Ladli Foundation's dedication to providing a brighter future for orphaned females is not only commendable but also a source of inspiration. Organizing the Mass Marriages Events for destitute females stands as a remarkable example of their unwavering commitment to our society. I extend my heartfelt gratitude to the Ladli Foundation.",
  },
  {
    name: "Mr. Rajnath Singh",
    designation:
      "Hon'ble Defence Minister of India (2019 - till Date), Ex. Home Minister (2014 - 2019)",
    img: rajnathSingh,
    testimonial:
      "I am not here to inaugurate this mega event or to deliver any speech. I am here to join and support this revolutionary initiative and give honor to this cause. By providing any address no one can create the motivation, but it can only be created by the work done at ground level.",
  },
  {
    name: "Shri Thawarchand Gehlot",
    designation: "Hon'ble Governor of Karnataka",
    img: thawarchandGehlot,
    testimonial:
      "Ladli Foundation has created and implemented the model of the World's Largest Social Adoption Campaign which ensures the holistic development of underprivileged girls by performing their Kanyapujan rituals by senior public dignitaries and elite professionals.",
  },
  {
    name: "Mr. Amitabh Bachchan",
    designation: "World Famous Actor & Padma Vibhushan",
    img: amitabhBachchan,
    testimonial:
      "I congratulate Ladli Foundation for conceptualizing a World Record Campaign 'Run for Laadli' to create mass awareness about crucial issues like Gender Equality and Women's Safety.",
  },
  {
    name: "Ms. Geeta Mittal",
    designation: "Hon'ble First Women Chief Justice of Jammu & Kashmir",
    img: geetaMittal,
    testimonial:
      "Ladli Foundation's innovative initiatives and passion for bringing positive change to the lives of disadvantaged women and children are truly inspiring. Their tireless efforts in promoting gender equality and empowering vulnerable communities are remarkable.",
  },
  {
    name: "Mr. R. Subrahmanyam",
    designation: "Ex-Secretary, Dept of Social Justice, Govt of India",
    img: subrahmanyam,
    testimonial:
      "The Ladli Foundation's commitment to advancing the rights and well-being of marginalized populations is truly commendable. Their innovative initiatives and unwavering dedication are a testament to their passion and commitment to creating a better world.",
  },
  {
    name: "Ms. Shakuntala Gamlin",
    designation:
      "Ex-Secretary, Dept of Empowerment of Persons with Disabilities, Govt of India",
    img: shakuntalaGamlin,
    testimonial:
      "Ladli Foundation's relentless efforts in creating awareness and providing support to marginalized communities are truly inspiring. Their innovative initiatives and dedication to their cause are a testament to their passion and commitment to making a difference.",
  },
  {
    name: "Mr. Amulya Patnaik",
    designation: "Ex-Commissioner of Police, Delhi",
    img: amulyaPatnaik,
    testimonial:
      "Ladli Foundation's dedication to empowering disadvantaged women and children is truly commendable. Their innovative initiatives and tireless efforts in promoting gender equality and social justice are an inspiration to us all.",
  },
  {
    name: "Mr. Devesh Srivastava",
    designation: "Ex-Special Commissioner of Police, Delhi",
    img: deveshShrivastva,
    testimonial:
      "Ladli Foundation's tireless efforts in promoting gender equality and empowering vulnerable communities are truly commendable. Their innovative initiatives and dedication are a testament to their passion and commitment to making a difference.",
  },
  {
    name: "Ms. Joanna Kempers",
    designation: "Chairperson, Delhi Commission for Women",
    img: joannaKempers,
    testimonial:
      "Ladli Foundation's relentless efforts in creating awareness and providing support to marginalized communities are truly inspiring. I am proud to support their work and wish them continued success in their mission.",
  },
  {
    name: "Mr. Vicky Kaushal",
    designation: "Actor",
    img: vickyKaushal,
    testimonial:
      "Ladli Foundation's commitment to empowering disadvantaged women and children is truly commendable. Their innovative initiatives and tireless efforts in promoting gender equality and social justice are an inspiration to us all.",
  },
];

function DignitaryCard({ item }) {
  return (
    <div className="group [perspective:1200px] h-[30rem] lg:h-[32rem]">
      <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* FRONT */}
        <article className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] bg-white rounded-2xl border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] p-3 flex flex-col">
          <div className="relative h-64 lg:h-86 overflow-hidden rounded-xl shrink-0">
            <Image
              src={item.img}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
              className="object-cover"
            />
          </div>

          <div className="px-3 pt-6 pb-4 flex flex-col flex-1 text-center justify-center min-h-0">
            <h3 className="font-bold text-gray-900 text-base lg:text-lg mb-3 leading-snug">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {item.designation}
            </p>
          </div>
        </article>

        {/* BACK */}
        <article className="absolute inset-0 [-webkit-backface-visibility:hidden] [backface-visibility:hidden] [transform:rotateY(180deg)] bg-linear-to-br from-pink-600 to-rose-700 text-white rounded-2xl shadow-[0_12px_30px_rgba(0,0,0,0.12)] p-6 flex flex-col">
          <Quote
            size={32}
            className="text-pink-200 mb-4 shrink-0"
            strokeWidth={2.2}
            aria-hidden="true"
          />

          <p className="text-sm leading-relaxed flex-1 overflow-y-auto pr-1 [scrollbar-width:thin]">
            {item.testimonial}
          </p>

          <div className="pt-4 mt-4 border-t border-white/25 shrink-0">
            <div className="font-bold text-sm leading-tight">{item.name}</div>
            <div className="text-xs text-pink-100 mt-1 line-clamp-2">
              {item.designation}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

function Dignitaries() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-12 h-px bg-pink-300" />
            <Heart size={16} className="text-pink-500 fill-pink-500" />
            <span className="w-12 h-px bg-pink-300" />
          </div>
          <h2
            data-aos="zoom-in"
            className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            Dignitaries Testimonials
          </h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Your generous support has the power to bring smiles to the faces of
            vulnerable populations! We anticipate your kindness to uplift and
            include them socially.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-2 lg:px-10">
          <button
            ref={prevRef}
            aria-label="Previous dignitary"
            className="absolute left-0 lg:-left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-lg transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            aria-label="Next dignitary"
            className="absolute right-0 lg:-right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-lg transition-all"
          >
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            loop
            breakpoints={{
              0: { slidesPerView: 1.1 },
              480: { slidesPerView: 1.3 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="!pb-2 [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto"
          >
            {dignitariesData.map((item, index) => (
              <SwiperSlide key={index}>
                <DignitaryCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Dignitaries;
