import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ allRecipes }) => {

  console.log(allRecipes);
    const [showAll,setShowAll] = useState(false)
  return (
    <div>
        <div className="lg:px-24 px-3 grid grid-cols-1 lg:grid-cols-2 gap-3 ">
      {showAll ? allRecipes.map((recipe) => {
        return (
          <div key={recipe._id} class="mx-auto">
            <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-white rounded-lg border shadow-lg pb-6 lg:pb-0">
              <div class="w-full h-52 lg:w-1/3 lg:p-4">
                <img
                  src={recipe.recipe_img}
                  alt="image"
                  class="h-64 rounded-md lg:h-full object-cover object-center w-full"
                />
              </div>

              <div class="w-full lg:w-2/3 p-4">
                <div class="inline-grid">
                  <p class="work-sans font-semibold text-xl text-black">
                    {recipe.recipe_name}
                  </p>
                  <p class="raleway text-sm my-4 text-black opacity-75">
                  {recipe.cooking_method.slice(0,250)}......
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center -mt-8 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-8 lg:justify-end lg:pr-8 py-1">
              <Link to={`/recipe/${recipe._id}`}><button
                type="button"
                class="text-white py-3 hover:bg-yellow-400 transition duration-700 px-4 bg-green-400 rounded-md"
              >
                <p class="work-sans font-semibold text-sm tracking-wide">
                  View Details
                </p>
              </button></Link>
            </div>
          </div>
        );
      })
      
      :
      
      allRecipes.slice(0,6).map((recipe) => {
        return (
          <div class="mx-auto">
            <div class="inline-grid max-w-xs sm:max-w-xs lg:max-w-lg lg:flex bg-white rounded-lg border shadow-lg pb-6 lg:pb-0">
              <div class="w-full h-52 lg:w-1/3 lg:p-4">
                <img
                  src={recipe.recipe_img}
                  alt="image"
                  class="h-64 rounded-md lg:h-full object-cover object-center w-full"
                />
              </div>

              <div class="w-full lg:w-2/3 p-4">
                <div class="inline-grid">
                  <p class="work-sans font-semibold text-xl text-black">
                    {recipe.recipe_name}
                  </p>
                  <p class="raleway text-sm my-4 text-black opacity-75">
                  {recipe.cooking_method.slice(0,250)}......
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center -mt-8 rounded-b-lg max-w-xs lg:max-w-lg lg:-mt-8 lg:justify-end lg:pr-8 py-1">
              <Link to={`/recipe/${recipe._id}`}><button
                type="button"
                class="text-white py-3 px-4 hover:bg-yellow-400 transition duration-700  bg-green-400  rounded-md"
              >
                <p class="work-sans font-semibold text-sm tracking-wide">
                  View Details
                </p>
              </button></Link>
            </div>
          </div>
        );
      })}
      
    </div>
    {!showAll ? <div className="flex justify-center my-10"><button onClick={()=>setShowAll(!showAll)} className="custom-btn hover:bg-green-400 cursor-pointer bg-yellow-400 transition duration-700 px-5 py-2 rounded-sm">See All...</button></div> :<div className="flex justify-center my-10"><button onClick={()=>setShowAll(!showAll)} className="custom-btn transition duration-700 hover:bg-green-400 cursor-pointer bg-yellow-400 px-5 py-2 rounded-sm">See less...</button></div>}
    </div>
  );
};

export default RecipeCard;
