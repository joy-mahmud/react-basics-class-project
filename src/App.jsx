

import ConditionalRendering from './components/conditionalRendering'
import ProductCard from './components/ProductCard'
import ParentComponent from './components/ParentComponent'

import Counter from './components/Counter'
import CounterUsingReducer from './components/CounterUsingReducer'
import UseRefComponent from './components/useRefComponent'
import UseWindowWidth from './hooks/UseWindowWidth'
import FormHandle from './components/FormHandle'
import HookForm from './components/hookForm'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
function App() {

  const width = UseWindowWidth()
  console.log('window width:', width)

  // console.log(productData)

  return (
    <div className='p-5'>
      <Navbar />
      <Outlet>

      </Outlet>


      {/* <ConditionalRendering>

      </ConditionalRendering> */}


      {/* <Counter></Counter> */}
      {/* <ParentComponent user={user}>

      </ParentComponent> */}

      {/* <UseRefComponent /> */}

      {/* <div className='p-5 text-center'>
        <h2 className='text-xl font-bold'>Window width:{width}</h2>
        {
          width < 768 ? (<p className='text-red-700'>Mobile view</p>) : (<p className='text-green-600'>Desktop view</p>)
        }
      </div>

      <FormHandle /> */}

    </div>


  )
}


export default App
