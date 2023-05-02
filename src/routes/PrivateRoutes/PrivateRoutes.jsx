import React, { useContext } from 'react';
import { AuthContext } from '../../ContextProvider/AuthContextProvider';
import Spinner from '../../components/Spinner/Spinner';
import Login from '../../pages/LoginRegister/Login/Login';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext)

    if (loading) {
        return <Spinner></Spinner>
    }

    if (!user) {
        return <Navigate to='/login' state={{from:location}}> </Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoutes;