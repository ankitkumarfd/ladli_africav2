'use client';
import '@fortawesome/fontawesome-free/css/all.min.css';
import React from 'react';
import bg from '@/public/assets/homewall.png';
import Image from 'next/image';

const HomeSection = () => {
  return (
    <section className="relative w-full h-[50vh] lg:h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={bg}
          alt="Ladli Africa hero background"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default HomeSection;
