import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../../layouts/MainLayouts/MainLayouts';
import Home from '../../pages/Home/Home';
import Blog from '../../pages/Blog/Blog';

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
            }
        ]
    }
])

export default MainRoutes;