import React from "react";
import { BiSolidCoffeeBean } from "react-icons/bi";
import { MdOutlineMailOutline, MdOutlinePermPhoneMsg } from "react-icons/md";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="px-4 md:px-20 bg-slate-100 mt-7">
      <div className="py-4">
        <div className="logo">
          <Link
            to={"/"}
            className="flex items-center font-kaushan text-[#906347] font-semibold text-xl"
          >
            <span className="text-3xl  text-[#563b2a]">
              <BiSolidCoffeeBean />
            </span>
            <span>Coffee</span>
          </Link>
        </div>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-3">
          <div className="">
            <h2 className="text-xl text-[#563B2A] font-semibold">
              Coffee Shop
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, minus assumenda? Voluptates aliquid recusandae ipsum
              commodi neque numquam vel labore?
            </p>
            <div className="social mt-5">
              <ul className="flex gap-3 justify-center items-center md:justify-start md:items-start">
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200 hover:border hover:border-[#563B2A]">
                  <a
                    href="https://www.whatsapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp color="#25D366" size="25" className="" />
                  </a>
                </li>
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200 hover:border hover:border-[#563B2A]">
                  <a
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube color="#FF0000" size="25" />
                  </a>
                </li>
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200 hover:border hover:border-[#563B2A]">
                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook color="#1877F2" size="25" />
                  </a>
                </li>
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200 hover:border hover:border-[#563B2A]">
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin color="#0077B5" size="25" />
                  </a>
                </li>
                <li className="border border-gray-300 p-1.5 rounded-sm hover:scale-105 transition-all duration-200 hover:border hover:border-[#563B2A]">
                  <a
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter color="#1DA1F2" size="25" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="text-xl text-[#563B2A] font-semibold">Support</h2>
            <ul className="mt-1 font-inter">
              <li className="hover:text-[#563B2A] text-base mt-2 text-gray-700">
                <a href="#">Product</a>
              </li>
              <li className="hover:text-[#563B2A] text-base mt-1 text-gray-700">
                <a href="#">Help & Support</a>
              </li>
              <li className="hover:text-[#563B2A] text-base mt-1 text-gray-700">
                <a href="#">Return Policy</a>
              </li>
              <li className="hover:text-[#563B2A] text-base mt-1 text-gray-700">
                <a href="#">Terms Of Use</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl text-[#563B2A] font-semibold">
              View Guides
            </h2>
            <ul className="mt-1 font-inter">
              <li className="hover:text-[#563B2A] text-base mt-2 text-gray-700">
                <a href="#">Features</a>
              </li>
              <li className="hover:text-[#563B2A] text-base mt-1 text-gray-700">
                <a href="#">Careers</a>
              </li>
              <li className="hover:text-[#563B2A] text-base mt-1 text-gray-700">
                <a href="#">Blog Posts</a>
              </li>
              <li className="hover:text-[#563B2A] text-base mt-1 text-gray-700">
                <a href="#">Our Branch</a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl text-[#563B2A] font-semibold">Contact</h2>
            <div className="flex items-center gap-1 mt-2">
              <IoLocation size={20} color="#563B2A" />
              <span className="text-gray-500 text-sm font-inter">
                230 New York City,USA 1001
              </span>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <MdOutlinePermPhoneMsg size={20} color="#563B2A" />
              <span className="text-gray-500 text-sm font-inter">
                +1 444 334 557
              </span>
            </div>
            <div className="flex items-center gap-1 mt-3">
              <MdOutlineMailOutline size={20} color="#563B2A" />
              <span className="text-gray-500 text-sm font-inter">
                coffeeshop@gmail.com
              </span>
            </div>
          </div>
        </div>
        <p className="text-center text-sm text-gray-500">
          © All reserved coffeeshop.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
