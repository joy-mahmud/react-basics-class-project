import React from 'react'

const ProductCard = ({ name, price, isAvailable, onAddToCart }) => {
    return (
        <div className='border border-gray-300 p-4 m-4 rounded-lg shadow-lg'>
            <h2 className='text-xl font-medium text-gray-800 mb-1'>Product Details</h2>
            <span className='text-[18px] text-gray-500 mb-1'>name: {name}</span><br />
            <span className='text-gray-700 mb-1'>price:$ {price}</span> <br />
            <span className='text-sm text-gray-600'>available: <span className={isAvailable ? 'text-green-600' : 'text-red-600'}> {isAvailable ? "in stock" : "not in stock"}</span> <br /></span>

            <button onClick={() => onAddToCart(name)} className='border px-2 py-1 hover:cursor-pointer rounded-lg bg-blue-600 hover:bg-blue-800 text-white'>Add to cart</button>
        </div>

    )
}

export default ProductCard