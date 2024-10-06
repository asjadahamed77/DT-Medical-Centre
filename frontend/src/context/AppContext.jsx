import { createContext, useEffect, useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = (props)=> {

   const currency = 'Rs'
   const backendUrl = process.env.REACT_APP_BACKEND_URL
   const [doctors,setDoctors] = useState([])

   const getDoctorsData = async()=>{
    try {
        const {data} = await axios.get(backendUrl+'/api/doctor/list')
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

   useEffect(()=>{
    getDoctorsData()
   },[])

    const value = {
        doctors,
        currency,
        backendUrl,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider