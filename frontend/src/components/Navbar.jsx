import React, { useContext, useEffect } from 'react'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const location = useLocation();
    const { setActiveStep, isLogged, setIsLogged, user} = useContext(AppContext);

    const manageLocalStorage = (activeStep) => {
        localStorage.setItem("isLogged", JSON.stringify(false));
        localStorage.setItem("activeStep", JSON.stringify(activeStep));
        localStorage.removeItem("user");
        console.log("Active step saved to localStorage:", activeStep);
    };

  return (
    <div className='flex items-center justify-between py-5 px-15 font-medium'>
        <div className='flex justify-center items-center'>
            <img className='w-10' src={assets.logo} alt="" />
            <h2 className='ml-2 uppercase'>Onboarding Flow</h2>
        </div>
        {isLogged?(<p>Welcome, {user.email}</p>):(<span></span>)}
        {location.pathname == '/admin' ? (
            <p>Welcome, Admin!</p>
        ) : isLogged ? (
            <h2 onClick={() => { setIsLogged(false); setActiveStep(0); manageLocalStorage(0);}} className='cursor-pointer'>Logout</h2>
        ):(<span/>)}
    </div>
  )
}

export default Navbar
