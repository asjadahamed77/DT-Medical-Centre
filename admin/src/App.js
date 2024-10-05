import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
function App() {
  const {adminToken} = useContext(AdminContext)
  return adminToken ? (
    <div>
      <BrowserRouter>
      <ToastContainer position='top-center' autoClose={1000} draggable    />
    
      </BrowserRouter>
    </div>
  ):(
    <>
    <ToastContainer position='top-center' autoClose={1000} draggable    />
    <Login />
    </>
  )
}

export default App;
