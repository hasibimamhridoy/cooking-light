import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Recipies = ({chefs}) => {

    const [allRecipes,setAllRecipe] = useState([])

    useEffect(()=>{

        fetch('https://cooking-light-server-hasibimamhridoy.vercel.app/allRecipe')
        .then(res =>res.json())
        .then(data=>setAllRecipe(data))
    },[])

    return (
        <div className='lg:my-20'>
            <h1 className="text-center text-yellow-400 text-xl font-bold lg:text-5xl lg:mb-20 mb-5">All the Special Recipes</h1>
            <RecipeCard allRecipes={allRecipes}></RecipeCard>
        </div>
    );
};

export default Recipies;