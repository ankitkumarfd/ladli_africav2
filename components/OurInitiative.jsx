"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Droplet,
  Ribbon,
  Flower2,
  Venus,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import card_mhm from "@/public/assets/cards/card_mhm.png";
import card_wash from "@/public/assets/cards/card_wash.jpg";
import card_hiv from "@/public/assets/cards/card_hiv.jpg";
import initiative2 from "@/public/assets/initiatives/initiative2.jpg";

const initiativesData = [
  {
    title: "Strengthening WASH Infrastructure & Awareness in Schools",
    description:
      "Support to build inclusive, sustainable WASH infrastructure in schools while fostering hygiene awareness and behavioural change among students, teachers, and communities.",
    image: card_wash,
    icon: Droplet,
    iconColor: "text-blue-500",
    readMoreLink: "/initiatives/wash-awareness",
  },
  {
    title:
      "Combating TB & HIV through Awareness and Early Detection for Adolescents in Schools",
    description:
      "School-based awareness and sensitization program designed to educate adolescents about TB and HIV prevention, symptoms, and the importance of empathy and non-discrimination.",
    image: card_hiv,
    icon: Ribbon,
    iconColor: "text-violet-500",
    readMoreLink: "/initiatives/tb-and-hiv",
  },
  {
    title: "Empowering Girls through Menstrual Hygiene Management (MHM)",
    description:
      "The initiative aims to empower adolescent girls with knowledge, resources, and a supportive environment to manage menstruation with dignity and confidence.",
    image: card_mhm,
    icon: Flower2,
    iconColor: "text-pink-500",
    readMoreLink: "/initiatives/mhm",
  },
  {
    title: "Advancing Sexual and Reproductive Health for School Girls",
    description:
      "Empower schoolgirls with knowledge, life skills, and safe spaces to make informed decisions about their bodies and health—laying the foundation for confident, healthy, and empowered young women.",
    image: initiative2,
    icon: Venus,
    iconColor: "text-emerald-500",
    readMoreLink: "/initiatives/advancing-srh",
  },
];

export default function OurInitiative() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Initiatives
          </h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto">
            We address the root causes of poverty and inequality through
            comprehensive programs designed for long-term sustainability.
          </p>
        </div>

        <div className="relative px-2 lg:px-10">
          {/* Custom nav arrows */}
          <button
            ref={prevRef}
            aria-label="Previous initiatives"
            className="absolute left-0 lg:-left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-lg transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            ref={nextRef}
            aria-label="Next initiatives"
            className="absolute right-0 lg:-right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-pink-600 hover:shadow-lg transition-all"
          >
            <ChevronRight size={20} />
          </button>

          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            className="!pb-2 [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:!h-auto"
          >
            {initiativesData.map((item, index) => {
              const Icon = item.icon;
              return (
                <SwiperSlide key={index}>
                  <article className="bg-white rounded-2xl border border-gray-100 shadow-[0_4px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 overflow-hidden flex flex-col h-full">
                    {/* Image + floating icon badge */}
                    <div className="relative p-3 pb-0">
                      <div className="relative h-48 overflow-hidden rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center ring-1 ring-gray-100">
                        <Icon size={22} className={item.iconColor} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 pt-8 flex flex-col flex-1 text-center">
                      <h3 className="font-bold text-gray-900 text-base lg:text-lg mb-3 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                        {item.description}
                      </p>

                      <Link
                        href="/donate"
                        className="block bg-pink-600 hover:bg-pink-700 text-white text-center py-2.5 rounded-lg font-semibold text-sm transition-colors mb-3 shadow-sm"
                      >
                        Contribute Now
                      </Link>
                      <Link
                        href={item.readMoreLink}
                        className="inline-flex items-center justify-center gap-1 text-pink-600 hover:text-pink-700 font-semibold text-sm group"
                      >
                        Read More About the Initiative
                        <ArrowRight
                          size={14}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </Link>
                    </div>
                  </article>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
