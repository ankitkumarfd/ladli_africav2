import HomeSection from "@/components/HomeSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import OurImpact from "@/components/OurImpact";
import OurInitiative from "@/components/OurInitiative";
import aboutImage from "@/public/assets/aboutimage.jpg";
import ladliimage from "@/public/assets/ladliindia.jpg";
import Dignitaries from "@/components/Dignitaries";
import Partners from "@/components/Partners";

export default function Home() {
  return (
    <div>
      <HomeSection />

      <section className="container mx-auto px-4 my-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-br from-blue-300 to-blue-800 bg-clip-text text-transparent">
              About Ladli AFRICA
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left Column - Text */}
            <div className="lg:w-1/2 text-gray-700 space-y-6 text-justify">
              <p>
                Ladli Foundation USA, a women-led non-profit organization,
                serves as the United States chapter of Ladli Foundation Trust,
                India, an emerging international NGO experienced in directly
                impacting over 2 million beneficiaries through its innovative
                social initiatives, earning it a special consultative status in
                the Economic and Social Council since 2020. Founded in 2012 by a
                slum boy, who began his life as a child laborer, driven by the
                concern of protecting his sister from evil practices after their
                parents abandoned them in a crime-ridden slum during his
                childhood.
              </p>
              <p className="text-justify">
                Committed to the advancement of the One Earth-One Health
                approach, Ladli Foundation USA leads transformative and
                sustainable social projects. Its focus areas include providing
                equitable access to healthcare, education, life skills, and
                mental well-being, particularly targeting vulnerable women and
                youth. It also aims to raise global awareness by promoting
                ancient Indian traditional practices for sustainable living
                worldwide, under the patronage of H.H. Swami Avdheshannad Giri,
                an International Spiritual Leader, Vedanta Scholar, and the
                Chief of India's oldest ascetic tradition.
              </p>
              <Link
                href="/"
                className="text-pink-600 font-semibold hover:underline text-lg inline-block"
              >
                Know more &rarr;
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2">
              <Image
                src={aboutImage}
                alt="About Ladli Africa"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <OurImpact />

      <OurInitiative />

      <section className="container mx-auto px-4 my-12">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-br from-blue-300 to-blue-800 bg-clip-text text-transparent">
              About Ladli Foundation Trust India
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left Column - Text */}
            <div className="lg:w-1/2 text-gray-700 space-y-6 text-justify">
              <p>
                About Ladli Foundation Trust India ​Ladli Foundation is a
                grassroots-level non-profit organization known for bringing
                positive reformative changes in society with a mission of
                building a gender-sensitized inclusive society with equal access
                to basic, essential amenities and services, healthcare,
                education, workforce participation, etc by women - the
                foundation has been diligently working in 50 districts across 12
                states in India. The organization is granted special
                consultative status in United Nations ECOSOC and conferred with
                the National Award by Govt. of India for directly serving over
                one million beneficiaries through its action-research-based
                projects by promoting sustainable living for achieving UN SDGs.
              </p>

              <Link
                href="/"
                className="text-pink-600 font-semibold hover:underline text-lg inline-block"
              >
                Know more &rarr;
              </Link>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-1/2">
              <Image
                src={ladliimage}
                alt="About Ladli India"
                width={600}
                height={400}
                className="rounded-lg shadow-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Dignitaries />

      <Partners />
    </div>
  );
}
