"use client";
import React, { useState } from "react";
import Link from "next/link";
import ladlilogo from "@/public/ladlilogo.png";
import Image from "next/image";

const menu = [
  { label: "Home", href: "/" },
  {
    label: "About",
    dropdown: [
      { label: "About Us", href: "/about/about-us" },
      // { label: "Our Approach", href: "/our-approach" },
      { label: "Our Founder", href: "/about/our-founder" },
      { label: "Executive Board", href: "/about/executive-board" },
      // {
      //   label: "International Advisory Board",
      //   href: "/international-advisory-board",
      // },
    ],
  },
  {
    label: "Initiatives",
    dropdown: [
      {
        label: "Empowering Girls through Menstrual Hygiene Management (MHM)",
        href: "/initiatives/mhm",
      },
      {
        label: "Advancing Sexual & Reproductive Health For School Girls",
        href: "/initiatives/advancing-srh",
      },
      {
        label: "Strengthening WASH Infrastructure & Awareness in Schools",
        href: "/initiatives/wash-awareness",
      },
      {
        label:
          "Combating TB & HIV through Awareness and Early Detection for Adolescents in Schools",
        href: "/initiatives/tb-and-hiv",
      },
    ],
  },
  // {
  //   label: "Activities",
  //   dropdown: [
  //     { label: "Field Activities", href: "/activities/field-activities" },
  //     { label: "Events", href: "/activities/events" },
  //     { label: "Conferences", href: "/activities/conferences" },
  //     {
  //       label: "Blogs & Article",
  //       href: "https://blog.ladlifoundation.org/",
  //     },
  //     { label: "Press & Media", href: "/press" },
  //     { label: "Gallery", href: "/gallery" },
  //   ],
  // },
  // {
  //   label: "Get Involved",
  //   dropdown: [
  //     { label: "Voltour", href: "/get-involved#voltour" },
  //     { label: "Internship", href: "/get-involved#internship" },
  //     { label: "Fellowships", href: "/get-involved#fellowship" },
  //     { label: "Researcher", href: "/get-involved#researcher" },
  //     { label: "CSR Partner", href: "/get-involved#csr" },
  //   ],
  // },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // ✅ FIXED

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50 ">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="w-[30%] md:w-[20%]">
          <Image
            src={ladlilogo}
            alt="Ladli Foundation Logo"
            className="w-full h-auto"
          />
        </Link>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4 font-medium">
          {renderNavLinks()}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="px-4 py-2 overflow-y-auto max-h-[80vh] space-y-2">
          {renderNavLinks(true)}
        </div>
      </div>
    </header>
  );

  function renderNavLinks(isMobile = false) {
    const baseClass =
      "text-gray-700 hover:bg-pink-600 hover:text-white transition-all duration-300 rounded-full px-4 py-2 block text-left";
    const dropdownWrapper = "relative group";
    const dropdownMenu =
      "absolute left-0 mt-1 hidden group-hover:flex flex-col bg-white shadow-md border border-gray-100 rounded-md z-10 min-w-[300px]";
    const mobileDropdownWrapper = "space-y-1";
    const mobileDropdownMenu = "pl-4 space-y-1";

    return (
      <>
        {menu.map((item, index) =>
          !item.dropdown ? (
            <Link key={index} href={item.href} className={baseClass}>
              {item.label}
            </Link>
          ) : isMobile ? (
            <div key={index} className={mobileDropdownWrapper}>
              <button
                onClick={() => toggleDropdown(index)}
                className="w-full font-semibold text-left px-2 py-2 bg-gray-100 rounded-md"
              >
                {item.label}
              </button>
              {openDropdownIndex === index && (
                <div className={mobileDropdownMenu}>
                  {item.dropdown.map((sub, j) => (
                    <Link key={j} href={sub.href} className={baseClass}>
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div key={index} className={dropdownWrapper}>
              <button className={baseClass}>{item.label}</button>
              <div className={dropdownMenu}>
                {item.dropdown.map((sub, j) => (
                  <Link
                    key={j}
                    href={sub.href}
                    className="block px-4 py-2 hover:bg-pink-600 hover:text-white transition-all duration-300"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
        <Link
          href="https://www.every.org/ladlifoundation-usa?utm_campaign=donate-link&method=card%2Cbank%2Cpaypal%2Cpay%2Cvenmo#/donate"
          className="bg-pink-600 text-white px-5 py-3 rounded-full hover:bg-pink-700 transition-all duration-300 block text-center"
        >
          Contribute
        </Link>
      </>
    );
  }
}

export default Header;
