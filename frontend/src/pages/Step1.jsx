import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Step1 = () => {
  const {user, setUser} = useContext(AppContext);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        <input className='w-full px-3 py-2 border border-gray-800' name="email" type="email" placeholder='Email' onChange={handleInputChange} required />
        <input className='w-full px-3 py-2 border border-gray-800' name="password" type="password" placeholder='Password' onChange={handleInputChange} required />
    </form>
  )
}

export default Step1
