import React from 'react';
import transparentLogo from "@/public/transparentLogo.png";
import Image from 'next/image';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

function Footer() {
  return (
    <section className="bg-gray-200">
      <div className="w-full flex flex-col lg:flex-row  justify-between items-center py-8 container mx-auto">
        <div className="w-full flex flex-wrap items-start justify-between gap-8 p-4 lg:p-0">
          <div className="w-[60%] md:w-[40%] lg:w-[20%] h-[16vh]">
            <Image
              src={transparentLogo}
              alt="Ladli Foundation Africa logo"
              width={300}
              height={300}
              className="w-full h-full"
            />
          </div>

          <div className=" w-[18rem] flex flex-col gap-4">
            <h2 className="text-[#2a67b8] font-semibold text-base">
              IMPORTANT LINKS
            </h2>
            <ul className="space-y-2 text-gray-600 ">
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                <Link href="/about/about-us">About Us</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                <Link href="">Privacy Policy</Link>
              </li>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                <Link href="">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="w-[18rem] flex flex-col gap-4">
            <h2 className="text-[#2a67b8] font-semibold text-base">
              OFFICE DETAILS
            </h2>
            <ul className="space-y-2 text-gray-600 ">
              {/* <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                 <IoLocationSharp size={32} /> 
                <Link href="" className="text-wrap">
                  {`Ladli foundation USA, 221 River Street, 9th floor, Hoboken,
                  New Jersey - 07030, USA.`}
                </Link>
              </li> */}
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                <Link href="">Email Us</Link>
              </li>
            </ul>
          </div>

          <div className="w-[18rem] flex flex-col gap-4">
            <h2 className="text-[#2a67b8] font-semibold text-base">
              CONNECT WITH US
            </h2>
            <ul className="flex gap-3">
              <li className="hover: hover:underline-offset-2 transition-all duration-300">
                <a href="">
                  <FaFacebook
                    size={28}
                    className="hover:text-[#2a67b8] transition-all duration-300"
                  />
                </a>
              </li>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                <a href="">
                  <FaSquareXTwitter
                    size={28}
                    className="hover:text-[#2a67b8] transition-all duration-300"
                  />
                </a>
              </li>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                <a href="">
                  <IoLogoInstagram
                    size={28}
                    className="hover:text-[#2a67b8] transition-all duration-300"
                  />
                </a>
              </li>
              <li className="hover:underline hover:underline-offset-2 transition-all duration-300">
                <a href="">
                  <FaLinkedin
                    size={28}
                    className="hover:text-[#2a67b8] transition-all duration-300"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-1 text-center text-gray-500 text-xs">{`© 2025 Ladli Foundation Africa`}</div>
    </section>
  );
}

export default Footer;
