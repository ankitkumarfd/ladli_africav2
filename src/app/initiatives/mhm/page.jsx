import React from "react";
import bg from "@/public/assets/homewall.jpg";
import {
  TypographyH3,
  TypographyH2,
  TypographyH1,
  TypographyP,
} from "@/components/custom/Typhographies";
import Image from "next/image";
import kids from "@/public/assets/kids1.jpg";

function page() {
  return (
    <main className="flex-grow ">
      <div className="relative w-full h-[70vh] overflow-hidden home mb-12">
        /* Background Image */
        <div
          style={{ backgroundImage: `url(${bg.src})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[70vh]"
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0 h-[70vh]" />
      </div>

      <section className="container mx-auto px-4 my-5">
        <div className="text-center mb-16">
          <TypographyH1 className="">
            Empowering Girls through Menstrual Hygiene Management (MHM)
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
                {`Menstrual Hygiene Management (MHM) remains a neglected aspect of public health, particularly in rural and marginalized communities. The taboo surrounding menstruation leads to a lack of awareness, unsafe practices, school absenteeism, and severe health issues among adolescent girls.`}
              </TypographyP>
              <TypographyP className="mt-2 ">
                {`Ladli Foundation’s initiative aims to empower adolescent girls with knowledge, resources, and a supportive environment to manage menstruation with dignity and confidence.`}
              </TypographyP>
            </div>

            <div className="mt-10">
              <TypographyH3>{`CHALLENGES`}</TypographyH3>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Cultural Taboos & Stigma : `}</span>
                    {`Menstruation is often treated as a shameful secret, limiting open discussion and education.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Lack of Awareness : `}</span>
                    {`Many girls are unaware of menstrual hygiene practices and the biological basis of menstruation.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Access to Sanitary Products : `}</span>
                    {`Economic constraints and unavailability of sanitary products lead to the use of unhygienic alternatives.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Dropout from Schools : `}</span>
                    {`Girls often miss school during periods due to embarrassment, lack of sanitation facilities, and pain.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Health Complications : `}</span>
                    {`Infections, UTIs, and reproductive tract disorders are common due to poor hygiene practices.`}
                  </TypographyP>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <TypographyH3>{`OUR ACTION (Utilization of your donation)`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Your donation will directly support :`}
              </TypographyP>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`MHM Awareness Workshops : `}</span>
                    {`Conducting school-based sessions to educate girls and mothers on menstrual health and hygiene.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Distribution of Sanitary Kits : `}</span>
                    {`Providing eco-friendly, reusable sanitary pads and hygiene kits to adolescent girls.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Establishment of 'Red Ribbon Corners' : `}</span>
                    {`Safe, girl-friendly spaces in schools where sanitary pads, pain relief, and counseling support are available.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Capacity Building in Schools : `}</span>
                    {`Installing menstrual waste disposal units and sensitizing teachers on supporting menstruating students.`}
                  </TypographyP>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <TypographyH3 className="uppercase">{`Trusted and Reliable`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Ladli Foundation is a government-recognized, award-winning grassroots organization with Special Consultative Status from the United Nations ECOSOC. We are known for our ethical implementation, gender-inclusive approach, and deep community trust built through years of consistent fieldwork.`}
              </TypographyP>
            </div>

            <div className="mt-10">
              <TypographyH3 className="uppercase">{`Ladli Foundation’s Proven Track Record`}</TypographyH3>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Impacted`}{" "}
                    <span className="font-semibold">{`2 million+ beneficiaries `}</span>{" "}
                    {`through health, gender sensitization, and education programs`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Successfully conducted `}{" "}
                    <span className="font-semibold">{`nationwide menstrual hygiene campaigns`}</span>{" "}
                    {`in collaboration with police departments and public health authorities`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Recognized by NITI Aayog, Ministry of Health, and international bodies for innovation and execution`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Developed the`}{" "}
                    <span className="font-semibold">{`Gender Sensitive Men`}</span>{" "}
                    {`curriculum to engage boys and men in menstrual equity.`}
                  </TypographyP>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full mb-5 lg:w-[35%]" data-aos="fade-left">
            <div className=" ">
              <Image
                priority
                src={kids}
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
