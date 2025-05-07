import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '../firebase.init';

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userData)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: userData.name,
            photoURL: userData.photoUrl,
          })
          .then(() => {
            return auth.currentUser.reload();
          })
          .then(() => {
            setLoading(true)
            setUser({ ...auth.currentUser });
          });
    }

    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
            })
        return ()=>{
            unSubscribe();
        }
    },[user])

    const userInfo = {
        googleSignIn,
        signUp,
        updateUser,
        signIn,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;