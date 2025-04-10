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
            Advancing Sexual & Reproductive Health
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
                {`Adolescent girls often grow up without accurate information or support around sexual and reproductive health (SRH). Taboos, lack of formal education, and gender bias prevent girls from understanding their bodies, rights, and health choices—leading to early pregnancies, unsafe abortions, abuse, and long-term health consequences.`}
              </TypographyP>
              <TypographyP className="mt-2 ">
                {`The initiative by Ladli Foundation focuses on empowering schoolgirls with knowledge, life skills, and safe spaces to make informed decisions about their bodies and health—laying the foundation for confident, healthy, and empowered young women.`}
              </TypographyP>
            </div>

            <div className="mt-10">
              <TypographyH3>{`CHALLENGES`}</TypographyH3>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Lack of Comprehensive Sex Education : `}</span>
                    {`Most schools do not offer age-appropriate SRH education due to cultural resistance.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Limited Understanding of Bodily Autonomy : `}</span>
                    {`Girls often don't understand consent, personal boundaries, or how to protect themselves from abuse.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Prevalence of Myths and Misinformation : `}</span>
                    {`Harmful practices and misconceptions continue to thrive due to silence around SRH topics.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Early Marriages and Pregnancies : `}</span>
                    {`Poor SRH awareness contributes to early childbearing and related health risks.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Inaccessibility of Adolescent-Friendly Health Services : `}</span>
                    {`Girls hesitate to seek help due to fear, stigma, or lack of confidentiality.`}
                  </TypographyP>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <TypographyH3>{`OUR ACTION (Utilization of your donation)`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Your contribution will be used to :`}
              </TypographyP>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Conduct School-Based SRH Education Sessions : `}</span>
                    {`Age-appropriate, culturally sensitive modules on puberty, reproductive rights, consent, safe touch, STIs, and contraceptives.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Develop ‘Sashakt Ladli Clubs’ in Schools : `}</span>
                    {`Safe peer-led spaces where girls can ask questions, seek guidance, and receive mentorship.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Create Illustrated Learning Toolkits : `}</span>
                    {`Booklets, story-based comics, and videos in regional languages to promote fun, relatable learning.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Train Educators and Counselors : `}</span>
                    {`Building capacity of female teachers and frontline workers to provide continuous SRH support.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Facilitate Health Check-ups and Counseling : `}</span>
                    {`Linking adolescent girls with adolescent-friendly health services and mobile clinics.`}
                  </TypographyP>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <TypographyH3 className="uppercase">{`Trusted and Reliable`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Adolescent girls often grow up without accurate information or support around sexual and reproductive health (SRH). Taboos, lack of formal education, and gender bias prevent girls from understanding their bodies, rights, and health choices—leading to early pregnancies, unsafe abortions, abuse, and long-term health consequences.`}
              </TypographyP>
            </div>

            <div className="mt-10">
              <TypographyH3 className="uppercase">{`Ladli Foundation’s Proven Track Record`}</TypographyH3>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Reached`}{" "}
                    <span className="font-semibold">{`over 5 lakh adolescent girls`}</span>{" "}
                    {`with gender and health education in high-risk areas`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Implemented SRH initiatives in partnership with schools, law enforcement, and child protection agencies`}
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
