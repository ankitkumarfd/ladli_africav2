import React from "react";
import Link from "next/link";

function FinalCTA() {
  return (
    <section className="container mx-auto px-4 lg:px-12 my-16 lg:my-24">
      <div
        data-aos="zoom-in"
        className="relative overflow-hidden rounded-[32px] bg-pink-600 text-white px-6 sm:px-10 lg:px-16 py-14 lg:py-20 text-center"
      >
        <div className="absolute inset-0 bg-linear-to-r from-pink-700/40 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-5">
            Let's make a lasting difference together!
          </h2>
          <p className="text-base lg:text-lg text-white/90 mb-10">
            Join our global network of volunteers and donors to create a more
            equitable world for everyone.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/donate"
              className="bg-white text-pink-600 hover:bg-gray-100 px-10 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
            >
              Get Involved
            </Link>
            <Link
              href="/about/about-us"
              className="border-2 border-white text-white hover:bg-white/10 px-10 py-4 rounded-full font-semibold transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
