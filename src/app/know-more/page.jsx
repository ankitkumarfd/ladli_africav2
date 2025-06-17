import React from 'react';
import bg from '@/public/assets/homewall.png';
import whatWeDoImg from '@/public/assets/what-we-do.png';
import { TypographyH2, TypographyP } from '@/components/custom/Typhographies';
import Image from 'next/image';

const whatWeDo = [
  {
    id: 'point1',
    heading: 'Empowerment through Education : ',
    para: `Empowerment through Education is at the heart of our mission—because when a girl is educated, she becomes unstoppable. At Ladli Foundation Africa, we go beyond traditional learning by equipping young girls with essential life skills, mentorship, and access to real opportunities that enable them to break free from the cycle of poverty and social limitations. By creating safe and inclusive learning environments, we empower girls in transforming them into change agents for their families, communities, and the world at large.`,
  },
  {
    id: 'point2',
    heading: 'Health & Wellness Initiatives : ',
    para: `We tackle critical health issues through an integrated approach focused on awareness, access, and advocacy. Our programs promote menstrual hygiene, ensure access to basic healthcare, and provide education and support around TB and HIV/AIDS. We also address mental health and emotional well-being, creating safe spaces for open dialogue and care. Together, these efforts build healthier, more resilient communities.`,
  },
  {
    id: 'point3',
    heading: `Gender-Based Advocacy : `,
    para: `We stand firmly against all forms of gender-based violence, working to create a world where every woman and girl feels safe, respected, and empowered. Through community outreach, legal awareness, and youth engagement, we advocate for gender equality and justice, challenging harmful norms and promoting inclusive, survivor-centered support systems across diverse communities.`,
  },
  {
    id: 'point4',
    heading: `Community Development : `,
    para: `We believe lasting change begins at the grassroots. By partnering with local schools, community leaders, NGOs, and changemakers, we drive holistic, sustainable development that uplifts families and empowers youth`,
  },
];

function page() {
  return (
    <main className="flex-grow ">
      <div className="relative w-full h-[85vh] overflow-hidden home mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={bg}
            alt="Know more background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <section className="">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-center">
            <div data-aos="fade-right" className="text-left">
              <TypographyH2 className=" mb-4 font-bold text-blue-700 ">
                What We Do
              </TypographyH2>
              <ul className="list-disc mt-4 text-justify">
                {whatWeDo.map((point) => (
                  <li key={point.id} className="my-3">
                    <TypographyP>
                      <span className="font-semibold">{point.heading}</span>
                      {point.para}
                    </TypographyP>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex relative justify-end" data-aos="fade-left">
              <div className="hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-3 transition-all duration-300 ">
                <Image
                  src={whatWeDoImg}
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
          <div className="flex flex-col-reverse md:grid md:grid-cols-1 gap-8 md:items-center">
            <div className="flex relative justify-center" data-aos="fade-left">
              <div data-aos="fade-right" className="text-center">
                <TypographyH2 className=" mb-4 font-bold text-center text-blue-700 ">
                  Our Vision
                </TypographyH2>
                <div
                  data-aos="fade-right"
                  className="flex items-center justify-center text-center"
                >
                  <TypographyP className="w-full lg:w-[70%] text-center text-lg mb-4 font-semibold">{`We envision a continent where every girl is celebrated, every woman is respected, and every community is empowered to build a future free of poverty, inequality, and violence.`}</TypographyP>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
