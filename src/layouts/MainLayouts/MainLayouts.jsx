import React from 'react';
import MyNavbar from '../../components/Shared/MyNavbar/MyNavbar';
import { Outlet, useNavigation } from 'react-router-dom';
import MyFooter from '../../components/Shared/MyFooter/MyFooter';
import Spinner from '../../components/Spinner/Spinner';


const MainLayouts = () => {
     
    const navigation = useNavigation();
    const spinner = navigation.state === 'loading'
    console.log(spinner);
   
     if (navigation.state==='loading') {
       console.log(navigation.state === 'loading');
       return <Spinner></Spinner>;
     }
  
    return (
        <div className='max-w-[1520px] mx-auto'>
            <div className="mynavbar ">
                <MyNavbar></MyNavbar>
            </div>
            <div className="outlet lg:h-fit">
                <Outlet></Outlet>
            </div>
            <div className="footer w-full bg-neutral-900 flex justify-center">
                <MyFooter></MyFooter>
            </div>

        </div>
    );
};

export default MainLayouts;