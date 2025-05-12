import React from 'react'

const ProductCard = ({ name, price, isAvailable, onAddToCart }) => {
    return (
        <div >
            <h2>Product Details</h2>
            <span>name: {name}</span><br />
            <span>price: {price}</span> <br />
            <span>available: {isAvailable ? "in stock" : "not in stock"}</span> <br />
            <button onClick={() => onAddToCart(name)} className='border p-1 hover:cursor-pointer'>Add to cart</button>
        </div>

    )
}

export default ProductCard