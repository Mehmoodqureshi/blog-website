/* eslint-disable jsx-a11y/img-redundant-alt */
import { useLocation } from "react-router-dom";
import React from "react";
import heroImage from "./Image.jpg"; // Import your image
import ProfileImage from "./dp.jpg"; // Import your image

const HeroSection = () => {
  const location = useLocation();
  const isBlogsPage = location.pathname === "/blogs";
  const cardClass = isBlogsPage
    ? "absolute bottom-2 flex items-end w-full left-10 "
    : "default-card-style";
  return (
    <div className="relative">
      {/* Hero image */}
      <img
        src={heroImage}
        alt="Hero"
        className="object-cover w-full h-full pt-20 rounded-lg"
      />

      {/* Card section */}
      <div
        className={`absolute bottom-[-10%] flex items-end w-full left-10 ${cardClass}`}
      >
        <div
          className={`p-4 rounded-lg shadow-md md:w-1/3 ${
            isBlogsPage
              ? " bg-opacity-100 text-white"   //bg transparent
              : "bg-white bg-opacity-100 text-black"
          }`}
        >
          <div className="h-full overflow-hidden">
            <div className="p-6">
              <h2 className="w-24 px-2 py-2 mb-1 text-xs font-medium tracking-widest text-white bg-blue-800 title-font">
                Technology
              </h2>
              <h1
                className={`mb-3 text-3xl font-bold ${
                  isBlogsPage ? "text-white" : "text-gray-900  "
                } title-font`}
              >
                The Impact of Technology on Workplace: How Technology is
                Changing
              </h1>
              {/* <p className="mb-3 leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p> */}
              <div className="flex flex-wrap items-center gap-6 pt-6">
                <img src={ProfileImage} alt="Photo" />
                <h4>Mehmood Qureshi</h4>
                {new Date().toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
