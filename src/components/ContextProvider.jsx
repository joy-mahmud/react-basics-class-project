import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import auth from '../firebase/firebase.config'

export const userContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (name, email) => {
        setUser({ name, email })
    }
    const logout = () => setUser(null)
    return (
        <userContext.Provider value={{ user, setUser, login, logout, signUp }}>
            {children}
        </userContext.Provider>
    )
}

export default ContextProvider