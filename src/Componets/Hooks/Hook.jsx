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
    const [isLoading, setIsLoading]=useState(true)
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
      const handleSwitchBtnClick = () => {
        if (price === false) {
          setArcPlan(90);
          setAdvPlan(120);
          setProPlan(150);
          setPrice(!price);
        } else {
          setArcPlan(9);
          setAdvPlan(12);
          setProPlan(15);
          setPrice(!price);
        }
      };

      const handlePlan = (plan) => {
        if (plan === 0) {
          setPlan({ planName: "Arcade", planPrice: arcPlan });
          setSummary({
            planName: "Arcade",
            planPrice: arcPlan,
            extras: {
              
            }
          });
      
          setPlanSelection(true);
        } else if (plan === 1) {
          setPlan({ planName: "Advanced", planPrice: advPlan });
          setSummary({
            planName: "Advanced",
            planPrice: advPlan,
            extras: {
              
            }
          });
      
          setPlanSelection(true);
        } else {
          setPlan({ planName: "Pro", planPrice: proPlan });
          setSummary({
            planName: "Pro",
            planPrice: proPlan,
            extras: {
              
            }
          });
      
          setPlanSelection(true);
        }
      };
      const handleLeave = (e) => {
        if (e === 0) {
          setPlanFocus([true, false, false]);
        } else if (e === 1) {
          setPlanFocus([false, true, false]);
        } else if (e === 2) {
          setPlanFocus([false, false, true]);
        }
      };
      const handleFocus = (index) => {
        const updatedPlanFocus = planFocus.map((value, i) => i === index);
        setPlanFocus(updatedPlanFocus);
      };
      const handleTimeOut = () => {
        setIsLoading(false);
      };
      const handleNextStep = (e) => {
        e===0? null: handleStep(1)
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
            handleStep, handleSwitchBtnClick,
            handlePlan, handleLeave,
            handleFocus, handleTimeOut,
            handleNextStep,
            summary, setSummary,
            isAnExtra, setIsAnExtra,
            isLoading, setIsLoading
        }}>
            {children}
        </Context.Provider>
    )
}