import React, { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {
  const navigate = useNavigate()
  const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='font-medium text-3xl'>Book Highly Recommended Doctors</h1>
      <p className='text-sm text-center'>Your health matters. Choose from the best in the field.</p>
      <div className='w-full grid grid-cols-auto-fill gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
          doctors.slice(0,10).map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-100 overflow-hidden rounded-xl hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="DrImage" />
                <div className='p-4'>
                  <div className={`flex items-center gap-2 text-sm text-center ${item.available?'text-green-500':"text-red-500"}  `} >
                    <p className={`w-2 h-2 rounded-full ${item.available?'bg-green-500':"bg-red-500"} `}></p><p>{item.available?'Available':"Not Available"}</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
          ))
        }
      </div>
      <button onClick={()=>navigate('/doctors')} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>More Doctors</button>
    </div>
  )
}

export default TopDoctors
