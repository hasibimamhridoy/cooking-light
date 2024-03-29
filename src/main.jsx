import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes/MainRoutes'
import AuthContextProvider from './ContextProvider/AuthContextProvider'
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <AuthContextProvider>
    <RouterProvider router={MainRoutes}></RouterProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
