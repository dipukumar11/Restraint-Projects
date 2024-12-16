import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Root/Main/Main.jsx';
import Home from './Layout/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-screen-lg	m-auto'>
   <RouterProvider router={router}></RouterProvider>
   </div>
  </StrictMode>,
)
