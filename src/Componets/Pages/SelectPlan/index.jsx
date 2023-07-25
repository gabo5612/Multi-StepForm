import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Hooks/Hook";
import acadeImg from "../../assets/icon-arcade.svg"
import advancedImg from "../../assets/icon-advanced.svg"
import proImg from "../../assets/icon-pro.svg"

import SwitchBtn from "../../Buttons/SwitchBtn";
const SelectPlan = () => {

  const context = useContext(Context);
  return (
    <div>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing</p>
      <div>
        <div>
          <img src={acadeImg} alt="Arcade plan" />
          <span>Arcade</span>
          <span>${context.price? '90/yr': '9/mo'}</span>
        </div>
        <div>
          <img src={advancedImg} alt="Advanced plan" />
          <span>Advanced</span>
          <span>${context.price? '120/yr': '12/mo'}</span>
        </div>
        <div>
          <img src={proImg} alt="Pro plan" />
          <span>Pro</span>
          <span>${context.price? '150/yr': '15/mo'}</span>
        </div>
      </div>
      <div>
       
       <SwitchBtn />
      </div>
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>
    </div>
  );
};

export default SelectPlan;
