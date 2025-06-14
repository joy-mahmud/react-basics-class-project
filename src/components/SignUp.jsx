import React, { useContext } from 'react'
import { userContext } from './ContextProvider'

const SignUp = () => {
    const { signUp } = useContext(userContext)
    const handleSignup = () => {
        signUp('joy1@gmail.com', '12345@@')
            .then((user => console.log(user)))
    }

    return (
        <div>SignUp
            <button onClick={handleSignup} className='border p-2 rounded cursor-pointer'>Sigin up now</button>
        </div>
    )
}

export default SignUp