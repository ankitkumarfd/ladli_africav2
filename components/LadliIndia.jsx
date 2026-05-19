import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Sprout, Award } from "lucide-react";
import ladliimage from "@/public/assets/ladliindia.png";

function StatPill({ icon: Icon, bg, ring, iconBg, number, label }) {
  return (
    <div
      className={`${bg} ${ring} ring-1 rounded-xl py-2 px-3 flex items-center gap-3`}
    >
      <div
        className={`${iconBg} w-9 h-9 rounded-full flex items-center justify-center shrink-0`}
      >
        <Icon size={18} className="text-white" strokeWidth={2.2} />
      </div>
      <div className="leading-tight">
        <div className="font-bold text-gray-900 text-sm whitespace-nowrap">
          {number}
        </div>
        <div className="text-gray-600 text-xs mt-0.5">{label}</div>
      </div>
    </div>
  );
}

function LadliIndia() {
  return (
    <section className="container mx-auto px-4 lg:px-12 my-16 lg:my-24">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-gray-100 p-6 sm:p-10 lg:p-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left — copy + stats */}
          <div data-aos="fade-right">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-px bg-pink-500" />
              <span className="text-pink-600 font-semibold text-xs tracking-[0.2em] uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-3">
              About Ladli Foundation Trust India
            </h2>
            <div className="h-1 w-20 bg-pink-500 rounded-full mb-6 lg:mb-8" />

            <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Ladli Foundation is a grassroots-level non-profit organization
                known for bringing positive reformative changes in society with
                a mission of building a gender-sensitized inclusive society
                with equal access to basic, essential amenities and services,
                healthcare, education, workforce participation, etc by women —
                the foundation has been diligently working in 50 districts
                across 12 states in India.
              </p>
              <p>
                The organization is granted special consultative status in
                United Nations ECOSOC and conferred with the National Award by
                Govt. of India for directly serving over one million
                beneficiaries through its action-research-based projects by
                promoting sustainable living for achieving UN SDGs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <StatPill
                icon={Users}
                bg="bg-blue-50"
                ring="ring-blue-100"
                iconBg="bg-blue-500"
                number="50+ Districts"
                label="Across 12 States"
              />
              <StatPill
                icon={Sprout}
                bg="bg-emerald-50"
                ring="ring-emerald-100"
                iconBg="bg-emerald-500"
                number="1 Million+"
                label="Beneficiaries Served"
              />
              <StatPill
                icon={Award}
                bg="bg-violet-50"
                ring="ring-violet-100"
                iconBg="bg-violet-500"
                number="National Award"
                label="By Govt. of India"
              />
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-md"
            >
              Know more
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right — image */}
          <div data-aos="fade-left" className="relative">
            <Image
              src={ladliimage}
              alt="Ladli Foundation Trust India"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-2xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LadliIndia;
