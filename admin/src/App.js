import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Login from './pages/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddDoctor from './pages/Admin/AddDoctor';
import DoctorsList from './pages/Admin/DoctorsList';
function App() {
  const {adminToken} = useContext(AdminContext)
  return adminToken ? (
    <div className='bg-[#f8f9fd]'>
      <BrowserRouter>
      <ToastContainer position='top-center' autoClose={1000} draggable    />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-doctor' element={<AddDoctor />} />
          <Route path='/doctor-list' element={<DoctorsList />} />
        </Routes>
      </div>
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
