import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AdminContextProvider from './context/AdminContext'
import DoctorContextProvider from './context/DoctorContext'
import AppContextProvider from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContextProvider>
      <AdminContextProvider>
        <DoctorContextProvider>
          <App />
          <ToastContainer />
        </DoctorContextProvider>
      </AdminContextProvider>
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
) 