import React, { createContext, useState } from 'react'

export const userContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const login = (name, email) => {
        setUser({ name, email })
    }
    const logout = () => setUser(null)
    return (
        <userContext.Provider value={{ user, setUser, login, logout }}>
            {children}
        </userContext.Provider>
    )
}

export default ContextProvider