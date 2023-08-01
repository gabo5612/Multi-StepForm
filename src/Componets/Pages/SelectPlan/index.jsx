import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Hooks/Hook";
import acadeImg from "../../assets/icon-arcade.svg";
import advancedImg from "../../assets/icon-advanced.svg";
import proImg from "../../assets/icon-pro.svg";
import { useSpring, animated } from "@react-spring/web";
import SwitchBtn from "../../Buttons/SwitchBtn";
import "./styles.css";

const SelectPlan = () => {
  const context = useContext(Context);
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 250,
  });

  const handlePlan = (plan) => {
    if (plan === 0) {
      context.setPlan({ planName: "Arcade", planPrice: context.arcPlan });
      context.setSummary({
        planName: "Arcade",
        planPrice: context.arcPlan,
        extras: {
          
        }
      });
  
      context.setPlanSelection(true);
    } else if (plan === 1) {
      context.setPlan({ planName: "Advanced", planPrice: context.advPlan });
      context.setSummary({
        planName: "Advanced",
        planPrice: context.advPlan,
        extras: {
          
        }
      });
  
      context.setPlanSelection(true);
    } else {
      context.setPlan({ planName: "Pro", planPrice: context.proPlan });
      context.setSummary({
        planName: "Pro",
        planPrice: context.proPlan,
        extras: {
          
        }
      });
  
      context.setPlanSelection(true);
    }
  };

  const handleFocus = (index) => {
    const updatedPlanFocus = context.planFocus.map((value, i) => i === index);
    context.setPlanFocus(updatedPlanFocus);
  };

  const handleLeave = (e) => {
    if (e === 0) {
      context.setPlanFocus([true, false, false]);
    } else if (e === 1) {
      context.setPlanFocus([false, true, false]);
    } else if (e === 2) {
      context.setPlanFocus([false, false, true]);
    }
  };

  return (
    <animated.div
      style={animationProps}
      className=" flex  flex-col justify-around h-full w-full"
    >
      <h2 className="text-4xl text-MarineBlue font-bold mb-4">
        Select your plan
      </h2>
      <p className="text-CoolGray mb-4 text-lg font-semibold">
        You have the option of monthly or yearly billing
      </p>
      <div className="flex gap-3 my-4 ">
        <button
          onClick={() => handlePlan(0)}
          onFocus={() => handleFocus(0)}
          onMouseLeave={() => handleLeave(0)}
          className={`border flex flex-col  border-CoolGray/30 h-64 w-3/6  rounded-lg cursor-pointer hover:bg-PurplishBlue/5 active:border-PurplishBlue/20 focus:bg-PurplishBlue/5 focus:border-2 focus:border-PurplishBlue/60 ${
            context.planFocus[0] ? "button-container-focus" : ""
          }`}
        >
          <img
            src={acadeImg}
            alt="Arcade plan"
            className={`h-12 w-12 m-4  ${
              context.planFocus[0] ? "grow-on-focus" : ""
            }`}
          />
          <div className="flex flex-col w-full h-full items-start ml-4 mb-4 gap-2 justify-end  ">
            <span className="text-MarineBlue font-bold text-2xl">Arcade</span>
            <span className="text-CoolGray text-lg">
              ${context.arcPlan}
              {context.price ? "/yr" : "/mo"}
            </span>
            {context.price === true && (
              <span className="text-MarineBlue font-semibold">
                2 months free
              </span>
            )}
          </div>
        </button>

        <button
          onClick={() => handlePlan(1)}
          onFocus={() => handleFocus(1)}
          onMouseLeave={() => handleLeave(1)}
          className={`border flex flex-col border-CoolGray/30 h-64  w-3/6  rounded-lg cursor-pointer hover:bg-PurplishBlue/5 active:border-PurplishBlue/20 focus:bg-PurplishBlue/5 focus:border-2 focus:border-PurplishBlue/60 ${
            context.planFocus[1] ? "button-container-focus" : ""
          }`}
        >
          <img
            src={advancedImg}
            alt="Advanced plan"
            className={`h-12 w-12 m-4  ${
              context.planFocus[1] ? "grow-on-focus" : ""
            }`}
          />
          <div className="flex flex-col w-full h-full items-start ml-4 mb-4 gap-2 justify-end  ">
            <span className="text-MarineBlue font-bold text-2xl">Advanced</span>
            <span className="text-CoolGray text-lg">
              ${context.advPlan}
              {context.price ? "/yr" : "/mo"}
            </span>
            {context.price === true && (
              <span className="text-MarineBlue font-semibold">
                2 months free
              </span>
            )}
          </div>
        </button>

        <button
          onClick={() => handlePlan(2)}
          onFocus={() => handleFocus(2)}
          onMouseLeave={() => handleLeave(2)}
          className={`border flex flex-col border-CoolGray/30 h-64  w-3/6  rounded-lg cursor-pointer hover:bg-PurplishBlue/5 active:border-PurplishBlue/20 focus:bg-PurplishBlue/5 focus:border-2 focus:border-PurplishBlue/60 ${
            context.planFocus[2] ? "button-container-focus" : ""
          }`}
        >
          <img
            src={proImg}
            alt="Pro plan"
            className={`h-12 w-12 m-4  ${
              context.planFocus[2] ? "grow-on-focus" : ""
            }`}
          />
          <div className="flex flex-col w-full h-full items-start ml-4 mb-4 gap-2 justify-end  ">
            <span className="text-MarineBlue font-bold text-2xl">Pro</span>
            <span className="text-CoolGray text-lg">
              ${context.proPlan}
              {context.price ? "/yr" : "/mo"}
            </span>
            {context.price === true && (
              <span className="text-MarineBlue font-semibold">
                2 months free
              </span>
            )}
          </div>
        </button>
        <div />
      </div>

      <div className="bg-PurplishBlue/5 rounded-lg flex mr-2 py-5 h-12 items-center justify-center gap-4 ">
        <span
          className={`${
            context.price
              ? "text-CoolGray font-semibold"
              : " text-MarineBlue font-semibold"
          }`}
        >
          Monthly
        </span>
        <SwitchBtn />
        <span
          className={`${
            context.price
              ? " text-MarineBlue font-semibold"
              : "text-CoolGray font-semibold"
          }`}
        >
          Yearly
        </span>
      </div>
      <div className="flex items-center justify-between mt-24 ">
        <NavLink to="/" className="text-CoolGray text-lg font-semibold" onClick={()=> context.handleStep(0)}>
          Go Back
        </NavLink>

        {context.planSelection === true && (
          <NavLink
            to="/addons"
            className="text-White px-8 py-4 mr-2 rounded-lg border bg-MarineBlue"
            onClick={() => context.handleStep(2)}
          >
            Next Step
          </NavLink>
        )}
      </div>
    </animated.div>
  );
};

export default SelectPlan;
