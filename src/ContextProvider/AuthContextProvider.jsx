import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase/FirebaseConfig/firebaseConfig';

const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthContextProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const handleManualRegister = (email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }
    const handleManualLogin = (email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }
    const handleManualLogout = ()=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth)
    }



    const authInfo = {
        user,
        loading,
        handleManualRegister,
        handleManualLogin,
        handleManualLogout

    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthContextProvider;