
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
import { loadPosts, Posts } from './components/Posts.jsx'
import Post, { loadPost } from './components/Post.jsx'
import ErrorPage from './components/ErrorPage.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/product-details",
        element: <ProductDetails />
      },
      {
        path: "/counter",
        element: <CounterUsingReducer />

      },
      {
        path: "/posts",
        element: <Posts />,
        loader: loadPosts

      }, {
        path: "/post/:id",
        element: <Post />,
        loader: loadPost,
        errorElement: <h1>Sorry this post is not found</h1>
      }

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
