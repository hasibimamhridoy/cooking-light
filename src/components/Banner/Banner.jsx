import React from "react";
import "./Banner.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Banner = () => {
  return (
    <div className="my-calc bg-[#fffaf0]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
      >
        <SwiperSlide>
          <div className=" bg-[#fffaf0] my-calc py-5 px-3 lg:px-24 lg:my-container lg:flex lg:flex-row flex flex-col-reverse justify-center items-center">
            
            <div className="leftside lg:w-[50%] w-full ">
              <div class="slider-details space-y-4">
              <span class="sm-title text-yellow-400 text-xl font-extrabold italic">Best In Fish</span>
                <div class="text-inner space-y-6">
                  
                  <h1 class="banner-title text-3xl font-medium lg:w-[70%]">
                    The Best Food Monger in your City Area
                  </h1>
                  <p class="banner-des">
                    Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed
                    do eimod <br /> tempor incididunt ut labore et dolore magna
                    aliqua Quis
                  </p>

                  <div class="banner-btn-sec mt-3">
                    <a class="custom-btn hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm">
                      Order Now
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="rightsideCover lg:w-[50%] w-full lg:mb-0 mb-5">
                <img className="lg:h-[560px]" src="banner_1.png" alt="" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[#fffaf0] my-calc py-5 px-3 lg:px-24 lg:my-container lg:flex lg:flex-row flex flex-col-reverse justify-center items-center">
            
            <div className="leftside lg:w-[50%] w-full ">
              <div class="slider-details space-y-4">
              <span class="sm-title text-yellow-400 text-xl font-extrabold italic">Best In Cafeu</span>
                <div class="text-inner space-y-6">
                  
                  <h1 class="banner-title text-3xl font-medium lg:w-[70%]">
                  Asian Lettuce Wrap Chopped Salad Recipe
                  </h1>
                  <p class="banner-des">
                    Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed
                    do eimod <br /> tempor incididunt ut labore et dolore magna
                    aliqua Quis
                  </p>

                  <div class="banner-btn-sec mt-3">
                    <a class="custom-btn hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm">
                      Order Now
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="rightsideCover lg:w-[50%] w-full lg:mb-0 mb-5">
                <img className="lg:h-[560px]" src="banner_2.png" alt="" />
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" bg-[#fffaf0] my-calc py-5 px-3 lg:px-24 lg:my-container lg:flex lg:flex-row flex flex-col-reverse justify-center items-center">
            
            <div className="leftside lg:w-[50%] w-full ">
              <div class="slider-details space-y-4">
              <span class="sm-title text-yellow-400 text-xl font-extrabold italic">Best In Chicken</span>
                <div class="text-inner space-y-6">
                  
                  <h1 class="banner-title text-3xl font-medium lg:w-[70%]">
                  Different Spice For A Different Taste
                  </h1>
                  <p class="banner-des">
                    Lorem ipsum dolor sit amet, conscetur adipiscing elit, sed
                    do eimod <br /> tempor incididunt ut labore et dolore magna
                    aliqua Quis
                  </p>

                  <div class="banner-btn-sec mt-3">
                    <a class="custom-btn hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm">
                      Order Now
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>

            <div className="rightsideCover lg:w-[50%] w-full lg:mb-0 mb-5">
                <img className="lg:h-[560px]" src="banner_3.png" alt="" />
            </div>

          </div>
        </SwiperSlide>


       
        ...
      </Swiper>
    </div>
  );
};

export default Banner;
