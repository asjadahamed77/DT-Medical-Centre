import { createContext, useState } from "react";


export const DoctorContext = createContext()

const DoctorContextProvider = (props)=> {

    const [doctorToken,setDoctorToken] = useState(localStorage.getItem('doctorToken')?localStorage.getItem('doctorToken'):"")
    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    const value = {
       doctorToken,
       setDoctorToken,
       backendUrl,
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider