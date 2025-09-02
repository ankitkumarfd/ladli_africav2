import React from 'react';
import bg from '@/public/assets/homewall.png';
import Image from 'next/image';
import AnimateOnScroll from '@/components/common/AOS/AnimateOnScroll';

import { TypographyH1, TypographyP } from '@/components/custom/Typhographies';
import founder1 from '@/public/assets/founder/founder1.webp';
import founder2 from '@/public/assets/founder/founder2.webp';
import founder3 from '@/public/assets/founder/founder3.webp';

export const metadata = {
  title: "Devendra Kumar | Founder & Vision | Ladli Foundation Africa",
  description: "Devendra Kumar—founder of Ladli Foundation Africa—championing dignity driven health education WASH and protection initiatives empowering women and youth",
  keywords: "Devendra Kumar",
  alternates: {
    canonical: "https://africa.ladlifoundation.org/",
  },
};

function page() {
  return (
    <AnimateOnScroll>
      <main className="flex-grow ">
        <div className="relative w-full h-[85vh] overflow-hidden home mb-12">
          {/* Background Image */}
          <div className="absolute inset-0 -z-10">
            <Image
              src={bg}
              alt="Founder background"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <section className="">
          <div className="text-center mb-8">
            <TypographyH1 className="">Our Founder</TypographyH1>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-center">
              <div data-aos="fade-right" className="text-justify">
                <TypographyP className="text-justify mb-4 ">
                  {`Devendra Kumar, a young self-made grassroots social worker, emerged from the depths of a crime-ridden slum where his parents abandoned him and his infant sister at the tender age of two. Growing up in poverty, at the age of 8 he commenced his journey as child labourer by selling balloons for his survival. However, his path was fraught with danger as he often fell victim to assaults by gangs of delinquents and drug addicts. These hardships drove him to seek safety, leading him to volunteer in Community Policing Initiatives with the Delhi Police in search of a secure shelter.`}
                </TypographyP>

                <TypographyP className="text-justify mb-4">
                  {`In 2010, his struggle to save his sister from child marriage and dowry by surviving amidst vulnerability motivated him to work for the most vulnerable population, for which he established the “Ladli Foundation.” Further, volunteering became a passion for him, and he took early financial retirement at the age of 25 to devote himself as a full-time volunteer to live his passion. This is how the power of volunteering has created a notable social reformer who has impacted the lives of millions, which he never envisioned`}
                </TypographyP>

                <TypographyP className="text-justify mb-4">
                  {`He has been honoured with two National Awards from the Government of India and has received praise from four successive Presidents of India, including the late Sh. APJ Abdul Kalam, Late. Sh. Pranab Mukherjee, Sh. Ram Nath Kovind, and currently Smt. Draupadi Murmu. His remarkable social contributions were recognized by the Union Ministry of Social Justice, Government of India, which nominated him for the prestigious Padma Shri Award in 2020, the fourth highest civilian award in India. His unwavering efforts in liberating thousands of women and young girls from sexual abuse and exploitation, while empowering them towards self-reliance, earned him the esteemed title of "True Hero" from Bollywood Superstar Mr. Amitabh Bachchan.`}
                </TypographyP>
              </div>
              <div className="flex relative justify-end" data-aos="fade-left">
                <div className="">
                  <Image
                    src={founder1}
                    alt="About Ladli Africa"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full h-auto object-cover hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-3 transition-all duration-300 "
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
                <div className="">
                  <Image
                    src={founder2}
                    alt="About Ladli Africa"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full h-auto object-cover hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-3 transition-all duration-300 "
                  />
                </div>
              </div>

              <div data-aos="fade-right" className="text-justify">
                <TypographyP className="text-justify mb-4 ">
                  {`Currently, he is dedicated to tackling the most pressing social issues concerning health and education for the vulnerable populations residing in slums, striving for sustainable development in India by managing the force of over 1.16 Lac Youth Interns & Volunteers through his innovative Social Internship Program. `}
                </TypographyP>

                <TypographyP className="text-justify mb-4">
                  {`Under his leadership and effective community engagement, Devendra has made a significant impact, positively affecting over 2.5 million direct beneficiaries. Notably, his outstanding contributions include providing digital education access to more than 257,000 marginalized students, resulting in a substantial impact valued at approximately INR 600 Crore (equivalent to 75 million USD). Remarkably, all these achievements have been realized independently, without relying on external financial assistance or grants. Additionally, he has implemented innovative solutions that successfully addressed malnutrition among identified 8 lakhs undernourished students in the schools of Delhi, and paving the way for sustainable positive change.`}
                </TypographyP>

                <TypographyP className="text-justify mb-4">
                  {`In 2017, His most significant gender sensitization initiative for gathering twenty thousand of male populations in Run for Laadli Half Marathon at JLN Stadium, Delhi to uphold the idea of Gender Equality was witnessed and deeply praised by the union Home minister, Social Justice Minister & Numbers of International Diplomats and Notable Dignitaries & Govt. Officials.`}
                </TypographyP>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-center">
              <div data-aos="fade-right" className="text-justify">
                <TypographyP className="text-justify mb-4 ">
                  {`His 23 years continuous actions and innovative initiatives for empowering the oppressed and disadvantaged has also drawn attention on a global scale at the United Nations, where His suggestions have been published twice in high-level political forums of the United Nations. Also In the Preliminary session of the 65th Commission on the Status of Women at the United Nations on March 15, 2021, The UN Secretary-General, Mr. António Guterres, praised his work and well acknowledged his influential advocacy for prioritizing women's health and effective efforts to prevent child marriage in developing countries.`}
                </TypographyP>

                <TypographyP className="text-justify mb-4">
                  {`Devendra is an emerging global leader, notable speaker and public policy analyst, boasts extensive expertise in international relations and development sector. He is also the founder of the South and East Asia Foundation in India and Ladli Foundation USA, a 501(c)(3) nonprofit organization in the United States, serving as an international think tank has successfully orchestrated prestigious conferences like INDIA & BRICS, INDO-US SUMMIT, INDO-CHINA SUMMIT, CLIMATE CONCLAVE, and NATIONAL DEMOCRACY SUMMIT, uniting global leaders, diplomats, and policymakers to address India's challenges. Beyond diplomacy, Devendra is committed to gender-sensitive societal reform, fostering a network of change-makers dedicated to advancing gender equality.`}
                </TypographyP>
              </div>

              <div className="flex relative justify-end" data-aos="fade-left">
                <div className=" ">
                  <Image
                    src={founder3}
                    alt="About Ladli Africa"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-md w-full h-auto object-cover hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-3 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className=" w-[70%] mx-auto flex gap-8 items-center justify-center">
              <div data-aos="fade-right" className="text-center">
                <TypographyP className="text-center text-lg mb-4 font-semibold">{`His words of wisdom ,"Society is like a Canvas, It's you who need to paint it beautifully" serves as the driving force behind his transformative leadership initiatives aimed at creating a more inclusive world.`}</TypographyP>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AnimateOnScroll>
  );
}

export default page;
