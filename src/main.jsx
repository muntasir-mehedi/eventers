import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import TheStory from './components/Story/TheStory';
import Error from './components/Error/Error';
import Showdetails from './components/Home/Showdetails';
import Authprovider from './provider/Authprovider';
import AboutUs from './components/Aboutus/AboutUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },
      {
        path: "/story",
        element: <TheStory></TheStory>
      },
      {
        path: "/showdetails/:id",
        element: <Showdetails></Showdetails>,
        loader: ()=> fetch('/data.json')
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>,
)
