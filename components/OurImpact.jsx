import React from "react";
import AnimateOnScroll from "./common/AOS/AnimateOnScroll";

function OurImpact() {
  return (
    <AnimateOnScroll>
      <section className="container mx-auto px-4 my-12">
        <div data-aos="zoom-in" className="text-center mb-2">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-blue-800 bg-clip-text text-transparent">
            Our Impact
          </h2>
        </div>
        <h2 className="text-xl lg:text-2xl text-center font-medium mb-12">
          Till Now We Have Directly Impacted{" "}
          <span className="text-blue-700 text-2xl lg:text-3xl font-bold">
            3,096,943
          </span>{" "}
          People
        </h2>

        <div className="max-w-7xl mx-auto space-y-10">
          <div
            data-aos="zoom-out"
            className="flex flex-wrap justify-center items-center gap-6"
          >
            <ImpactCard number="100K+" label="Youth Volunteers Trained" />
            <ImpactCard number="22" label="Social Innovations" />
            <ImpactCard number="2.5M+" label="Beneficiaries Served" />
            <ImpactCard number="19" label="Mega Events Organised" />
            <ImpactCard number="$4M+" label="Financial Support Utilized" />
            <ImpactCard number="$75M+" label="In Kind Support Delivered" />
            <ImpactCard
              number="3000+"
              label="School / College Activities Organized"
            />
            <ImpactCard
              number="450+"
              label="Medical Camps in Slums Organized"
            />
            <ImpactCard number="2200+" label="Awareness Workshops Conducted" />
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}

const ImpactCard = ({ number, label }) => {
  return (
    <div className="bg-blue-50 p-5 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all text-center">
      <h2 className="text-4xl font-bold text-blue-800">{number}</h2>
      <h4 className="mt-2 text-gray-700 text-sm sm:text-base">{label}</h4>
    </div>
  );
};

export default OurImpact;
