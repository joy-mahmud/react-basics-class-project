
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { StrictMode } from 'react'
import ContextProvider from './components/ContextProvider.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CounterUsingReducer from './components/CounterUsingReducer.jsx'
import HookForm from './components/hookForm.jsx'
import ProductDetails from './components/ProductDetails.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/product-details",
        element: <ProductDetails />
      },
      {
        path: "/counter",
        element: <CounterUsingReducer />

      },
    ]
  },

  {
    path: "/hook-form",
    element: <HookForm />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>


)
