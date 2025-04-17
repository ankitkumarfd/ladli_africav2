import React from "react";
import bg from "@/public/assets/homewall.png";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
} from "@/components/custom/Typhographies";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import Image from "next/image";
import about1 from "@/public/assets/about/about1.webp";
import about2 from "@/public/assets/about/about2.webp";
import about3 from "@/public/assets/about/about3.webp";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sampleKeyPoints = [
  {
    id: "point1",
    para: `Health`,
  },
  {
    id: "point2",
    para: `Education`,
  },
  {
    id: "point3",
    para: `Social Protection`,
  },
  {
    id: "point4",
    para: `WaSH`,
  },
  {
    id: "point5",
    para: `Livelihood`,
  },
  {
    id: "point6",
    para: `Drug & Crime Prevention`,
  },
];

const whoWeAre = [
  {
    id: "point1",
    para: `Ladli Foundation is an emerging international NGO committed to creating a gender-responsive and equitable society by addressing women's health issues in developing nations. Known for its effective grassroots endeavours and innovative social initiatives, the organization has uplifted underserved and disadvantaged women. Having directly impacted over 2.7 million lives, Ladli Foundation has not only been applauded by dignitaries and sector experts but has also earned recognition from the United Nations.`,
  },
  {
    id: "point2",
    para: `With a resolute commitment to fostering change, we specialize in implementing impactful programs across Health, Education, WaSH (Water, Sanitation, and Hygiene), Social Protection, Livelihood, and the Prevention of Drug Abuse and Crime. Our efforts are dedicated to empowering the most vulnerable populations in urban and rural slums, with a particular focus on adolescent girls and women. We address critical areas such as health and hygiene, sexual and reproductive health (SRH), maternal and child health (MCH), immunization, and mental health.`,
  },
  {
    id: "point4",
    para: `During the 65th Session of the Commission on the Status of Women, the organization received recognition from the UN Secretary-General, Mr. António Guterres, for its advocacy in prioritizing Women's Health and the elimination of Child Marriages in developing countries as part of the efforts to achieve Gender Equality (SDG5).`,
  },
];

function page() {
  return (
    <main className="flex-grow ">
      <div className="relative w-full h-[85vh] overflow-hidden home mb-12">
        /* Background Image */
        <div
          style={{ backgroundImage: `url(${bg.src})` }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[85vh]"
        ></div>
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/60 z-0 h-[85vh]" /> */}
      </div>

      <section className="">
        <div className="text-center">
          <TypographyH1 className="">About Us</TypographyH1>
        </div>

        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-center">
            <div data-aos="fade-right" className="text-left">
              <TypographyH2 className=" mb-4 font-bold text-blue-700 ">
                Our Mission
              </TypographyH2>
              <TypographyP className="text-justify">
                {`At Ladli Foundation, our mission is to catalyze impactful and innovative social initiatives that provide equitable healthcare, education, and life skills to empower vulnerable women. With an unwavering commitment to driving change by building a safe, gender-neutral, and inclusive society by an action to :-`}
              </TypographyP>
              <ul className="mt-4 flex flex-wrap">
                {sampleKeyPoints.map((point) => (
                  <li className="flex items-center w-1/2 my-2" key={point.id}>
                    <IoCheckmarkDoneOutline
                      className="mr-3"
                      size={20}
                      color="green"
                    />
                    <TypographyP>{point.para}</TypographyP>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex relative justify-end" data-aos="fade-left">
              <div className="hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-3 transition-all duration-300 ">
                <Image
                  src={about1}
                  alt="About Ladli Africa"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-center">
            <div className="flex relative justify-start" data-aos="fade-left">
              <div className="hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-3 transition-all duration-300 ">
                <Image
                  src={about2}
                  alt="About Ladli Africa"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>

            <div data-aos="fade-right" className="text-left">
              <TypographyH2 className=" mb-4 font-bold text-blue-700 ">
                Who We Are
              </TypographyH2>
              <ul className="list-disc mt-4 text-left">
                {whoWeAre.map((point) => (
                  <li key={point.id} className="my-3">
                    <TypographyP>{point.para}</TypographyP>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-center">
            <div data-aos="fade-right" className="text-left">
              <Accordion type="single" collapsible className="mb-6">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                    <TypographyH3 className="text-blue-700">
                      {`Our Impact`}
                    </TypographyH3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <TypographyP>{`With a remarkable impact on over 2.5 million direct beneficiaries, Ladli Foundation has been recognized for its outstanding contributions. Notably, the foundation's recent achievements include enabling digital education access for more than 157,000 marginalized students, yielding a remarkable impact valued at INR 600 Crore (approximately 75 million USD), all achieved independently without any external financial aid or grants. Furthermore, As an Exclusive NGO Partner with Govt of Delhi, the Organization is Implementing Its Social Innovations for creating sustainable solution for eradicating malnutrition among 8,00,000 marginalized students in the city.`}</TypographyP>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                    <TypographyH3 className="text-blue-700">
                      {`International Reach`}
                    </TypographyH3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <TypographyP>{`Our vision knows no boundaries. Beyond the Indian shores, our international wing - Ladli Foundation USA - a 501(C)(3) non-profit corporation, stands shoulder to shoulder with the United Nations Sustainable Development Goals. Our commitment echoes in our initiatives, and our impact resounds across borders.`}</TypographyP>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger className="font-semibold text-lg hover:no-underline">
                    <TypographyH3 className="text-blue-700">
                      {`INCEPTION- LADLI FOUNDATION, INDIA`}
                    </TypographyH3>
                  </AccordionTrigger>
                  <AccordionContent>
                    <TypographyP>{`Driven by concerns of health, education & equality for vulnerable women as an integral and critical dimension of human rights, Ladli Foundation became a reality in 2012 as a grassroots social catalyst. It was founded by Devendra Kumar, whose incredible journey began as a child laborer in a poverty- stricken environment. Where he faced numerous hardships and atrocities during his orphaned and challenging childhood. Born in a crime-prone slum, he endured abandonment by his parents, who left him with his three-day-old infant sister when he was just two years old. Despite these adversities, Devendra's indomitable spirit and resilience led him to find solace and purpose in serving others. Driven by his determination to protect his sister from child marriage and dowry, Devendra founded the Ladli Foundation with the noble mission of uplifting the oppressed and disadvantaged. His personal experiences as a child laborer and his encounters with delinquents and drug addicts further fueled his commitment to making a positive impact in the lives of those facing similar challenges.`}</TypographyP>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex relative justify-end" data-aos="fade-left">
              <div className="hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-3 transition-all duration-300 ">
                <Image
                  src={about3}
                  alt="About Ladli Africa"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
