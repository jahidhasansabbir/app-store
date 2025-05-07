import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase.init';

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState([])
    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }
    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userData)=>{
        return updateProfile(auth.currentUser, {
            displayName: userData.name,
            photoURL: userData.photoUrl,
          })
    }

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
                setUser(currentUser)
            })
        return ()=>{
            unSubscribe();
        }
    },[])

    const userInfo = {
        googleSignIn,
        signUp,
        updateUser,
        signIn,
        user,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;