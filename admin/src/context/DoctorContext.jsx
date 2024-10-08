import { createContext, useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'

export const DoctorContext = createContext()

const DoctorContextProvider = (props)=> {

    const [doctorToken,setDoctorToken] = useState(localStorage.getItem('doctorToken')?localStorage.getItem('doctorToken'):"")
    const backendUrl = process.env.REACT_APP_BACKEND_URL;
    const [appointments,setAppointments] = useState([])

    const getAppointments = async()=>{
        try {
            const {data} = await axios.get(backendUrl+'/api/doctor/appointments',{headers:{doctorToken}})
            if(data.success){
                setAppointments(data.appointments.reverse())
                console.log(data.appointments.reverse())
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
       doctorToken,
       setDoctorToken,
       backendUrl,
       appointments,
       setAppointments,
       getAppointments
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider