import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext)
  const [appointments, setAppointments] = useState([])
  const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const dateSlotFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/appointments`, { headers: { token } })
      if (data.success) {
        setAppointments(data.appointments.reverse())
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(`${backendUrl}/api/user/cancel-appointment`, { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getDoctorsData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  }

  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My Appointments</p>
      <div>
        {
          appointments.map((item, index) => (
            !item.cancelled && (
              <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
                <div>
                  <img className='w-32 bg-indigo-50' src={item.docData.image} alt={item.docData.name} />
                </div>
                <div className='flex-1 text-sm text-zinc-600 '>
                  <p className='text-neutral-800 font-semibold'>{item.docData.name}</p>
                  <p>{item.docData.speciality}</p>
                  <p className='font-medium text-zinc-700 mt-1'>Address:</p>
                  <p className='text-xs'>{item.docData.address.line1}</p>
                  <p className='text-xs'>{item.docData.address.line2}</p>
                  <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {dateSlotFormat(item.slotDate)} | {item.slotTime}</p>
                </div>
                {
                  item.isCompleted ? <div className='flex justify-center items-center min-w-48'><p className='text-green-500 py-2 border sm:min-w-48 text-center'>Completed</p></div>
                  : <div className='flex flex-col gap-2 justify-end'>
                  <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-mainColor hover:text-white transition-all duration-300'>Pay Online</button>
                  <button onClick={() => cancelAppointment(item._id)} className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
                </div>
                }
              </div>
            )
          ))
        }
      </div>
    </div>
  )
}

export default MyAppointments
