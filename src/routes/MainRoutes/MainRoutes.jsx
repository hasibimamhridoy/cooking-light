import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../../layouts/MainLayouts/MainLayouts';
import Home from '../../pages/Home/Home';
import Blog from '../../pages/Blog/Blog';
import Login from '../../pages/LoginRegister/Login/Login';
import Register from '../../pages/LoginRegister/Register/Register';
import Chef from '../../pages/Chef/Chef';

const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        loader:()=>fetch("http://localhost:6005/allChef"),
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("http://localhost:6005/allChef")
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/chef/:id',
                element:<Chef></Chef>,
                loader:({params})=>fetch(`http://localhost:6005/chef/${params.id}`)
                
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