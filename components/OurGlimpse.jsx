import React from "react";
import Link from "next/link";

function OurGlimpse({
  images = [
    "/assets/gridImage/grid1.webp",
    "/assets/gridImage/grid5.webp",
    "/assets/gridImage/grid7.webp",
  ],
  viewAllHref = "/about/about-us",
}) {
  const [hero, top, bottom] = images;

  return (
    <section className="container mx-auto px-4 lg:px-12 my-16 lg:my-24">
      <div
        data-aos="fade-up"
        className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 mb-10 lg:mb-12"
      >
        <div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-2">
            Our Glimpse
          </h2>
          <p className="text-gray-600 text-base lg:text-lg">
            Moments of impact captured across the globe.
          </p>
        </div>
        <Link
          href={viewAllHref}
          className="self-start sm:self-auto bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-semibold text-sm transition-colors"
        >
          View All
        </Link>
      </div>

      <div
        data-aos="zoom-in"
        className="grid grid-cols-12 gap-4 h-[420px] sm:h-[520px] lg:h-[600px]"
      >
        <div
          className="col-span-12 sm:col-span-8 h-full rounded-2xl bg-cover bg-center shadow-sm hover:shadow-lg transition-shadow"
          style={{ backgroundImage: `url(${hero})` }}
          role="img"
          aria-label="Community impact"
        />
        <div className="col-span-12 sm:col-span-4 grid grid-rows-2 gap-4 h-full">
          <div
            className="rounded-2xl bg-cover bg-center shadow-sm hover:shadow-lg transition-shadow"
            style={{ backgroundImage: `url(${top})` }}
            role="img"
            aria-label="Field work"
          />
          <div
            className="rounded-2xl bg-cover bg-center shadow-sm hover:shadow-lg transition-shadow"
            style={{ backgroundImage: `url(${bottom})` }}
            role="img"
            aria-label="Community engagement"
          />
        </div>
      </div>
    </section>
  );
}

export default OurGlimpse;
