
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
import Cart from './components/Cart.jsx'
import PrivateRoute from './privateRoute/PrivateRoute.jsx'
import Login from './components/Login.jsx'
import Users from './components/Users.jsx'
import SignUp from './components/SignUp.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/product-details",
        element: <PrivateRoute> <ProductDetails /></PrivateRoute>
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
      }, {
        path: "/cart",
        element: <Cart />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/login',
        element: <Login />
      }, {
        path: '/users',
        element: <Users />
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
