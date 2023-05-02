import React from "react";
import "./Banner.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const Banner = () => {
  return (
    <div className="my-calc max-w-[1520px] bg-[#fffaf0]">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        loop={true}
      >
        <SwiperSlide>
          <div className=" bg-[#fffaf0] my-calc  lg:px-24 px-4 lg:flex lg:flex-row flex flex-col-reverse justify-center items-center">
            <div className="leftside lg:w-[50%] w-full ">
              <div class="slider-details lg:space-y-4 space-y-2">
                <span class="sm-title text-yellow-400 text-xl font-extrabold italic">
                  Best In Fish
                </span>
                <div class="text-inner lg:space-y-6 lg:px-0 space-y-3">
                  <h1 class="banner-title lg:text-3xl mx-auto font-medium lg:w-[70%]">
                    Asian Lettuce Wrap Chopped Salad Recipe
                  </h1>
                  <p class="banner-des">
                    Cooking Tips & Tricks" section where you can share cooking
                    hacks, time-saving techniques, and other helpful tips for
                    aspiring chefs.
                  </p>

                  <div class="banner-btn-sec lg:pb-0 mt-3">
                    <a class="custom-btn  hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm">
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
          <div className=" bg-[#fffaf0] my-calc  lg:px-24 px-4 lg:flex lg:flex-row flex flex-col-reverse justify-center items-center">
            <div className="leftside lg:w-[50%] w-full ">
              <div class="slider-details lg:space-y-4 space-y-2">
                <span class="sm-title text-yellow-400 text-xl font-extrabold italic">
                  Best In Pie
                </span>
                <div class="text-inner lg:space-y-6 lg:px-0 space-y-3">
                  <h1 class="banner-title lg:text-3xl mx-auto font-medium lg:w-[70%]">
                  Ingredient Spotlight" section where you can highlight
                  </h1>
                  <p class="banner-des">
                    Ingredient Spotlight" section where you can highlight a
                    specific ingredient and share different recipes that use it.
                  </p>

                  <div class="banner-btn-sec lg:pb-0 mt-3">
                    <a class="custom-btn  hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm">
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
          <div className=" bg-[#fffaf0] my-calc  lg:px-24 px-4 lg:flex lg:flex-row flex flex-col-reverse justify-center items-center">
            <div className="leftside lg:w-[50%] w-full ">
              <div class="slider-details lg:space-y-4 space-y-2">
                <span class="sm-title text-yellow-400 text-xl font-extrabold italic">
                  Best In Pie
                </span>
                <div class="text-inner lg:space-y-6 lg:px-0 space-y-3">
                  <h1 class="banner-title lg:text-3xl mx-auto font-medium lg:w-[70%]">
                  Food Pairings" section where you can highlight
                  </h1>
                  <p class="banner-des">
                  Food Pairings" section where you can suggest which dishes pair well with different wines, beers, or other beverages.
                  </p>

                  <div class="banner-btn-sec lg:pb-0 mt-3">
                    <a class="custom-btn  hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm">
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
      </Swiper>
    </div>
  );
};

export default Banner;
