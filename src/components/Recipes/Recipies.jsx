import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Recipies = ({chefs}) => {

    const [allRecipes,setAllRecipe] = useState([])

    useEffect(()=>{

        fetch('http://localhost:6005/allRecipes')
        .then(res =>res.json())
        .then(data=>setAllRecipe(data.slice(0,10)))
    },[])

    return (
        <div className='lg:my-20'>
            <h1 className="text-center text-yellow-400 text-xl font-bold lg:text-5xl lg:mb-20 mb-5">All the Special Recipes</h1>
            <RecipeCard allRecipes={allRecipes}></RecipeCard>
        </div>
    );
};

export default Recipies;