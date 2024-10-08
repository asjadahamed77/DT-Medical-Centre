import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { DoctorContext } from '../context/DoctorContext'
const Login = () => {
    const [state,setState] = useState('Admin')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {setAdminToken,backendUrl} = useContext(AdminContext)
    const {setDoctorToken} = useContext(DoctorContext)
    const onSubmitHandler = async(e)=>{
        e.preventDefault()
        try {
            if(state === "Admin"){
                const {data} = await axios.post(backendUrl+"/api/admin/login",{email,password})
                if(data.success){
                    localStorage.setItem('adminToken',data.token)
                    setAdminToken(data.token)
                    toast.success(data.message)
                }else{
                    toast.error(data.message)
                }

            }else{
                const {data} = await axios.post(backendUrl+"/api/doctor/login",{email,password})
                if(data.success){
                    localStorage.setItem('doctorToken',data.token)
                    setDoctorToken(data.token)
                    toast.success('Doctor Login Successfully')
                }else{
                    toast.error(data.message)
                }
            }
        } catch (error) {
            toast.error(error)
            console.log(error)
        }
    }
  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5e5e5e] text-sm shadow-lg'>
        <p className='text-2xl font-semibold m-auto'><span className='text-mainColor '>{state}</span> Login</p>
        <div className='w-full'>
            <p>Email</p>
            <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#dadada] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full'>
            <p>Password</p>
            <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-[#dadada] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button type='submit' className='w-full bg-mainColor text-white py-2 rounded-md text-base mt-2 '>Login</button>
        {
            state === 'Admin'
            ? <p>Doctor Login? <span className="text-mainColor underline cursor-pointer" onClick={()=>setState('Doctor')}>Click Here</span></p>
            : <p>Admin Login? <span className="text-mainColor underline cursor-pointer" onClick={()=>setState('Admin')}>Click Here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
