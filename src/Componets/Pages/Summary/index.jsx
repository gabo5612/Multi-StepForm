import { useSpring, animated } from "@react-spring/web";
import { useContext } from "react";
import { Context } from "../../Hooks/Hook";
import { NavLink } from "react-router-dom";

const Summary = () => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 250,
  });

  const context = useContext(Context);
  const summaryInfos = { ...context.summary };
  const renderedExtras = summaryInfos.extras;
  var extraTotal = 0;
  var total = 0;
  for (let i = 0; i < renderedExtras.length; i++) {
    extraTotal = extraTotal + renderedExtras[i].extraPrice;
  }
  total = extraTotal + context.summary.planPrice;
  return (
    <animated.div
      style={animationProps}
      className="flex flex-col h-full justify-between"
    >
      <h2 className="text-4xl text-MarineBlue font-bold mb-4">Finishing up</h2>
      <p className="text-CoolGray mb-4 text-lg font-semibold">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col h-full justify-center">
        <div className="bg-PurplishBlue/5 rounded-lg  min-h-[120px] w-full flex  flex-col py-4 px-6">
          <div className="flex justify-between">
            <h3 className="text-MarineBlue font-bold text-lg">
              {context.summary.planName}{" "}
              {context.price ? "(Yearly)" : "(Monthly)"}
            </h3>
            <span className="text-MarineBlue font-bold text-lg">
              {context.summary.planPrice}
              {context.price ? "/yr" : "/mo"}
            </span>
          </div>
          <NavLink
            to="/Multi-StepForm/plan"
            className="text-CoolGray text-l font-semibold underline mb-4"
          >
            Change
          </NavLink>
          <div className="border-b border-LightGray"></div>
          {context.isAnExtra && (
            <div>
              {renderedExtras.map((extra) => (
                <div
                  key={extra.extraName}
                  className="flex justify-between my-2"
                >
                  <h3 className="text-CoolGray font-semibold">
                    {extra.extraName}
                  </h3>
                  <h3 className="text-MarineBlue font-semibold">
                    +${extra.extraPrice}
                    {context.price ? "/yr" : "/mo"}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex justify-between m-6">
          <span className="text-CoolGray font-semibold">
            Total (per {context.price ? "year" : "month"})
          </span>
          <span className="text-PurplishBlue font-bold text-xl">
            +${context.isAnExtra ? total : context.summary.planPrice}
            {context.price ? "/yr" : "/mo"}
          </span>
        </div>
      </div>
      <div className="flex justify-between h-20 items-end">
        <NavLink
          to="/Multi-StepForm/addons"
          className="text-CoolGray text-l font-semibold"
          onClick={() => context.handleStep(2)}
        >
          Go Back
        </NavLink>
        <NavLink
          to="/Multi-StepForm/Thank-you"
          className="text-White px-10 py-4  rounded-lg border bg-PurplishBlue"
        >
          Confirm
        </NavLink>
      </div>
    </animated.div>
  );
};

export default Summary;
