import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-blue-600 flex justify-between px-5 py-3'>
            <h2 className='text-2xl font-semibold text-white text-center'>Learn React</h2>
            <ul className='flex gap-5'>
                <li className='font-semibold text-xl text-white'><NavLink to={'/'}
                    className={({ isActive }) => isActive ? "text-red-500" : ""}
                >Home</NavLink></li>
                <li className='font-semibold text-xl text-white'><NavLink to={"/product-details"} className={({ isActive }) => isActive ? "text-red-500" : ""}>products</NavLink></li>
                <li className='font-semibold text-xl text-white'><NavLink to={"/posts"}
                    className={({ isActive }) => isActive ? "text-red-500" : ""}
                >posts</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar