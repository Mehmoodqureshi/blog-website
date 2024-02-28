import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import BlogSection from './BlogSection';
import Footer from './Footer'

const Home =()=>{
    return(
        <div className="w-full p-0 m-0 overflow-hidden">
  <div>
    <Navbar />
  </div>
  <div>
    <HeroSection/>
  </div>
  <div className="w-[750px] h-[100px] rounded-lg mx-auto my-4 mt-24">
        <div className="bg-[#E8E8EA] h-full flex flex-col items-center justify-center text-[#696A75]">
        <span className="text-white text-20px leading-24px font-semibold tracking-0em text-center w-[177px] h-[24px]">Advertisement</span>
          <span className="text-white text-20px leading-24px font-semibold tracking-0em text-center w-[177px] h-[24px]">
            You Can Place Ads
          </span>
          <span className="text-white text-20px leading-24px font-semibold tracking-0em text-center w-[177px] h-[24px]">
            750 x   100
          </span>
        </div>
      </div>
  <div>
    <BlogSection/>
  </div>
  <div className="w-[750px] h-[100px] rounded-lg mx-auto my-4 mt-2">
        <div className="bg-[#E8E8EA] h-full flex flex-col items-center justify-center text-[#696A75]">
        <span className="text-white text-20px leading-24px font-semibold tracking-0em text-center w-[177px] h-[24px]">Advertisement</span>
          <span className="text-white text-20px leading-24px font-semibold tracking-0em text-center w-[177px] h-[24px]">
            You Can Place Ads
          </span>
          <span className="text-white text-20px leading-24px font-semibold tracking-0em text-center w-[177px] h-[24px]">
            750 x   100
          </span>
        </div>
      </div>
  <div className='pt-4'>
    <Footer/>
  </div>
  </div>

  );
}
export default Home