/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { Context } from "../Hooks/Hook";


const Main = (props) => {
const context=useContext(Context)
  return (
    <div className="bg-LightBlue w-screen h-screen flex justify-center items-center  ">
      <div className="bg-White w-3/5 h-4/5 rounded-lg shadow-lg flex ">
        <div className="w-1/3 backgroundPic m-4 rounded-lg">
          <div className="flex  w-1-5 h-1-5 gap-4 p-5 ">
            <div className="pl-4 pt-8">
              <NavLink to='/Multi-StepForm'>
              <div className="flex gap-4 mb-8" onClick={()=> context.handleStep(0)}>
                <span className={`border rounded-full py-2 px-4 font-bold ${context.step[0]? 'bg-LightBlue text-MarineBlue':'text-White'}`}>1</span>
                <div className="flex flex-col">
                  <span className="text-PastelBlue font-medium text-sm ">
                    STEP 1
                  </span>
                  <span className="text-White font-semibold">YOUR INFO</span>
                </div>
              </div>
              </NavLink>
              <NavLink to='/Multi-StepForm/plan'>
              <div className="flex gap-4 mb-8" onClick={()=> context.handleStep(1)}>
                <span className={`border rounded-full py-2 px-4 font-bold ${context.step[1]? 'bg-LightBlue text-MarineBlue':'text-White'}`}>2</span>
                <div className="flex flex-col">
                  <span className="text-PastelBlue font-medium text-sm">
                    STEP 2
                  </span>
                  <span className="text-White font-semibold">SELECT PLAN</span>
                </div>
              </div>
              </NavLink>
              <NavLink to='/Multi-StepForm/addons'>
              <div className="flex gap-4 mb-8" onClick={()=> context.handleStep(2)}>
                <span className={`border rounded-full py-2 px-4 font-bold ${context.step[2]? 'bg-LightBlue text-MarineBlue':'text-White'}`}>3</span>
                <div className="flex flex-col">
                  <span className="text-PastelBlue font-medium text-sm">
                    STEP 3
                  </span>
                  <span className="text-White font-semibold">ADD-ONS</span>
                </div>
              </div>
              </NavLink>
              <NavLink to='/Multi-StepForm/summary'>
              <div className="flex gap-4 mb-8" onClick={()=> context.handleStep(3)}>
                <span className={`border rounded-full py-2 px-4 font-bold ${context.step[3]? 'bg-LightBlue text-MarineBlue':'text-White'}`}>4</span>
                <div className="flex flex-col">
                  <span className="text-PastelBlue font-medium text-sm">
                    STEP 4
                  </span>
                  <span className="text-White font-semibold">SUMMARY</span>
                </div>
              </div>
              </NavLink>
            </div>
            
          </div>
        </div>
        <div className="mx-16 my-16 w-3/5">{props.children}</div>
      </div>
    </div>
  );
};

export default Main;
