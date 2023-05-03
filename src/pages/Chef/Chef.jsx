import React, { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import "./Chef.css";
import Spinner from "../../components/Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import Rating from "react-rating";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Chef = () => {
  const navigation = useNavigation();

  const chef = useLoaderData();
  const {
    banner_img,
    chef_name,
    id,
    chef_picture,
    bio,
    likes,
    number_of_recipes,
    recipes,
    years_of_experience,
  } = chef;

  const [disabledRecipes, setDisabledRecipes] = useState(
    Array(recipes.length).fill(false)
  );

  console.log(disabledRecipes);

  const spinner = navigation.state === "loading";
  console.log(spinner);

  if (navigation.state === "loading") {
    console.log(navigation.state === "loading");
    return <Spinner></Spinner>;
  }

  const handleToast = (index) => {
    toast.success("Successfully Added!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    const updatedDisabledRecipes = [...disabledRecipes];
    updatedDisabledRecipes[index] = true;
    setDisabledRecipes(updatedDisabledRecipes);
  };

  return (
    <div className="bg-[#fffaf0]">
      <div className="banner  bg-[#fffaf0] lg:mx-24 border border-gray-300  mb-10">
        <div className="bannerImg h-72">
          <img
            className="w-full  h-full object-cover"
            src={banner_img}
            alt=""
          />
        </div>
        <div className="chefPicture -translate-y-32 mx-auto">
          <img
            className="w-60 text-center mx-auto  h-60 object-cover rounded-full"
            src={chef_picture}
            alt=""
          />
          <div className="flex flex-col items-center gap-3 my-4">
            <h1 className="text-center w-[50%] lg:text-3xl text-xl">
              {chef_name}
            </h1>
            <h1 className="text-center px-5 lg:px-0 lg:w-[50%]">{bio}</h1>
          </div>

          <div className="information px-1 lg:px-0">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="bg-white border-b">
                        <tr>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Likes
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Recipes
                          </th>
                          <th
                            scope="col"
                            className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Experience
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100 border-b">
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {likes}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {number_of_recipes}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {years_of_experience}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="recipeInformation flex flex-col gap-5">
            {recipes.map((recipe, i) => {
              const {
                recipe_img,
                recipe_name,
                ingredients,
                cooking_method,
                rating,
              } = recipe;
              return (
                <div
                  key={i}
                  className="card lg:card-side bg-base-100 shadow-md rounded-sm  lg:mx-9"
                >
                  <div className="lg:w-[30%]">
                    <div className="h-full">
                      <img
                        className="w-full h-full object-cover"
                        src={recipe_img}
                        alt="Album"
                      />
                    </div>
                  </div>

                  <div className="card-body p-0 px-4 lg:w-[70%]">
                    <div className="flex mt-3 justify-between ">
                      <h2 className="card-title">{recipe_name}</h2>
                      <span className="card-title">
                        <Rating
                          initialRating={rating}
                          readonly
                          emptySymbol={<AiOutlineStar></AiOutlineStar>}
                          fullSymbol={<AiFillStar></AiFillStar>}
                        />{" "}
                        {rating}
                      </span>
                    </div>
                    <p className="space-y-3">
                      <span className="text-xl font-semibold">
                        Cooking Method :{" "}
                      </span>
                      <span className="">{cooking_method}</span>
                      <h1 className="text-xl font-semibold">Ingredients</h1>
                      <div className="ingredients  flex gap-x-2 flex-shrink flex-wrap">
                        {ingredients.map((ingredient, i) => {
                          return (
                            <div key={i} className="">
                              <li>{ingredient}</li>
                            </div>
                          );
                        })}
                      </div>
                    </p>

                    <div className="addtofavorite flex  justify-end py-5">
                      <button
                        onClick={() => handleToast(i)}
                        className={`custom-btn ${disabledRecipes[i] && 'cursor-not-allowed bg-gray-500 hover:bg-gray-500'}  hover:bg-green-400 bg-yellow-400 px-5 py-2 rounded-sm`}
                        disabled={disabledRecipes[i]}
                      >
                        Add to favorite
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef;
