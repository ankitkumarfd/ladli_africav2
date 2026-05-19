"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import bg from "@/public/assets/homewall.png";

const HomeSection = () => {
  return (
    <section className="relative w-full h-[70vh] min-h-[520px] lg:h-[88vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bg}
          alt="Ladli Africa hero background"
          fill
          priority
          className="object-cover"
        />
        {/* Gradient overlay for legibility */}
        <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/20" />
      </div>

      <div className="relative w-full container mx-auto px-4 lg:px-12 pt-20 lg:pt-24">
        <div className="max-w-2xl text-white">
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-md"
          >
            Empowering children,
            <br className="hidden sm:block" /> transforming lives with dignity
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 lg:mt-7 text-base lg:text-lg text-white/90 max-w-xl"
          >
            A global movement dedicated to social reform through gender
            equality, healthcare, and education for the most vulnerable
            populations.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/donate"
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              Donate Now
            </Link>
            <Link
              href="/about/about-us"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border-2 border-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
