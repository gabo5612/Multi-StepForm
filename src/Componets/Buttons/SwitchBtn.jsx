import { useContext } from "react";
import { Context } from "../Hooks/Hook";

const SwitchBtn = () => {
  const context = useContext(Context);

  const handleClick = () => {
    if (context.price === false) {
      context.setArcPlan(90);
      context.setAdvPlan(120);
      context.setProPlan(150);
      context.setPrice(!context.price);
    } else {
      context.setArcPlan(9);
      context.setAdvPlan(12);
      context.setProPlan(15);
      context.setPrice(!context.price);
    }
  };


  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center w-16 h-8 rounded-full ${
        context.price ? "bg-blue-500" : "bg-gray-400"
      } ${context.price ? "bg-MarineBlue" : "bg-MarineBlue"}`}
    >
      <span
        className={`w-6 h-6 rounded-full bg-White ${
          context.price
            ? "bg-black transform translate-x-4 ease-in-out duration-300"
            : "bg-gray-600 transform -translate-x-4 ease-in-out duration-300"
        }`}
      />
    </button>
  );
};

export default SwitchBtn;
