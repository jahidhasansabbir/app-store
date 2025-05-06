import React from 'react';
import { AuthContext } from './AuthContext';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase.init';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }
    const userInfo = {
        googleSignIn,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;