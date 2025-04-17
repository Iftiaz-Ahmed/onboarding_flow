import React from 'react'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
  return (
    <div className='flex items-center justify-between py-5 px-15 font-medium'>
        <div className='flex justify-center items-center'>
            <img className='w-10' src={assets.logo} alt="" />
            <h2 className='ml-2 uppercase'>Onboarding Flow</h2>
        </div>

        {location.pathname == '/admin' ? (
            <p>Welcome, Admin!</p>
        ) : (
            <h2 onClick={() => { }} className='cursor-pointer'>Logout</h2>
        )}
    </div>
  )
}

export default Navbar
