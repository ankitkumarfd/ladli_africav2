import HomeSection from "@/components/HomeSection";
import React from "react";
import AboutAfrica from "@/components/AboutAfrica";
import OurImpact from "@/components/OurImpact";
import OurInitiative from "@/components/OurInitiative";
import LadliIndia from "@/components/LadliIndia";
import Dignitaries from "@/components/Dignitaries";
import OurGlimpse from "@/components/OurGlimpse";
import FinalCTA from "@/components/FinalCTA";
import AnimateOnScroll from "@/components/common/AOS/AnimateOnScroll";

export const metadata = {
  title: "Ladli Foundation Africa | Advancing Health & Education",
  description:
    "Explore Ladli Foundation Africa delivering health, education, WASH, and protection programs empowering women and youth through partnerships with dignity",
  keywords: "Ladli Foundation Africa",
  alternates: {
    canonical: "https://africa.ladlifoundation.org/",
  },
};

export default function Home() {
  return (
    <div>
      <AnimateOnScroll>
        <main className="flex-grow">
          {/* 1. Hero */}
          <HomeSection />

          {/* 2. About Ladli Africa */}
          <AboutAfrica />

          {/* 3. Our Global Impact */}
          <OurImpact />

          {/* 4. Our Initiatives */}
          <OurInitiative />

          {/* 5. About Ladli Foundation Trust India */}
          <LadliIndia />

          {/* 6. Dignitaries — kept as-is, pending new UI */}
          <Dignitaries />

          {/* 7. Partners — temporarily skipped */}

          {/* 8. Our Glimpse */}
          <OurGlimpse />

          {/* 9. Final CTA */}
          <FinalCTA />
        </main>
      </AnimateOnScroll>
    </div>
  );
}
