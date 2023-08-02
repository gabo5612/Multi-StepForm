import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../Hooks/Hook";
import { useSpring, animated } from "@react-spring/web";

const YourInfo = () => {
  const context = useContext(Context);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    context.setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Realiza la validación aquí para cada campo y actualiza el estado isValid
    var isNameValid = context.personalData.name.trim() !== "";
    var isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      context.personalData.email
    );
    var isPhoneValid = /^[0-9]{10}$/.test(context.personalData.phone);

    context.setIsValid(isNameValid && isEmailValid && isPhoneValid);
  };

  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 250,
  });

  
 
  return (
    <animated.div
      style={animationProps}
      className="flex flex-col h-full justify-between "
    >
      <div className="">
        <h2 className="text-4xl text-MarineBlue font-bold mb-2">
          Personal info
        </h2>
        <p className="text-CoolGray mb-2 text-lg font-semibold">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <form
        action=""
        className="flex flex-col  gap-4 "
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="name" className="text-MarineBlue font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. Stephen King"
          className="border p-4 px-12 rounded-lg"
          value={context.personalData.name}
          onChange={handleChange}
        />
        <label htmlFor="mail" className="text-MarineBlue font-semibold">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          required
          pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
          placeholder="e.g. stephenking@lorem.com"
          className="border p-4 px-12 rounded-lg"
          value={context.personalData.email}
          onChange={handleChange}
        />
        <label htmlFor="phone" className="text-MarineBlue font-semibold">
          Phone number
        </label>
        <input
          type="tel"
          name="phone"
          min="11"
          max="20"
          placeholder="e.g. +1 234 567 890"
          required
          className="border p-4 px-12 rounded-lg"
          value={context.personalData.phone}
          onChange={handleChange}
        />

        <div className="flex justify-end mt-16 ">
          {context.isValid ? (
            
              <NavLink
                to="/Multi-StepForm/plan"
                className={`text-White px-8 py-4 rounded-lg border bg-MarineBlue`}
                onClick={() => context.handleNextStep(1)}
              >
                Next Step
              </NavLink>
  
          ) : (
            <button
              className={`text-White px-8 py-4 rounded-lg border bg-MarineBlue`}
              onClick={() => context.handleNextStep(0)}
            >
              Next Step
            </button>
          )}
        </div>
      </form>
    </animated.div>
  );
};

export default YourInfo;
