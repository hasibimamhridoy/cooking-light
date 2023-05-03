import React from "react";

const About = () => {
  return (
    <div className=" flex justify-center items-center">
      <div class="py-16 bg-[#fffaf0]">
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div class="md:5/12 lg:w-5/12">
              <img
                src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div class="md:7/12 lg:w-6/12">
              <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">
              Welcome to our website!
              </h2>
              <p class="mt-6 text-gray-600">
                We are passionate about cooking healthy
                and delicious meals that are both easy to prepare and full of
                flavor. Our team of experienced chefs and nutritionists have
                curated a collection of recipes that are both nutritious and
                satisfying, without sacrificing taste. We believe that healthy
                eating doesn't have to be bland or boring, and we're here to
                prove it.
              </p>
              <p class="mt-4 text-gray-600">
                {" "}
                At our website, you'll find a variety of recipes to suit your
                dietary preferences and lifestyle, whether you're a vegan,
                vegetarian, or looking for gluten-free options. Our recipes are
                easy to follow and use simple ingredients that you can find at
                your local grocery store. We're committed to helping you live a
                healthier and happier life through food. Thank you for visiting
                our website, and we hope you enjoy our recipes as much as we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
