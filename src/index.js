import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import RecipePage from './Pages/RecipePage';



const root = ReactDOM.createRoot(document.getElementById('root'));
const myRouter =createBrowserRouter([
  {
    path:"/",
    element:<App />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:"/product/:id",
        element:<ProductPage/>
      },
      {
        path:"/recipe/:id",
        element:<RecipePage/>
      }
    ]
  }
])
root.render(
  <React.StrictMode>
   <RouterProvider router={myRouter}/>
  </React.StrictMode>
);


