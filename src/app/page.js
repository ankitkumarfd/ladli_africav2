import HomeSection from "@/components/HomeSection";
import Image from "next/image";
import aboutImage from "@/public/assets/aboutimage.png";
import Link from "next/link";
import React from "react";
import OurImpact from "@/components/OurImpact";
import OurInitiative from "@/components/OurInitiative";
import ladliimage from "@/public/assets/ladliindia.png";
import Dignitaries from "@/components/Dignitaries";
import Partners from "@/components/Partners";
import Photogrid from "@/components/Photogrid";
import AnimateOnScroll from "@/components/common/AOS/AnimateOnScroll";

const gridImages = [
  {
    id: 1,
    bg: "/assets/gridImage/grid1.webp",
    classes:
      "bg-cover bg-center rounded-lg col-span-12 sm:col-span-6 md:col-span-8 lg:col-span-4 lg:row-span-3 hover:scale-105 hover:shadow-lg transition-all duration-300",
  },
  {
    id: 2,
    bg: "/assets/gridImage/grid2.webp",
    classes:
      "bg-cover bg-center rounded-lg col-span-4 sm:col-span-6 md:col-span-3 lg:col-span-3 lg:row-span-2 hover:scale-105 hover:shadow-lg transition-all duration-300",
  },
  {
    id: 3,
    bg: "/assets/gridImage/grid3.webp",
    classes:
      "bg-cover bg-center rounded-lg col-span-8 sm:col-span-3 md:col-span-5 lg:col-span-3 lg:row-span-2 hover:scale-105 hover:shadow-lg transition-all duration-300",
  },
  {
    id: 4,
    bg: "/assets/gridImage/grid4.webp",
    classes:
      "bg-cover bg-center rounded-lg col-span-3 sm:col-span-3 md:col-span-4 lg:col-span-3 lg:row-span-3 hover:scale-105 hover:shadow-lg transition-all duration-300",
  },
  {
    id: 5,
    bg: "/assets/gridImage/grid5.webp",
    classes:
      "bg-cover bg-center rounded-lg col-span-9 sm:col-span-6 md:col-span-4 lg:col-span-3 lg:row-span-2 hover:scale-105 hover:shadow-lg transition-all duration-300",
  },
  {
    id: 6,
    bg: "/assets/gridImage/grid6.webp",
    classes:
      "bg-cover bg-center rounded-lg col-span-4 sm:col-span-6 md:col-span-3 lg:col-span-4 lg:row-span-2 hover:scale-105 hover:shadow-lg transition-all duration-300",
  },

  {
    id: 7,
    bg: "/assets/gridImage/grid7.webp",
    classes:
      "bg-cover bg-center rounded-lg col-span-8 sm:col-span-6 md:col-span-5 lg:col-span-3 lg:row-span-7 hover:scale-105 hover:shadow-lg transition-all duration-300",
  },
  {
    id: 8,
    bg: "/assets/gridImage/grid8.webp",
    classes:
      "bg-cover bg-center rounded-lg col-span-3 sm:col-span-6 md:col-span-4 lg:col-span-3 lg:row-span-6 hover:scale-105 hover:shadow-lg transition-all duration-300",
  },
  {
    id: 9,
    bg: "/assets/gridImage/grid9.webp",
    classes:
      "bg-cover bg-center rounded-lg col-span-9 sm:col-span-6 md:col-span-4 lg:col-span-4 lg:row-span-6 hover:scale-105 hover:shadow-lg transition-all duration-300",
  },
];

export const metadata = {
  title: "Ladli Foundation Africa | Advancing Health & Education",
  description: "Explore Ladli Foundation Africa delivering health, education, WASH, and protection programs empowering women and youth through partnerships with dignity",
  keywords: "Ladli Foundation Africa",
  alternates: {
    canonical: "https://africa.ladlifoundation.org/",
  },
};

