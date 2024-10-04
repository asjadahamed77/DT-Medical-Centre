import React, { useState } from 'react'
import logo from '../assets/DT-Logo.png'
import {NavLink, useNavigate} from 'react-router-dom'
import {assets }from '../assets/assets'
const Navbar = () => {
  const navigate = useNavigate()
  const [showMenu,setShowMenu] = useState(false)
  const [token,setToken] = useState(true)
  return (
    <div className='flex justify-between items-center text-sm py-2 mb-5 border-b border-gray-400'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={logo} alt="Logo" />
      <ul className='hidden lg:flex items-start gap-5 font-medium'>
        <NavLink to={'/'}>
          <li className='py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-mainColor w-3/5 m-auto hidden' />
        </NavLink>
        <NavLink to={'/doctors'}>
          <li className='py-1'>DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-mainColor w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/about'}>
          <li className='py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-mainColor w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to={'/contact'}>
          <li className='py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-mainColor w-3/5 m-auto hidden'/>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token ?
          <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-slate-50 rounded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('/my-appointments')}  className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
          </div>
          :
          <button onClick={()=>navigate('/login')} className='bg-mainColor text-white px-8 py-2 rounded-full font-medium hidden md:block'>CREATE ACCOUNT</button>
        }
        <img onClick={()=>setShowMenu(true)} className='w-6 lg:hidden' src={assets.menu_icon} alt="" />
        {/* --Mobile Menu-- */}
        <div className={`${showMenu?'fixed w-full': 'h-0 w-0'} lg:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-100`}>
          <div className='flex justify-between items-center px-5 py-6'>
            <img className='w-36' src={logo} alt="" />
            <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink className='px-4 py-2 rounded-full inline-block' onClick={()=>setShowMenu(false)} to={'/'}>Home</NavLink>
            <NavLink className='px-4 py-2 rounded-full inline-block' onClick={()=>setShowMenu(false)} to={'/doctors'}>Doctors</NavLink>
            <NavLink className='px-4 py-2 rounded-full inline-block' onClick={()=>setShowMenu(false)} to={'/about'}>About</NavLink>
            <NavLink className='px-4 py-2 rounded-full inline-block' onClick={()=>setShowMenu(false)} to={'/contact'}>Contact</NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
