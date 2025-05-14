"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import ShammemBaksh from "@/public/assets/executiveBoard/shameemBaksh.jpg";
import bg from "@/public/assets/homewall.png";
import { TypographyH1 } from "@/components/custom/Typhographies";

const tabs = [
  {
    id: 1,
    name: "Shameem Baksh",
    image: ShammemBaksh,
    designation: "Director",
    designation2: "Ladli Foundation Africa",
    bio: [
      <p>
        Shameem Baksh is a compassionate leader, social entrepreneur, and
        advocate for women and youth empowerment. Raised in a family deeply
        involved in community service, she grew up witnessing the power of
        kindness and giving. From an early age, she learned that true leadership
        begins with caring for people—especially the most vulnerable.
      </p>,
      <p>
        Her journey with the Ladli Foundation began when she was deeply inspired
        by the organization’s remarkable global impact and the extraordinary
        life story of its founder, Mr. Devendra Kumar. His transformation—from a
        child abandoned in a slum to a global change-maker who has touched the
        lives of millions—moved Shameem profoundly. She saw in his story not
        only a testament to human resilience but also a powerful call to action:
        to use her own experience, voice, and platform to extend the
        Foundation’s mission across Africa.
      </p>,
      <p>
        Now serving as the Africa Director of the Ladli Foundation, Shameem
        brings this inspiration to life through strategic, people-centered
        initiatives aimed at uplifting underserved communities. Her work focuses
        on advancing gender equality, youth development, and community
        resilience—values that lie at the heart of Ladli’s mission. With
        unwavering dedication, she is helping bridge the gap between grassroots
        realities and global development goals, ensuring that dignity,
        education, health, and protection reach those who need them most.
      </p>,
      <p>
        In addition to her role at Ladli, Shameem is the Founder and Director of
        Yobuningi, a dynamic marketing and events company recognized for driving
        social impact through business innovation and community engagement. Her
        leadership is defined by a rare blend of empathy, vision, and
        action—qualities that have earned her respect and trust across sectors.
      </p>,
      <p>
        Shameem believes that every life has value and every voice matters.
        Under her leadership, Ladli Foundation Africa is not just expanding its
        reach—it is igniting hope, building capacity, and creating sustainable,
        inclusive solutions for generations to come.
      </p>,
      <p>
        “When you lead with love and serve with purpose, the impact becomes your
        legacy.” – Shameem Baksh`
      </p>,
    ],
  },
];

function page() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeSubTab, setActiveSubTab] = useState(0); // State for active sub-tab
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);

    return () => clearTimeout(timer);
  }, [activeTab, activeSubTab]);

  const currentTab = tabs[activeTab];
  // const currentSubTab = subTabs[activeSubTab];

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
          <TypographyH1 className="">Executive Board</TypographyH1>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4">
          <div>
            <div className="container mx-auto px-4 my-12">
              <div className="flex flex-wrap justify-center items-center gap-2">
                {tabs.map((tab, index) => (
                  <div
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className="relative group flex flex-col justify-between items-center lg:py-4 pb-4 border border-gray-100 rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                  >
                    <div className="lg:w-[90%] flex flex-col items-center justify-center">
                      <Image
                        priority
                        src={tab.image}
                        alt={tab.name}
                        width={250}
                        height={100}
                        //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="w-full h-auto rounded-t-lg lg:rounded-lg"
                      />
                    </div>
                    <div>
                      <p className="text-pink-500 font-bold text-base text-center lg:text-xl mt-4">
                        {tab.name}
                      </p>
                      <p className="text-center text-sm">{tab.designation2}</p>
                      <p className="font-semibold text-center ">
                        {tab.designation}
                      </p>
                    </div>

                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-800 to-blue-300 opacity-0 group-hover:opacity-90   duration-500 flex items-center justify-center p-5 cursor-pointer">
                      <div className="text-white text-[12px] lg:text-[11px] text-justify transform translate-y-1/2 group-hover:translate-y-0 transition-transform duration-500">
                        {tab.bio.map((paragraph, index) => (
                          <div key={index}>{paragraph}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
