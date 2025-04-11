import React from "react";
import bg from "@/public/assets/homewall.jpg";
import {
  TypographyH3,
  TypographyH2,
  TypographyH1,
  TypographyP,
} from "@/components/custom/Typhographies";
import Image from "next/image";
import wash1 from "@/public/assets/initiatives/wash-awareness/wash1.jpg";
import bg_wash from "@/public/assets/bg/bg_wash.jpg";

function page() {
  return (
    <main className="flex-grow ">
      <div className="relative w-full h-[85vh] overflow-hidden home mb-12">
        /* Background Image */
        <div
          style={{ backgroundImage: `url(${bg_wash.src})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[85vh]"
        ></div>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/60 z-0 h-[85vh]" /> */}
      </div>

      <section className="container mx-auto px-4 my-5">
        <div className="text-center mb-16">
          <TypographyH1 className="">
            Strengthening WASH Infrastructure & Awareness in Schools
          </TypographyH1>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row justify-between"
          data-aos="fade-right"
        >
          <div className="w-full lg:w-[60%]">
            <div>
              <TypographyH3 className="">{`SUMMARY`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Access to clean water, proper sanitation, and hygiene (WASH) facilities is a fundamental right and a prerequisite for a safe and healthy school environment. However, many government and low-income private schools in India still lack basic infrastructure—especially gender-segregated toilets, handwashing stations, and menstrual waste disposal units. This severely affects children’s health, dignity, and school attendance—particularly for adolescent girls.`}
              </TypographyP>
              <TypographyP className="mt-2 ">
                {`Ladli Foundation’s initiative aims to build inclusive, sustainable WASH infrastructure in schools while fostering hygiene awareness and behavioral change among students, teachers, and communities.`}
              </TypographyP>
            </div>

            <div className="mt-10">
              <TypographyH3>{`CHALLENGES`}</TypographyH3>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Inadequate Sanitation Infrastructure : `}</span>
                    {`Many schools lack functional, safe, and separate toilets for girls and boys.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Unhygienic Conditions : `}</span>
                    {`Poorly maintained washrooms, lack of water supply, and absence of menstrual waste disposal systems create an unsafe environment for students.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Lack of Hygiene Awareness : `}</span>
                    {`Children often grow up without handwashing habits or knowledge about personal hygiene and water-borne diseases.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`High Dropout Among Adolescent Girls : `}</span>
                    {`Girls tend to skip school or drop out entirely due to poor toilet facilities, especially during menstruation.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Limited Community Ownership : `}</span>
                    {`WASH facilities often deteriorate due to lack of maintenance and accountability.`}
                  </TypographyP>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <TypographyH3>{`OUR ACTION (Utilization of your donation)`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Your generous support will help us :`}
              </TypographyP>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Construct and Renovate School Toilets : `}</span>
                    {`Build child-friendly, gender-segregated, and accessible toilets with running water.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Install Handwashing Stations : `}</span>
                    {`Set up low-cost, high-impact handwashing units with soap near classrooms and kitchens.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Provide Menstrual Waste Management Solutions : `}</span>
                    {`Install incinerators and bins in girls' toilets to ensure safe disposal of sanitary pads.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Run Hygiene Education Sessions : `}</span>
                    {`Conduct interactive workshops on hand hygiene, personal cleanliness, menstrual hygiene, and safe sanitation practices.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Train School Staff and Students as Hygiene Ambassadors : `}</span>
                    {`Build a culture of cleanliness through leadership, peer-to-peer learning, and regular cleanliness drives.`}
                  </TypographyP>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <TypographyH3 className="uppercase">{`Trusted and Reliable`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Ladli Foundation has consistently implemented school-based WASH programs in underserved urban and rural areas, creating long-term partnerships with local governments, panchayats, and school administrations. Our work is guided by sustainability, dignity, and inclusivity—ensuring that every child, especially every girl, has access to a safe and hygienic learning environment.`}
              </TypographyP>
            </div>

            <div className="mt-10">
              <TypographyH3 className="uppercase">{`Ladli Foundation’s Proven Track Record`}</TypographyH3>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Successfully implemented `}{" "}
                    <span className="font-semibold">{`WASH and MHM programs in 400+ schools`}</span>{" "}
                    {`across India`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Partnered with`}{" "}
                    <span className="font-semibold">{`municipal corporations, police departments, and school boards`}</span>{" "}
                    {`for large-scale hygiene campaigns`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Created model WASH spaces that improved`}{" "}
                    <span className="font-semibold">{`attendance of girl students by up to 70%`}</span>{" "}
                  </TypographyP>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full mb-5 lg:w-[35%]" data-aos="fade-left">
            <div className=" ">
              <Image
                priority
                src={wash1}
                alt="kids"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-auto object-cover shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
