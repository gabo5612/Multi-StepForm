import { useSpring, animated } from "@react-spring/web";
import { useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Hooks/Hook";

const Addons = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 250,
  });

  const context = useContext(Context);
  const mpRef = useRef(null);
  const strgRef = useRef(null);
  const cpRef = useRef(null);
 

  const handleAddons = (e) => {
    let extraName = "";
    let extraPrice = 0;
   
  
    if (e === "multiplayer") {
      mpRef.current.checked = !mpRef.current.checked;
      extraName = "Online service";
      extraPrice = context.price ? 10 : 1;
    } else if (e === "storage") {
      strgRef.current.checked = !strgRef.current.checked;
      extraName = "Larger storage";
      extraPrice = context.price ? 20 : 2;
    } else {
      cpRef.current.checked = !cpRef.current.checked;
      extraName = "Customizable profile";
      extraPrice = context.price ? 20 : 2;
    }
  
    // Determine if any extra is selected and update the state accordingly
    const mpChecked = mpRef.current.checked;
    const strgChecked = strgRef.current.checked;
    const cpChecked = cpRef.current.checked;
    context.setIsAnExtra(mpChecked || strgChecked || cpChecked);
  
    // Create an array of extras based on the selected ones
    const selectedExtras = [];
    if (mpChecked) {
      selectedExtras.push({
        extraName: "Online service",
        extraPrice: context.price ? 10 : 1,
        });
    }
    if (strgChecked) {
      selectedExtras.push({
        extraName: "Larger storage",
        extraPrice: context.price ? 20 : 2,
        });
    }
    if (cpChecked) {
      selectedExtras.push({
        extraName: "Customizable profile",
        extraPrice: context.price ? 20 : 2,
          
      });
    }
 
 
    context.setSummary((prevSummary) => ({
      ...prevSummary,
      extras: selectedExtras,
      
    }));
  };
  


  return (
    <animated.div
      style={animationProps}
      className="flex flex-col justify-around h-full w-full"
    >
      <h2 className="text-4xl text-MarineBlue font-bold mb-4">Pick add-ons</h2>
      <p className="text-CoolGray mb-4 text-lg font-semibold">
        Add-ons help enhance your gaming experience
      </p>
      <div className="flex flex-col gap-4">
        <button
          onClick={() => handleAddons('multiplayer')}
          className="border flex items-center border-CoolGray/30 h-24 justify-around w-full rounded-lg cursor-pointer hover:bg-PurplishBlue/5 active:border-PurplishBlue/20 focus:bg-PurplishBlue/5 focus:border-2 focus:border-PurplishBlue/60"
        >
          <input
            type="checkbox"
            ref={mpRef}
            className="w-5 h-5 rounded-lg"
          />
          <div className="flex flex-col items-start ">
            <span className="w-64 text-start text-MarineBlue font-bold text-xl">
              Online service
            </span>
            <span className="w-64 text-start text-CoolGray font-semibold text-m">
              Access to multiplayer games
            </span>
          </div>
          <span className="font-semibold text-PurplishBlue">
            {context.price ? '+10/yr' : '+1/mo'}
          </span>
        </button>
        <button
          onClick={() => handleAddons('storage')}
          className="border flex items-center border-CoolGray/30 h-24 justify-around w-full rounded-lg cursor-pointer hover:bg-PurplishBlue/5 active:border-PurplishBlue/20 focus:bg-PurplishBlue/5 focus:border-2 focus:border-PurplishBlue/60"
        >
          <input
            type="checkbox"
            ref={strgRef}
            className="w-5 h-5 rounded-lg"
          />
          <div className="flex flex-col items-start ">
            <span className="w-64 text-start text-MarineBlue font-bold text-xl">
              Larger storage
            </span>
            <span className="w-64 text-start text-CoolGray font-semibold text-m">
              Extra 1TB of cloud save
            </span>
          </div>
          <span className="font-semibold text-PurplishBlue">
            {context.price ? '+20/yr' : '+2/mo'}
          </span>
        </button>
        <button
          onClick={() => handleAddons('customProfile')}
          className="border flex items-center border-CoolGray/30 h-24 justify-around w-full rounded-lg cursor-pointer hover:bg-PurplishBlue/5 active:border-PurplishBlue/20 focus:bg-PurplishBlue/5 focus:border-2 focus:border-PurplishBlue/60"
        >
          <input
            type="checkbox"
            ref={cpRef}
            className="w-5 h-5 rounded-lg"
          />
          <div className="flex flex-col items-start ">
            <span className="w-64 text-start text-MarineBlue font-bold text-xl">
              Customizable profile
            </span>
            <span className="w-64 text-start text-CoolGray font-semibold text-m">
              Custom theme on your profile
            </span>
          </div>
          <span className="font-semibold text-PurplishBlue">
            {context.price ? '+20/yr' : '+2/mo'}
          </span>
        </button>
      </div>
      <div className="flex items-center justify-between mt-24">
        <NavLink to="/Multi-StepForm/plan" className="text-CoolGray text-lg font-semibold" onClick={() => context.handleStep(1)}>
          Go Back
        </NavLink>

        <NavLink
          to="/Multi-StepForm/summary"
          className="text-White px-8 py-4 mr-2 rounded-lg border bg-MarineBlue"
          onClick={() => context.handleStep(3)}
        >
          Next Step
        </NavLink>
      </div>
    </animated.div>
  );
};

export default Addons;
