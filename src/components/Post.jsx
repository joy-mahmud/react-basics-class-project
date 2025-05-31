import React from 'react'
import { useLoaderData } from 'react-router-dom'
export const loadPost = async ({ params }) => {
    const { id } = params
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!response.ok) {
        throw new Response("post not found", { status: 404 })
    }
    const post = await response.json();
    return post
}
const Post = () => {
    const data = useLoaderData()
    return (
        <div className='mt-5'>
            {data && <div className='border rounded-lg p-5 mb-5'>
                <span >id:{data.id}</span> <br />
                <span>title:{data.title}</span> <br />
                <span>body:{data.body}</span>
            </div>
            }
        </div>
    )
}

export default Post