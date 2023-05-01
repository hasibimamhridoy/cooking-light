import React from 'react';
import MyNavbar from '../../components/Shared/MyNavbar/MyNavbar';
import { Outlet } from 'react-router-dom';
import MyFooter from '../../components/Shared/MyFooter/MyFooter';

const MainLayouts = () => {
    return (
        <div className=''>
            <div className="mynavbar ">
                <MyNavbar></MyNavbar>
            </div>
            <div className="outlet my-container h-screen">
                <Outlet></Outlet>
            </div>
            <div className="footer">
                <MyFooter></MyFooter>
            </div>

        </div>
    );
};

export default MainLayouts;