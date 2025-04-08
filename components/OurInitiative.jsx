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

const initiativesData = [
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

export default function InitiativesSlider() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent">
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
