import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
export const loadPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/")
    if (!response.ok) {
        throw new Response("posts not found", { status: 404 })
    }
    const posts = await response.json();
    return posts
}
export const Posts = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='mt-5'>
            {
                data && data.map((post, idx) => <div key={idx}>
                    <div className='border rounded-lg p-5 mb-5'>
                        <span >id:{post.id}</span> <br />
                        <span>id:{post.title}</span> <br />
                        <Link to={`/post/${idx + 1}`}>Go to post:{idx + 1}</Link>
                    </div>
                </div>)
            }

        </div>
    )
}
