import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'

const ProductDetails = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [productData, setProductData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        // fetch('data.json')
        //   .then(res => res.json())
        //   .then(data => {
        //     setProductData(data)
        //     setLoading(false)
        //   })
        //   .catch(error => {
        //     setError(error)
        //     setLoading(false)
        //   })
        const fetchData = async () => {
            try {
                const res = await fetch('data.json')
                const data = await res.json()
                setProductData(data)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        fetchData()
    }, [])
    const handleAddToCart = (name) => {
        //alert(`${name} is added to the cart`)
        navigate("/cart", { state: { name: name } })
    }
    if (loading) {
        return (
            <h2 className='text-center font-bold text-xl'>Loading.....</h2>
        )
    }
    if (error) {
        return (
            <h2 className='text-center font-bold text-xl'>Error fetching data</h2>
        )
    }

    return (
        <div>
            <h2 className='text-center text-2xl font-semibold'>Product Details</h2>
            <button onClick={() => navigate(1)}>forward</button>

            {/* <ProductCard name={productData1.name} price={productData1.price} isAvailable={productData1.inStock} onAddToCart={handleAddToCart}></ProductCard>
      <ProductCard name={productData2.name} price={productData2.price} isAvailable={productData2.inStock} onAddToCart={handleAddToCart}></ProductCard> */}
            {
                productData.map((product, idx) => <ProductCard key={idx} name={product.name} price={product.price} isAvailable={product.inStock} description={product.description} onAddToCart={handleAddToCart}></ProductCard>

                )

            }
        </div>
    )
}

export default ProductDetails