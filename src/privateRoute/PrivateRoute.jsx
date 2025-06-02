import React, { useContext } from 'react'
import { userContext } from '../components/ContextProvider'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { user } = useContext(userContext)
    const location = useLocation()
    if (user) {
        return (children)
    }
    return <Navigate to={'/login'} state={{ from: location.pathname }} replace={true}></Navigate>

}

export default PrivateRoute