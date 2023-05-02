import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,signInWithPopup,GoogleAuthProvider, GithubAuthProvider,   } from "firebase/auth";
import { app } from '../firebase/FirebaseConfig/firebaseConfig';



const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const auth = getAuth(app);
export const AuthContext = createContext(null)
const AuthContextProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const handleManualRegister = (email,pass)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,pass)
    }

    const handleGoogleRegister = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const handleGithubRegister = ()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    const handleManualLogin = (email,pass)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,pass)
    }
    const handleManualLogout = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    
    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })

        return ()=> unSubscribe()

    },[])



    const authInfo = {
        user,
        loading,
        handleManualRegister,
        handleGoogleRegister,
        handleGithubRegister,
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