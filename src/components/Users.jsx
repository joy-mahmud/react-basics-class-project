import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Users = () => {
    const [users, setUsers] = useState(null)

    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(response)
            const users = response.data
            if (users) {
                setUsers(users)
            }
        }
        getUsers()

    }, [])
    console.log(users)
    return (
        <div>Users</div>
    )
}

export default Users