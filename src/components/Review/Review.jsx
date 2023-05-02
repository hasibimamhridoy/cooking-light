import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Review() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
        <h1 className="text-center text-yellow-400 text-xl font-bold lg:text-5xl lg:mb-20 mb-5">What Client Say</h1>
        <div className="h-[70vh] lg:px-24 lg:mb-20 mb-10">
        
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#fffaf0] lg:mt-0 lg:px-10 h-screen w-full lg:flex gap-5 lg:flex-row flex flex-col-reverse justify-center items-center">
              
            <div className="leftside lg:w-[50%]  w-full lg:mb-0 mb-5">
                  <img className="rounded-s-full w-full h-full" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
  
              <div className="rightsde  p-5 lg:w-[50%] w-full ">
                <div class="slider-details lg:space-y-4 space-y-3">
                <span class="sm-title text-yellow-400 text-md font-extrabold italic">Anthinio Rogenbarg</span>
                  <div class="text-inner lg:space-y-6 space-y-1" >
                    
                    <p class="banner-des text-justify">
                    I had the pleasure of trying Chef John's signature dish and it was absolutely amazing! The flavors were perfectly balanced and I could taste the years of experience in every bite.
                    </p>
  
                  </div>
                </div>
              </div>
  
              
  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#fffaf0] lg:mt-0 lg:px-10 h-screen w-full lg:flex gap-5 lg:flex-row flex flex-col-reverse justify-center items-center">
          
              <div className="rightsde  p-5 lg:w-[50%] w-full ">
                <div class="slider-details lg:space-y-4 space-y-3">
                <span class="sm-title text-yellow-400 text-md font-extrabold italic">Orabala Kaiser</span>
                  <div class="text-inner lg:space-y-6 space-y-1" >
                    
                    <p class="banner-des text-justify">
                    Chef Jane's attention to detail and use of fresh, local ingredients really sets her apart. I've never had a meal quite like the one she prepared for me and it was truly unforgettable.
                    </p>
  
                  </div>
                </div>
              </div>
  
              <div className="leftside lg:w-[50%]  w-full lg:mb-0 mb-5">
                  <img className="rounded-s-full w-full h-full" src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
              </div>
  
              
  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#fffaf0] lg:mt-0 lg:px-10 h-screen w-full lg:flex gap-5 lg:flex-row flex flex-col-reverse justify-center items-center">
              
            <div className="leftside lg:w-[50%]  w-full lg:mb-0 mb-5">
                  <img className="rounded-s-full w-full h-full" src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
  
              <div className="rightsde  p-5 lg:w-[50%] w-full ">
                <div class="slider-details lg:space-y-4 space-y-3">
                <span class="sm-title text-yellow-400 text-md font-extrabold italic">Faiza Rumama</span>
                  <div class="text-inner lg:space-y-6 space-y-1" >
                    
                    <p class="banner-des text-justify">
                    Chef Mike's cooking is truly a work of art. Every dish he creates is not only delicious but beautifully presented. He is truly a master of his craft.
                    </p>
  
                  </div>
                </div>
              </div>
  
              
  
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#fffaf0] lg:mt-0 lg:px-10 h-screen w-full lg:flex gap-5 lg:flex-row flex flex-col-reverse justify-center items-center">
          
              <div className="rightsde  p-5 lg:w-[50%] w-full ">
                <div class="slider-details lg:space-y-4 space-y-3">
                <span class="sm-title text-yellow-400 text-md font-extrabold italic">Kaidu Balala</span>
                  <div class="text-inner lg:space-y-6 space-y-1" >
                    
                    <p class="banner-des text-justify">
                    I recently had the pleasure of dining at Chef Sarah's restaurant and I was blown away by the creativity and flavors in each dish. Her unique twist on traditional dishes is truly impressive.
                    </p>
  
                  </div>
                </div>
              </div>
  
              <div className="leftside lg:w-[50%]  w-full lg:mb-0 mb-5">
                  <img className="rounded-s-full w-full h-full" src="https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
              </div>
  
              
  
            </div>
          </SwiperSlide>
         
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
