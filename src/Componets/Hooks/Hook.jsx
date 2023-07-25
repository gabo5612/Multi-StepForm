import { createContext, useState } from "react";


export const Context=createContext()

// eslint-disable-next-line react/prop-types
export const ContextProvider=({children})=>{
    const [personalData, setPersonalData] = useState({ name: '', email: '', phone: '' });
    const [price, setPrice]=useState(false)

    const [openModal, setOpenModal]=useState(false)

    return(
        <Context.Provider value={{
            personalData, setPersonalData,
            price, setPrice,
            openModal, setOpenModal
        }}>
            {children}
        </Context.Provider>
    )
}