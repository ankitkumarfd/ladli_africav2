"use client"; // Add this for Next.js to ensure client-side rendering

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import React from "react";

const AnimateOnScroll = ({ children }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease",
      duration: 800, // Animation duration (in ms)
      once: false, // Whether animation should happen only once
    });
  }, []);

  return <div>{children}</div>;
};

export default AnimateOnScroll;
