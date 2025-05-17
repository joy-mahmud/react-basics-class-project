

import ConditionalRendering from './components/conditionalRendering'
import ProductCard from './components/ProductCard'
import ParentComponent from './components/ParentComponent'

import Counter from './components/Counter'
import { useEffect, useState } from 'react'
function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [productData, setProductData] = useState([])
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
    alert(`${name} is added to the cart`)
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
  console.log(productData)

  return (
    <div className='p-5'>
      <h2 className='text-center text-2xl font-semibold'>Product Details</h2>

      {/* <ProductCard name={productData1.name} price={productData1.price} isAvailable={productData1.inStock} onAddToCart={handleAddToCart}></ProductCard>
      <ProductCard name={productData2.name} price={productData2.price} isAvailable={productData2.inStock} onAddToCart={handleAddToCart}></ProductCard> */}
      {
        productData.map((product, idx) => <ProductCard key={idx} name={product.name} price={product.price} isAvailable={product.inStock} description={product.description} onAddToCart={handleAddToCart}></ProductCard>

        )

      }
      {/* <ConditionalRendering>

      </ConditionalRendering>

      <ParentComponent>
        <h3>I am a children</h3>
        <p>This is a demo paragraph</p>
      </ParentComponent>
      <Counter></Counter> */}

    </div>


  )
}


export default App
