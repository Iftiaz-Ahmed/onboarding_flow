import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const location = useLocation();
    const { activeStep, setActiveStep, isLogged, setIsLogged} = useContext(AppContext);
  return (
    <div className='flex items-center justify-between py-5 px-15 font-medium'>
        <div className='flex justify-center items-center'>
            <img className='w-10' src={assets.logo} alt="" />
            <h2 className='ml-2 uppercase'>Onboarding Flow</h2>
        </div>

        {location.pathname == '/admin' ? (
            <p>Welcome, Admin!</p>
        ) : isLogged ? (
            <h2 onClick={() => { setIsLogged(false); setActiveStep(0);}} className='cursor-pointer'>Logout</h2>
        ):(<span/>)}
    </div>
  )
}

export default Navbar