export default function Home() {
  return (
    <div>
      <AnimateOnScroll>
        <main className="flex-grow">
          <HomeSection />

          <section className="container mx-auto px-4 my-12">
            <div className="max-w-7xl mx-auto">
              {/* Section Heading */}
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-br from-blue-300 to-blue-800 bg-clip-text text-transparent">
                  ABOUT LADLI AFRICA
                </h2>
              </div>

              {/* Two Column Layout */}
              <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Column - Text */}
                <div
                  data-aos="fade-right"
                  className="lg:w-1/2 text-gray-700 space-y-6 text-justify"
                >
                  <p>
                    {`Ladli Foundation Africa – South Africa is a dedicated wing of the internationally recognized Ladli Foundation Trust, India, an emerging international NGO experienced in directly impacting over 2 million beneficiaries through its innovative social initiatives, earning it a special consultative status in the Economic and Social Council since 2020. Founded in 2012 by a slum boy, who began his life as a child labourer, driven by the concern of protecting his sister from evil practices after their parents abandoned them in a crime-ridden slum during his childhood. We work at the intersection of public health, youth engagement, gender equality, and legal awareness, aiming to break cycles of poverty, inequality, and marginalization that disproportionately affect women, children, and adolescents in underserved communities.`}
                  </p>
                  <p className="text-justify">
                    {`Our mission is to uplift underserved South African communities through health education and empowerment initiatives, with a strong focus on youth. To create sustainable grassroots impact. As an extension of the internationally acclaimed Ladli Foundation, we are committed to advancing the rights, dignity, and well-being of women and children across Africa.`}
                  </p>
                  <Link
                    href="/know-more"
                    className="text-pink-600 font-semibold hover:underline text-lg inline-block"
                  >
                    Know more &rarr;
                  </Link>
                </div>

                {/* Right Column - Image */}
                <div data-aos="fade-left" className="lg:w-1/2 ">
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
              <div data-aos="zoom-in" className="text-center mb-12">
                <h2 className="text-4xl font-bold bg-gradient-to-br from-blue-300 to-blue-800 bg-clip-text text-transparent">
                  About Ladli Foundation Trust India
                </h2>
              </div>

              {/* Two Column Layout */}
              <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* Left Column - Text */}
                <div
                  data-aos="fade-right"
                  className="lg:w-1/2 text-gray-700 space-y-6 text-justify"
                >
                  <p>
                    About Ladli Foundation Trust India ​Ladli Foundation is a
                    grassroots-level non-profit organization known for bringing
                    positive reformative changes in society with a mission of
                    building a gender-sensitized inclusive society with equal
                    access to basic, essential amenities and services,
                    healthcare, education, workforce participation, etc by women
                    - the foundation has been diligently working in 50 districts
                    across 12 states in India. The organization is granted
                    special consultative status in United Nations ECOSOC and
                    conferred with the National Award by Govt. of India for
                    directly serving over one million beneficiaries through its
                    action-research-based projects by promoting sustainable
                    living for achieving UN SDGs.
                  </p>

                  <Link
                    href="/"
                    className="text-pink-600 font-semibold hover:underline text-lg inline-block"
                  >
                    Know more &rarr;
                  </Link>
                </div>

                {/* Right Column - Image */}
                <div
                  data-aos="fade-left"
                  className="lg:w-1/2 hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-3 transition-all duration-300"
                >
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

          <Photogrid heading={"Glimpses"} bgImage={gridImages} />

          <section className="bg-gradient-to-r from-blue-800 to-blue-300">
            <div className="w-full flex flex-col lg:flex-row  justify-between items-center py-12 container mx-auto px-4 mt-12 ">
              <div className="w-full lg:w-[50%] text-center mb-10">
                <h2 className="text-3xl lg:text-4xl py-2 text-white">
                  Are you passionate about making a positive impact on{" "}
                  <span className="font-bold text-yellow-300 text-5xl lg:text-6xl">
                    society?
                  </span>
                </h2>
              </div>
              <div data-aos="zoom-out">
                <button className="font-medium bg-gray-100 rounded-full text-base lg:text-xl px-7 lg:px-10 py-4 lg:py-6 hover:bg-pink-600 hover:text-white hover:scale-3d hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  YES! I WANT TO HELP
                </button>
              </div>
            </div>
          </section>
        </main>
      </AnimateOnScroll>
    </div>
  );
}
