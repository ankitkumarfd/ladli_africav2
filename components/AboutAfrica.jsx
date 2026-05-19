import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import aboutImage from "@/public/assets/aboutimage.png";

function AboutAfrica() {
  return (
    <section className="container mx-auto px-4 lg:px-12 my-16 lg:my-24">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — copy */}
        <div data-aos="fade-right">
          <span className="text-pink-600 font-semibold text-sm tracking-[0.2em] uppercase mb-4 block">
            International Impact
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Ladli Africa
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-8">
            Ladli Africa, the South African wing of the Ladli Foundation, brings
            our proven grassroots model to local communities. We focus on
            dismantling systemic barriers through integrated health and
            educational support.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-pink-600/10 text-pink-600 flex items-center justify-center shrink-0">
                <Check size={16} strokeWidth={3} />
              </span>
              <span className="text-gray-800 text-base lg:text-lg">
                Community-led developmental programs
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-pink-600/10 text-pink-600 flex items-center justify-center shrink-0">
                <Check size={16} strokeWidth={3} />
              </span>
              <span className="text-gray-800 text-base lg:text-lg">
                Advocacy for sustainable social reform
              </span>
            </li>
          </ul>

          <Link
            href="/know-more"
            className="inline-flex items-center gap-2 text-pink-600 font-semibold group"
          >
            Learn more about Africa initiative
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Right — image with tilted backdrop */}
        <div data-aos="fade-left" className="relative group">
          <div className="absolute -inset-3 lg:-inset-4 bg-pink-100/70 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500" />
          <Image
            src={aboutImage}
            alt="About Ladli Africa"
            width={720}
            height={540}
            className="relative rounded-xl shadow-xl w-full aspect-[4/3] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutAfrica;
