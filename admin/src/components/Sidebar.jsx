import React, { useContext } from 'react'
import { AdminContext } from '../context/AdminContext'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'

const Sidebar = () => {
    const {adminToken} = useContext(AdminContext)
    const {doctorToken} = useContext(DoctorContext)
  return (
    <div className='min-h-screen bg-white border-r'>
      {
        adminToken && <ul className='text-[#515151] mt-5 '>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-mainColor':''}`} to={'/admin-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p>Dashboard</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-mainColor':''}`}  to={'/all-appointments'}>
                <img src={assets.appointment_icon} alt="" />
                <p>Appointments</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-mainColor':''}`}  to={'/add-doctor'}>
                <img src={assets.add_icon} alt="" />
                <p>Add Doctor</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-mainColor':''}`}  to={'/doctor-list'}>
                <img src={assets.people_icon} alt="" />
                <p>Doctors List</p>
            </NavLink>
        </ul>
      }
      {
        doctorToken && <ul className='text-[#515151] mt-5 '>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-mainColor':''}`} to={'/doctor-dashboard'}>
                <img src={assets.home_icon} alt="" />
                <p>Dashboard</p>
            </NavLink>
            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-mainColor':''}`}  to={'/doctor-appointments'}>
                <img src={assets.appointment_icon} alt="" />
                <p>Appointments</p>
            </NavLink>

            <NavLink className={({isActive})=>`flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive? 'bg-[#f2f3ff] border-r-4 border-mainColor':''}`}  to={'/doctor-profile'}>
                <img src={assets.people_icon} alt="" />
                <p>Profile</p>
            </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar
