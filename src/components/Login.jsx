import React, { useContext } from 'react'
import { userContext } from './ContextProvider'
import { useLocation, useNavigate } from 'react-router-dom'

const Login = () => {
    const { login, setUser } = useContext(userContext)
    const location = useLocation()
    const navigate = useNavigate()
    // console.log(location?.state?.from)
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        login(email, password)
            .then(user => {
                console.log(user)
                setUser(user)
                console.log(location.state)
                if (location?.state?.from) {
                    navigate(location?.state?.from)
                } else {
                    navigate('/')
                }
            })


    }
    return (
        <div className='max-w-md mx-auto mt-10 p-6 border rounded shadow-lg'>
            <h2 className='text-xl font-bold mb-4'>Login Now</h2>
            <form onSubmit={handleLogin} action=" space-y-y">

                <div>
                    <label className='block mb-1 font-medium'>Email:</label>
                    <input type="email" name='email' className='w-full border p-2 rounded-lg' />
                </div>
                <div>
                    <label className='block mb-1 font-medium'>Password:</label>
                    <input type="password" name='password' className='w-full border p-2 rounded-lg' />
                </div>

                <button type='submit' className='bg-blue-600 text-white px-4 py-1 rounded-lg mt-5 hover:cursor-pointer'>Login</button>
            </form>


        </div>
    )
}

export default Login