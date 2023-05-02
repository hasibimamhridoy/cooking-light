import React from "react";
import { Link } from "react-router-dom";

const TricsCard = ({ allTrics }) => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mx-auto text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-yellow-400 dark:text-white">
              Cooking Tips & Tricks
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Cooking Tips & Tricks is a section where you can find useful and
              practical tips to improve your cooking skills. From basic
              techniques to advanced tricks, we've got you covered. Whether
              you're a beginner or an experienced cook, these tips will help you
              save time, enhance flavors, and create delicious meals every time.
              So, take a look and discover new ways to make your cooking journey
              more enjoyable and successful.
            </p>
          </div>
          <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-3">
            {allTrics.map((trics) => {
              const {
                id,
                title,
                shortBio,
                chef_picture,
                chef_name,
                img,
                details,
              } = trics;
              return (
                <div className="" key={id}>
                  <div class="border-r border-t">
                    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                      <figcaption class="flex items-center justify-center space-x-3">
                        <img
                          class="rounded-full w-9 h-9"
                          src={chef_picture}
                          alt="profile picture"
                        />
                        <div class="space-y-0.5 font-medium dark:text-white text-left">
                          <div>{chef_name}</div>
                        </div>
                      </figcaption>

                      <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 class="text-lg mt-10 font-semibold text-gray-900 dark:text-white">
                          {title}
                        </h3>
                        <p class="my-4">{shortBio}</p>
                      </blockquote>
                      <Link to={`/trics/${id}`}>
                        <button
                          type="button"
                          class="text-white py-3 px-4 hover:bg-yellow-400 transition duration-700  bg-green-400  rounded-md"
                        >
                          <p class="work-sans font-semibold text-sm tracking-wide">
                            View Details
                          </p>
                        </button>
                      </Link>
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TricsCard;
