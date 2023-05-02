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

//   const [chefs, setChefs] = useState([]);
//   // const [chef,setChef] = useState([])
//   useEffect(() => {
//     fetch("http://localhost:6005/allChef")
//       .then((res) => res.json())
//       .then((data) => setChefs(data));
//   }, []);


  return (
    <div>
      <ChefCard chefs={chefs}></ChefCard>
    </div>
  );
};

export default ChefsSection;
