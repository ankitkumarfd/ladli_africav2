"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import ladliAfricaLogo from "@/public/assets/logos/ladli_africa.png";

const menu = [
  { label: "Home", href: "/" },
  {
    label: "About",
    dropdown: [
      { label: "About Us", href: "/about/about-us" },
      { label: "Our Founder", href: "/about/our-founder" },
      { label: "Executive Board", href: "/about/executive-board" },
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
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const toggleDropdown = (index) =>
    setOpenDropdownIndex((prev) => (prev === index ? null : index));

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0">
          <Image
            src={ladliAfricaLogo}
            alt="Ladli Foundation Africa"
            priority
            className="h-12 sm:h-18 lg:h-22 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menu.map((item, index) =>
            !item.dropdown ? (
              <Link
                key={index}
                href={item.href}
                className={`relative font-semibold text-sm transition-colors ${
                  isActive(item.href)
                    ? "text-pink-600"
                    : "text-gray-700 hover:text-pink-600"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-pink-600 rounded-full" />
                )}
              </Link>
            ) : (
              <div key={index} className="relative group">
                <button
                  className={`flex items-center gap-1 font-semibold text-sm transition-colors ${
                    item.dropdown.some((s) => isActive(s.href))
                      ? "text-pink-600"
                      : "text-gray-700 group-hover:text-pink-600"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                  {item.dropdown.some((s) => isActive(s.href)) && (
                    <span className="absolute -bottom-1.5 left-0 right-4 h-0.5 bg-pink-600 rounded-full" />
                  )}
                </button>
                <div className="absolute left-0 top-full pt-3 hidden group-hover:block">
                  <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden min-w-[320px] py-2">
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.href}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          )}

          <Link
            href="/donate"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Contribute
          </Link>
        </div>

        {/* Hamburger Button (mobile) */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="lg:hidden text-gray-700 p-1"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-lg overflow-hidden transition-[max-height] duration-300 ${
          isMenuOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 overflow-y-auto max-h-[78vh] space-y-1">
          {menu.map((item, index) =>
            !item.dropdown ? (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg font-semibold text-sm ${
                  isActive(item.href)
                    ? "bg-pink-50 text-pink-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </Link>
            ) : (
              <div key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg font-semibold text-sm text-gray-800 bg-gray-50"
                >
                  <span>{item.label}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openDropdownIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openDropdownIndex === index && (
                  <div className="pl-3 mt-1 space-y-1">
                    {item.dropdown.map((sub, j) => (
                      <Link
                        key={j}
                        href={sub.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-pink-50 hover:text-pink-600"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          )}

          <Link
            href="/donate"
            onClick={() => setIsMenuOpen(false)}
            className="block bg-pink-600 text-white text-center px-5 py-3 rounded-full font-semibold text-sm mt-3"
          >
            Contribute
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
