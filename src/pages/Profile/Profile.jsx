import React, { useContext } from "react";
import { AuthContext } from "../../ContextProvider/AuthContextProvider";
import { useState } from "react";
import { useEffect } from "react";

const Profile = () => {
  const [favoriteData, setFavoriteData] = useState();
  const { user, loading } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    fetch(`http://localhost:6005/favorites?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setFavoriteData(data));
  }, []);

  console.log(favoriteData);

  return (
    <div className="bg-[#fffaf0] h-fit">
      <div className="banner bg-[#fffaf0]">
        <div className="bannerImg h-72">
          <img
            className="w-full h-full object-cover"
            src={user.photoURL && user.photoURL}
            alt=""
          />
        </div>
        <div className="chefPicture -translate-y-32 mx-auto">
          <img
            className="w-60 text-center mx-auto  object-cover rounded-full"
            src={user.photoURL && user.photoURL}
            alt=""
          />
          <div className="flex flex-col items-center gap-3 my-4">
            <h1 className="text-center w-[50%] lg:text-3xl text-xl">
              {user.displayName && user.displayName}
            </h1>
            <h1 className="text-center w-[50%] lg:text-xl text-md">
              {user.email && user.email}
            </h1>
          </div>

          <div className="favorites">
            
            <div className="bg-[#fffaf0] lg:p-10 p-3">
              
              <div className="banner  bg-[#fffaf0] lg:mx-24 space-y-5  mb-10">
              <h1 className="lg:text-3xl my-10">Favorites</h1>
                {favoriteData &&
                  favoriteData.map((recipe) => {
                    const {
                      recipe_img,
                      recipe_name,
                      ingredients,
                      cooking_method,
                      rating,
                    } = recipe;
                    return (
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
                            <span className="text-xl font-semibold">
                              Cooking Method :{" "}
                            </span>
                            <span className="">{cooking_method}</span>
                            <h1 className="text-xl font-semibold">
                              Ingredients
                            </h1>
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
                              className={`custom-btn  px-5 py-2 rounded-sm cursor-not-allowed bg-gray-400 hover:bg-gray-400`}
                            >
                              Remove to favorite
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
      </div>
    </div>
  );
};

export default Profile;
