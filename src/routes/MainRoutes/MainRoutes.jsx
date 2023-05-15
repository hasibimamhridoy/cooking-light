import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayouts from '../../layouts/MainLayouts/MainLayouts';
import Home from '../../pages/Home/Home';
import Blog from '../../pages/Blog/Blog';
import Login from '../../pages/LoginRegister/Login/Login';
import Register from '../../pages/LoginRegister/Register/Register';
import Chef from '../../pages/Chef/Chef';
import Error from '../../pages/Error/Error';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';
import About from '../../pages/About/About';
import Recipe from '../../pages/Recipe/Recipe';
import Tric from '../../pages/Tric/Tric';
import Profile from '../../pages/Profile/Profile';

const MainRoutes = createBrowserRouter([
    {
        path:'/',
        element:<MainLayouts></MainLayouts>,
        loader:()=>fetch("https://cooking-light-server-hasibimamhridoy.vercel.app/allChef"),
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch("https://cooking-light-server-hasibimamhridoy.vercel.app/allChef")
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/profile',
                element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
                
            },
            {
                path:'/chef/:id',
                element:<PrivateRoutes><Chef></Chef></PrivateRoutes>,
                loader:({params})=>fetch(`https://cooking-light-server-hasibimamhridoy.vercel.app/chef/${params.id}`)
                
            },
            {
                path:'/recipe/:id',
                element:<PrivateRoutes><Recipe></Recipe></PrivateRoutes>,
                loader:({params})=>fetch(`http://localhost:6005/recipe/${params.id}`)
                
            },
            {
                path:'/trics/:id',
                element:<Tric></Tric>,
                loader:({params})=>fetch(`https://cooking-light-server-hasibimamhridoy.vercel.app/trics/${params.id}`)
                
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