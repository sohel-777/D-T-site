import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-10 bg-red-100  p-10 mt-6 ">
      <div className="flex flex-col  gap-3 items-start ">
        <p className="text-xl font-semibold  cursor-pointer">
          Post-shower Experience Redefined
        </p>
        <p className="text-base font-medium  cursor-pointer">
          Experience luxurious, safer towels with us.
        </p>
        <span className="flex justify-start items-start gap-2">
          <FaTwitter className="h-6 w-6" />
          <FaFacebookSquare className="h-6 w-6" />
          <FaInstagram className="h-6 w-6" />
          <FaPinterest className="h-6 w-6" />
        </span>
      </div>

      <div className="flex flex-col  gap-3 items-start ">
        <p className="text-xl font-semibold  cursor-pointer">QUICK LINKS</p>
        <p className="text-base font-medium  cursor-pointer">About Us</p>
        <p className="text-base font-medium  cursor-pointer">Contact Us</p>
        <p className="text-base font-medium  cursor-pointer">
          Terms & Conditions
        </p>
        <p className="text-base font-medium  cursor-pointer">
          Returns & Exchanges
        </p>
        <p className="text-base font-medium  cursor-pointer">Privacy Policy</p>
      </div>

      <div className="flex flex-col  items-start gap-4">
        <div className="flex flex-col justify-between items-start gap-2">
          <input className="p-2 w-80" type="text" placeholder="Enter email" />
          <button className="border border-black py-2 px-4 hover:bg-white">
            SIGN UP
          </button>
        </div>
        <span className="flex justify-start items-start gap-2">
          <FaTwitter className="h-6 w-6" />
          <FaFacebookSquare className="h-6 w-6" />
          <FaInstagram className="h-6 w-6" />
          <FaPinterest className="h-6 w-6" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
