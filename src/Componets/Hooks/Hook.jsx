import { createContext, useState } from "react";


export const Context=createContext()

// eslint-disable-next-line react/prop-types
export const ContextProvider=({children})=>{
    const [personalData, setPersonalData] = useState({});
    const [price, setPrice]=useState(false)
    const [isValid, setIsValid] = useState(false);
    const [step, setStep]=useState([true, false, false, false])
    const [plan, setPlan]=useState({planName:'', planPrice: 0})
    const [arcPlan, setArcPlan]=useState(9)
    const [advPlan, setAdvPlan]=useState(12)
    const [proPlan, setProPlan]=useState(15)
    const [planSelection, setPlanSelection]=useState(false)
    const [planFocus, setPlanFocus] = useState([false, false, false]);
    const [summary, setSummary] = useState({ extras: {
        extraName:"",
        extraPrice:"",
        
    }});
    const [isAnExtra, setIsAnExtra]=useState(false)
    const handleStep = (index) => {
        const updatedStepFocus = step.map((value, i) => i === index);
        setStep(updatedStepFocus);
        if(index===2 || index===1){
            setIsAnExtra(false)
            setSummary((prevSummary) => ({
                ...prevSummary,
                extras:[],
                
              }))
        }
        
      };
    return(
        <Context.Provider value={{
            personalData, setPersonalData,
            price, setPrice,
            isValid, setIsValid,
            step, setStep,
            plan, setPlan,
            arcPlan, setArcPlan,
            advPlan, setAdvPlan,
            proPlan, setProPlan,
            planSelection, setPlanSelection,
            planFocus, setPlanFocus,
            handleStep,
            summary, setSummary,
            isAnExtra, setIsAnExtra,
        }}>
            {children}
        </Context.Provider>
    )
}