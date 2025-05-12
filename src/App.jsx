
import ProductCard from './components/ProductCard'
function App() {

  const productData1 = {
    name: "galaxy s24",
    price: 1500,
    inStock: true,
  }
  const productData2 = {
    name: "i phone",
    price: 1200,
    inStock: true,
  }
  const handleAddToCart = (name) => {
    alert(`${name} is added to the cart`)
  }

  return (
    <div className='p-5'>
      <h2>Hello react</h2>
      <p>Today is our first class</p>
      <ProductCard name={productData1.name} price={productData1.price} isAvailable={productData1.inStock} onAddToCart={handleAddToCart}></ProductCard>
      <ProductCard name={productData2.name} price={productData2.price} isAvailable={productData2.inStock} onAddToCart={handleAddToCart}></ProductCard>

    </div>

  )
}


export default App
