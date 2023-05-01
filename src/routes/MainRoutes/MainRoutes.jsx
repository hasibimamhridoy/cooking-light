import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../../layouts/MainLayouts/MainLayouts';
import Home from '../../pages/Home/Home';
import Blog from '../../pages/Blog/Blog';
import Login from '../../pages/LoginRegister/Login/Login';
import Register from '../../pages/LoginRegister/Register/Register';

const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]
    }
])

export default MainRoutes;