import React from "react";
import { Link, useNavigation } from "react-router-dom";

import {SiFoodpanda} from 'react-icons/si'
import {AiFillLike} from 'react-icons/ai'
import {MdWork} from 'react-icons/md'

import LazyLoad from "react-lazy-load";

const ChefCard = ({ chefs }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-24 px-3 py-10 gap-4">
      {chefs.map((chef) => {
        const {
          chef_name,
          id,
          chef_picture,

          likes,
          number_of_recipes,

          years_of_experience,
        } = chef;
        return (
          <div
            key={id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <LazyLoad height={350} threshold={0.95}>
                <img
                  className=" h-60 w-full object-fill rounded-t-lg"
                  src={chef_picture}
                  alt="product image"
                />
              </LazyLoad>
            </a>
            <div className="px-5 pb-5 space-y-3">
              <a>
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {chef_name}
                </h5>
              </a>

              <ul className="flex gap-5">
                <li className="items-center flex gap-1 ">
                <MdWork/>
                  <span className="font-extralight">Exprience:</span>{" "}
                  ({years_of_experience})
                </li>
                <li className="flex items-center justify-center gap-2"><SiFoodpanda />
                  <span className="font-extralight r">Recipes :</span>
                  ({number_of_recipes})
                </li>
              </ul>

              <div className="flex items-center justify-between">
                <p className="flex items-center gap-2">
                  <span className="font-extralight"><AiFillLike/></span> ({likes})
                </p>
                <Link to={`/chef/${id}`}>
                  <a class="custom-btn transition duration-700 hover:bg-green-400 cursor-pointer bg-yellow-400 px-8 py-2 rounded-sm">
                    View
                  </a>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ChefCard;
