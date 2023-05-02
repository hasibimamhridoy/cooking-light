import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { useNavigation } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const ChefsSection = ({chefs}) => {

    const navigation = useNavigation();
    const spinner = navigation.state === 'loading'
    console.log(spinner);
   
     if (navigation.state==='loading') {
       console.log(navigation.state === 'loading');
       return <Spinner></Spinner>;
     }

  return (
    <div className="lg:my-20 my-10">
        <h1 className="text-center text-yellow-400 text-xl font-bold lg:text-5xl lg:mb-10 mb-5">Special Chefs</h1>
      <ChefCard chefs={chefs}></ChefCard>
    </div>
  );
};

export default ChefsSection;
