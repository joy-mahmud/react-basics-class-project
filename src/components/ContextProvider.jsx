import React, { createContext, useState } from 'react'

export const userContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({ name: 'joy', email: 'joy@gmail.com' })

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export default ContextProvider