import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import auth from '../firebase/firebase.config'

export const userContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('listening the user state change')
        })

        return () => {
            return unsubscribe()
        }
    })

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const logout = () => {
        signOut(auth).then(() => {
            console.log("signed out")
            setUser(null)
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <userContext.Provider value={{ user, setUser, login, logout, signUp }}>
            {children}
        </userContext.Provider>
    )
}

export default ContextProvider