import React, { useContext } from 'react'
import { userContext } from './ContextProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const { setUser } = useContext(userContext)
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin = () => {
        setUser({ name: "joy", email: "joy@gmail.com" })
        navigate(location.state.from)
    }
    return (
        <div className='mt-20'>
            <button onClick={() => handleLogin()} className='bg-green-400 rounded-lg p-5'>
                Login
            </button>
        </div>
    )
}

export default Login