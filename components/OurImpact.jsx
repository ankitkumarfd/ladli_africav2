import React from "react";
import {
  Users,
  Lightbulb,
  HandHeart,
  CalendarCheck,
  HandCoins,
  Gift,
  GraduationCap,
  BriefcaseMedical,
  Megaphone,
  Heart,
} from "lucide-react";
import AnimateOnScroll from "./common/AOS/AnimateOnScroll";
import AnimatedCounter from "./AnimatedCounter";

const impactStats = [
  { icon: Users, number: "100K+", label: "Youth Volunteers Trained" },
  { icon: Lightbulb, number: "22", label: "Social Innovations" },
  { icon: HandHeart, number: "2.5M+", label: "Beneficiaries Served" },
  { icon: CalendarCheck, number: "19", label: "Mega Events Organised" },
  { icon: HandCoins, number: "$4M+", label: "Financial Support Utilized" },
  { icon: Gift, number: "$75M+", label: "In Kind Support Delivered" },
  {
    icon: GraduationCap,
    number: "3000+",
    label: "School / College Activities Organized",
  },
  {
    icon: BriefcaseMedical,
    number: "450+",
    label: "Medical Camps in Slums Organized",
  },
  { icon: Megaphone, number: "2200+", label: "Awareness Workshops Conducted" },
];

function OurImpact() {
  return (
    <AnimateOnScroll>
      <section className="relative bg-linear-to-b from-slate-50 via-blue-50/30 to-slate-50 py-16 lg:py-24 overflow-hidden">
        {/* Decorative dot pattern (top-left) */}
        <div
          className="absolute top-12 left-6 lg:left-10 w-40 h-40 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #94a3b8 1px, transparent 1px)",
            backgroundSize: "14px 14px",
          }}
        />
        {/* Decorative dot pattern (bottom-left small) */}
        <div
          className="absolute bottom-20 left-4 w-24 h-24 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
        />
        {/* Soft blobs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-4 lg:px-12">
          {/* Header */}
          <div data-aos="zoom-in" className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
              Our Impact
            </h2>
            <p className="text-gray-600 text-sm lg:text-base uppercase tracking-[0.2em] font-medium">
              Till Now We Have Directly Impacted
            </p>

            {/* The headline number — the eye-catcher */}
            <div className="relative inline-flex items-end gap-3 mt-4 lg:mt-3">
              <span className="absolute inset-x-0 -bottom-2 mx-auto h-3 w-3/4 bg-pink-200/50 blur-2xl rounded-full" />
              <AnimatedCounter
                end={3096943}
                className="relative text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-linear-to-br from-pink-500 via-pink-600 to-rose-600 bg-clip-text text-transparent tracking-tight leading-none drop-shadow-[0_2px_2px_rgba(190,24,93,0.15)]"
              />
              <span className="relative text-lg lg:text-xl font-bold text-gray-700 pb-0.5">
                People
              </span>
            </div>

            <div className="flex items-center justify-center gap-3 mt-6 lg:mt-8">
              <span className="w-16 h-px bg-pink-300" />
              <Heart size={16} className="text-pink-500 fill-pink-500" />
              <span className="w-16 h-px bg-pink-300" />
            </div>
          </div>

          {/* Cards grid — 5 on top row, 4 centered on bottom row at lg+ */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-10 gap-5 lg:gap-6"
          >
            {impactStats.map(({ icon: Icon, number, label }, index) => (
              <div
                key={index}
                className={`lg:col-span-2 ${
                  index === 5 ? "lg:col-start-2" : ""
                } group bg-white rounded-2xl p-6 lg:p-7 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_14px_32px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center`}
              >
                <div className="bg-pink-50 w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="text-pink-600" size={30} strokeWidth={1.75} />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-pink-600 mb-2 leading-tight">
                  {number}
                </div>
                <div className="text-gray-600 text-sm lg:text-base leading-snug">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimateOnScroll>
  );
}

export default OurImpact;
