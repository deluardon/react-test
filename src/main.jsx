import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root'

const router=createBrowserRouter([
  {
      path:"/",
      element:<Root></Root>,

      children:[
        {
      path:"/about",
      element:<div>About</div>
      }
    ]
  }
 ])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
