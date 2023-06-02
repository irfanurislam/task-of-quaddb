import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import SecondPage from './components/SecondPage/SecondPage.jsx';
import Home from './components/Home/Home.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Home />,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
          
            path:'/',
            element:<App />
          
        },
      {
        path:'/secondpage',
        element:<SecondPage></SecondPage>
       },
    ]
  },
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
