import React from 'react';
import MyNavbar from '../../components/Shared/MyNavbar/MyNavbar';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <div className="mynavbar">
                <MyNavbar></MyNavbar>
            </div>
            <div className="outlet">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayouts;