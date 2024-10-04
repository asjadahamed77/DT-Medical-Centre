import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Doctors = () => {
  const {speciality} = useParams()
  const [filterDoctor,setFilterDoctor] =  useState([])
  const {doctors} = useContext(AppContext)
  const navigate = useNavigate()
  const [showFilter,setShowFilter] = useState(false)
  const applyFilter = ()=> {
    if(speciality){
      setFilterDoctor(doctors.filter(doc => doc.speciality === speciality))
    }else{
      setFilterDoctor(doctors)
    }
  }
  useEffect(()=>{
    applyFilter()
  },[doctors,speciality])
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`sm:hidden py-1 px-3 border rounded text-sm transition-all duration-300 ${showFilter?'bg-mainColor text-white':''} `} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className= {`${showFilter?'':'hidden'} flex flex-col gap-4 text-sm text-gray-600`}>
          <p onClick={()=> speciality === 'General physician'?navigate('/doctors'):navigate('/doctors/General physician')} className={`w-[94vw] sm:w-44 pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer pr-12 ${speciality === "General physician" ? 'bg-indigo-100 text-black' : ''}`}>General Physician</p>
          <p onClick={()=> speciality === 'Gynecologist'?navigate('/doctors'):navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-44 pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer pr-12 ${speciality === "Gynecologist" ? 'bg-indigo-100 text-black' : ''}`}>Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist'?navigate('/doctors'):navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-44 pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer pr-12 ${speciality === "Dermatologist" ? 'bg-indigo-100 text-black' : ''}`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians'?navigate('/doctors'):navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-44 pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer pr-12 ${speciality === "Pediatricians" ? 'bg-indigo-100 text-black' : ''}`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist'?navigate('/doctors'):navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-44 pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer pr-12 ${speciality === "Neurologist" ? 'bg-indigo-100 text-black' : ''}`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist'?navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-44 pl-3 py-1.5 border border-gray-300 rounded transition-all cursor-pointer pr-12 ${speciality === "Gastroenterologist" ? 'bg-indigo-100 text-black' : ''}`}>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto-fill gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {
          filterDoctor.map((item,index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='border border-blue-100 overflow-hidden rounded-xl hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="DrImage" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500  '>
                    <p className='w-2 h-2 rounded-full bg-green-500 '></p><p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Doctors
