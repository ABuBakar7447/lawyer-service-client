import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup} from 'firebase/auth'
import app from '../Firebase/Firebase.config';



export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //sign up
   const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
   }

   //login
   const logInUser = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   //google log in
   const providerGoogleLogin = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider);
    }

    //logout
   const userLogOut =()=>{
    
    return signOut(auth)
   }

   
   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);
    });

    return () => {
        return unsubscribe();
    }
   } ,[])

    const authInfo = {user, loading, createUser, logInUser, userLogOut, providerGoogleLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;