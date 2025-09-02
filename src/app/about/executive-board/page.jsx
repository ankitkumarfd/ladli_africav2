import React from 'react';
import AnimateOnScroll from '@/components/common/AOS/AnimateOnScroll';
import Image from 'next/image';
import ShammemBaksh1 from '@/public/assets/executiveBoard/shameemBaksh1.jpeg';
import bg from '@/public/assets/homewall.png';
import { TypographyH1, TypographyP } from '@/components/custom/Typhographies';

export const metadata = {
  title: "Executive Board | Ladli Foundation Africa Leadership",
  description: "Meet the executive board of Ladli Foundation Africa—leaders guiding governance, partnerships, and strategy to scale health, education, WASH, and protection",
  keywords: "Executive Board",
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
              alt="Executive board background"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <section className="">
          <div className="text-center mb-8">
            <TypographyH1 className="">Executive Board</TypographyH1>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:items-center">
              <div data-aos="fade-right" className="text-justify">
                <TypographyP className="text-justify mb-4 ">
                  {`Shameem Baksh is a compassionate leader, social entrepreneur, and
                    advocate for women and youth empowerment. Raised in a family deeply
                    involved in community service, she grew up witnessing the power of
                    kindness and giving. From an early age, she learned that true leadership
                    begins with caring for people—especially the most vulnerable.`}
                </TypographyP>

                <TypographyP className="text-justify mb-4">
                  {`Her journey with the Ladli Foundation began when she was deeply inspired
                    by the organization’s remarkable global impact and the extraordinary
                    life story of its founder, Mr. Devendra Kumar. His transformation—from a
                    child abandoned in a slum to a global change-maker who has touched the
                    lives of millions—moved Shameem profoundly. She saw in his story not
                    only a testament to human resilience but also a powerful call to action:
                    to use her own experience, voice, and platform to extend the
                    Foundation’s mission across Africa.`}
                </TypographyP>

                <TypographyP className="text-justify mb-4">
                  {` Now serving as the Africa Director of the Ladli Foundation, Shameem
                    brings this inspiration to life through strategic, people-centered
                    initiatives aimed at uplifting underserved communities. Her work focuses
                    on advancing gender equality, youth development, and community
                    resilience—values that lie at the heart of Ladli’s mission. With
                    unwavering dedication, she is helping bridge the gap between grassroots
                    realities and global development goals, ensuring that dignity,
                    education, health, and protection reach those who need them most.`}
                </TypographyP>

                <TypographyP className="text-justify mb-4">
                  {`In addition to her role at Ladli, Shameem is the Founder and Director of
                    Yobuningi, a dynamic marketing and events company recognized for driving
                    social impact through business innovation and community engagement. Her
                    leadership is defined by a rare blend of empathy, vision, and
                    action—qualities that have earned her respect and trust across sectors.`}
                </TypographyP>

                <TypographyP className="text-justify mb-4">
                  {`Shameem believes that every life has value and every voice matters.
                    Under her leadership, Ladli Foundation Africa is not just expanding its
                    reach—it is igniting hope, building capacity, and creating sustainable,
                    inclusive solutions for generations to come.`}
                </TypographyP>
              </div>
              <div
                className="flex relative justify-center lg:justify-end"
                data-aos="fade-left"
              >
                <div className="w-[65%]">
                  <Image
                    src={ShammemBaksh1}
                    alt="About Ladli Africa"
                    width={300}
                    height={100}
                    className="rounded-lg shadow-md w-full h-auto object-cover hover:shadow-2xl hover:shadow-blue-300 hover:-translate-y-3 transition-all duration-300 "
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
                <TypographyP className="text-center text-lg mb-4 font-semibold">{`“When you lead with love and serve with purpose, the impact becomes your
                legacy.” – Shameem Baksh`}</TypographyP>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AnimateOnScroll>
  );
}

export default page;
