/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Union from "./Union.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#E8E8EA] relative text-black">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="py-[60px] px-0">
              <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                <div className="lg:col-span-4 md:col-span-12">
                  <h1 className="font-bold">About</h1>
                  <p className="mt-6 text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <h3 className="pt-8">
                    <b>Email</b> : info@jstemplate.net
                  </h3>
                  <h3>
                    <b>Phone</b> : 0347 824454222
                  </h3>
                </div>

                <div className="lg:col-span-2 md:col-span-4">
                  <h5 className="tracking-[1px] text-black font-bold">
                    Company
                  </h5>
                  <ul className="mt-6 list-none">
                    <li>
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        About us
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        Services
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        Pricing
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4">
                  <h5 className="tracking-[1px] text-black font-bold">
                    Category
                  </h5>
                  <ul className="mt-6 list-none">
                    <li>
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        Lifestyle
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        Technology
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        Travel
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        Business
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        Economy
                      </a>
                    </li>
                    <li className="mt-[10px]">
                      <a
                        href="#"
                        className="text-black transition-all duration-500 ease-in-out hover:text-gray-400"
                      >
                        Sports
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-3 md:col-span-4 w-80 h-52 pr-4 px-2 py-8 bg-[#F6F6F7] ml-[-31px]">
                  <h5 className="tracking-[1px] text-black text-center font-semibold">
                   <b>Weekly Newsletter</b>
                  </h5>
                  <p className="text-center ">Get blog articles and offer via email.</p>
                  <form>
                    <div className="grid grid-cols-1">
                      <div className="my-3">
                        <div className="relative mt-2">
                          <input
                            type="email"
                            className="w-full h-10 px-3 py-2 text-gray-100 bg-transparent border rounded rounded-t-sm rounded-b-none rounded-l-sm rounded-r-none outline-none outline-0 border-gray-800/90 focus:shadow-none focus:border-gray-800/90"
                            placeholder="Email"
                            name="email"
                            required=""
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        id="submitsubscribe"
                        name="send"
                        className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-blue-800 border-[#3675d4c2] text-white rounded-md"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-0 border-t border-gray-800 py-7">
        <div className="container px-6 mx-auto text-center">
          <div className="grid items-center md:grid-cols-2">
            <div className="flex text-center md:text-left">
              <a href="#" className="text-[22px] focus:outline-none">
                <img className="h-12" src={Union} alt="" />
              </a>
              <div className="pl-2">
                <span className="text-lg font-semibold text-black">Meta<b>Blog</b></span>
                <p className="mb-0">
                  &copy; <b>JS Template</b> {new Date().getFullYear()}. All rights reserved
                </p>
              </div>
            </div>
            <div className="flex items-end gap-5 ml-72">
              <a
                href="#"
                className="text-black transition-all duration-500 ease-in-out hover:text-gray-500"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-black transition-all duration-500 ease-in-out hover:text-gray-500"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-black transition-all duration-500 ease-in-out hover:text-gray-500"
              >
                Cookies Policy
              </a>
            </div>

          </div>
          {/* <!--end grid--> */}
        </div>
        {/* <!--end container--> */}
      </div>
    </footer>
  );
};
// <!--end footer-->

export default Footer;
