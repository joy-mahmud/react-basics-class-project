

import ConditionalRendering from './components/conditionalRendering'
import ProductCard from './components/ProductCard'
import ParentComponent from './components/ParentComponent'

import Counter from './components/Counter'
function App() {

  const productData1 = {
    name: "galaxy s24",
    price: 1500,
    inStock: true,
  }
  const productData2 = {
    name: "i phone",
    price: 1200,
    inStock: false,
  }
  const handleAddToCart = (name) => {
    alert(`${name} is added to the cart`)
  }

  return (
    <div className='p-5'>
      <h2 className='text-center text-2xl font-semibold'>Product Details</h2>

      <ProductCard name={productData1.name} price={productData1.price} isAvailable={productData1.inStock} onAddToCart={handleAddToCart}></ProductCard>
      <ProductCard name={productData2.name} price={productData2.price} isAvailable={productData2.inStock} onAddToCart={handleAddToCart}></ProductCard>
      <ConditionalRendering>

      </ConditionalRendering>

      <ParentComponent>
        <h3>I am a children</h3>
        <p>This is a demo paragraph</p>
      </ParentComponent>
      <Counter></Counter>
    </div>

  )
}


export default App
