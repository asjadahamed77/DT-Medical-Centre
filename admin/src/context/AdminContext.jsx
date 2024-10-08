import { createContext, useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'
export const AdminContext = createContext()

const AdminContextProvider = (props)=> {

    const [adminToken,setAdminToken] = useState(localStorage.getItem('adminToken')?localStorage.getItem('adminToken'):"")
    const [doctors, setDoctors] = useState([]);
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [appointments,setAppointments] = useState([])
    const [dashData,setDashData] = useState(false)

    const getAllDoctors = async()=>{
        try {
            const {data} =  await axios.post(backendUrl+'/api/admin/all-doctors',{},{headers:{adminToken}})
            if(data.success){
                setDoctors(data.doctors)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const changeAvailability = async(docId)=>{
        try {
            const {data} = await axios.post(backendUrl+"/api/admin/change-availability",{docId},{headers:{adminToken}})
            if(data.success){
                toast.success(data.message)
                getAllDoctors()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getAllAppointments = async()=>{
        try {
            const {data} = await axios.get(backendUrl+"/api/admin/appointments",{headers:{adminToken}})
            if(data.success){
                setAppointments(data.appointments)
            }else{
                toast.error(data.error)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const cancelAppointment = async(appointmentId)=>{
        try {
            const {data} = await axios.post(backendUrl+'/api/admin/cancel-appointment',{appointmentId},{headers:{adminToken}})
            if(data.success){
                getAllAppointments()
                toast.success(data.message)
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getDashData = async()=>{
        try {
            const {data} = await axios.get(backendUrl+'/api/admin/dashboard',{headers:{adminToken}})
            if(data.success){
                setDashData(data.dashData)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
       adminToken,
       setAdminToken,
       backendUrl,
       doctors,
       getAllDoctors,
       changeAvailability,
       appointments,
       setAppointments,
       getAllAppointments,
       cancelAppointment,
       dashData,
       setDashData,
       getDashData,
    }

    return (
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider