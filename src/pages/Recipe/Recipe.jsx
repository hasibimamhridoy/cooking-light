import React, { useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../ContextProvider/AuthContextProvider";
const Recipe = () => {

  const {user} = useContext(AuthContext)
  console.log(user);

  const userEmail = user.email
  console.log(userEmail);

  const recipe = useLoaderData();

  const { recipe_img, recipe_name, ingredients, cooking_method, rating } =
    recipe;

  const [disabledRecipes, setDisabledRecipes] = useState(false);

  const favoriteData = {userEmail,recipe_img, recipe_name, ingredients, cooking_method, rating}

  const handleToast = () => {
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

    fetch('http://localhost:6005/favorites',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(favoriteData)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    })

    setDisabledRecipes(true);
  };

  return (
    <div className="bg-[#fffaf0] lg:p-10 p-3">
      <div className="banner  bg-[#fffaf0] lg:mx-24 border border-gray-300  mb-10">
        <div className="card lg:card-side bg-base-100 shadow-md rounded-sm ">
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
              <span className="card-title">{rating}</span>
            </div>
            <p className="space-y-3">
              <span className="text-xl font-semibold">Cooking Method : </span>
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
                onClick={()=>handleToast()}
                className={`custom-btn  px-5 py-2 rounded-sm ${
                  disabledRecipes
                    ? "cursor-not-allowed bg-gray-400 hover:bg-gray-400"
                    : "hover:bg-green-400 bg-yellow-400"
                }`}
                disabled={disabledRecipes}
              >
                Add to favorite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
