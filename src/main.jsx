import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {App} from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import "bootstrap/dist/js/bootstrap.js"
import { Android, HomePage } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path:"/android",
    element: <Android/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
