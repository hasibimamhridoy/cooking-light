import React from 'react';
import Banner from '../../components/Banner/Banner';
import ChefsSection from '../../components/ChefsSection/ChefsSection';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import Recipies from '../../components/Recipes/Recipies';
import Review from '../../components/Review/Review';
import Trics from '../../components/Trics/Trics';

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
            <Review></Review>
            <Trics></Trics>
        </div>
    );
};

export default Home;