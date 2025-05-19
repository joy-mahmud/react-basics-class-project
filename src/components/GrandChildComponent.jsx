import React, { useContext } from 'react'
import { userContext } from './ContextProvider'

export const GrandChildComponent = () => {
    const { user, setUser } = useContext(userContext)
    return (
        <div>

            <span> name:{user.name}</span> <br />
            <span> name:{user.email}</span> <br />
            <button className='border p-2 mt-3' onClick={() => setUser({ name: "mahmud", email: "mahmud@gmail.com" })}>Change user</button>

        </div>
    )
}
