"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import bg from "@/public/assets/homewall.png";

const HomeSection = () => {
  return (
    <section className="relative w-full h-screen ">
      /* Background Image */
      <div
        style={{ backgroundImage: `url(${bg.src})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
      ></div>
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/10 z-0" /> */}
      {/* Content */}
      {/* <div className="relative z-10 flex flex-col items-center justify-center gap-2 text-center h-full px-4 text-white">
        <p className="text-xl sm:text-2xl md:text-5xl font-medium">
          Celebrate the spirit of
          <span className="text-yellow-400 font-semibold"> #ThanksGiving,</span>
        </p>
        <p className="text-xl sm:text-2xl md:text-5xl font-medium">
          by illuminating hope in vulnerable lives!
        </p>
        <p className=" sm:text-2xl md:text-4xl text-yellow-400 font-bold text-4xl">
          One Giving towards a new life!
        </p>
        <Link
          href="https://www.every.org/ladlifoundation-usa?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo#/donate"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 text-xl font-bold rounded-full transition"
        >
          Give Now
        </Link>
      </div> */}
    </section>
  );
};

export default HomeSection;
