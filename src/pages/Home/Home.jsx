import React from 'react';
import Banner from '../../components/Banner/Banner';
import ChefsSection from '../../components/ChefsSection/ChefsSection';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import Recipies from '../../components/Recipes/Recipies';

const Home = () => {
    const chefs = useLoaderData()
    const navigation = useNavigation();

    const spinner = navigation.state === 'loading'
    console.log(spinner);
   
     if (navigation.state==='loading') {
       console.log(navigation.state === 'loading');
       return <Spinner></Spinner>;
     }
    return (
        <div className=''>
            <Banner></Banner>
            <ChefsSection chefs={chefs}></ChefsSection>
            <Recipies chefs={chefs}></Recipies>
        </div>
    );
};

export default Home;