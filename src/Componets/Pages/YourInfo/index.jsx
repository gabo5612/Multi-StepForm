import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../Hooks/Hook';



const YourInfo = () => {
    const context = useContext(Context);

  const isFormValid = () => {
    console.log('Información confirmada:', context.personalData);
    return context.personalData.name && context.personalData.email && context.personalData.phone;
    
  };

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    context.setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col h-full ">
      <div>
        <h2 className="text-3xl text-MarineBlue font-bold mb-2">Personal info</h2>
        <p className="text-CoolGray mb-2 text-lg">Please provide your name, email address, and phone number.</p>
      </div>
      <form action="" className="flex flex-col gap-2 ">
        <label htmlFor="name" className="text-MarineBlue font-semibold">Name</label>
        <input
          type="text"
          name="name"
          required
          placeholder="e.g. Stephen King"
          className="border p-2 px-12 rounded-lg"
          value={context.personalData.name}
          onChange={handleChange}
        />
        <label htmlFor="mail" className="text-MarineBlue font-semibold">Email Address</label>
        <input
          type="email"
          name="email"
          required
          placeholder="e.g. stephenking@lorem.com"
          className="border p-2 px-12 rounded-lg"
          value={context.personalData.email}
          onChange={handleChange}
        />
        <label htmlFor="phone" className="text-MarineBlue font-semibold">Phone number</label>
        <input
          type="tel"
          name="phone"
          placeholder="e.g. +1 234 567 890"
          required
          className="border p-2 px-12 rounded-lg"
          value={context.personalData.phone}
          onChange={handleChange}
        />
      </form>
      <div className="flex justify-end">
        <NavLink
          to={isFormValid() ? '/plan' : '#'}
          className={`text-White px-5 py-3 rounded-lg border ${isFormValid() ? 'bg-MarineBlue' : 'bg-gray-400 cursor-not-allowed'}`}
          onClick={(event) => !isFormValid() && event.preventDefault()}
        >
          Next Step
        </NavLink>
      </div>
 
    </div>
  );
};

export default YourInfo;
