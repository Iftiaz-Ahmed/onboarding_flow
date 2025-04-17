import React, { useState } from 'react'

const Step1 = () => {
    const [currentState, setCurrentState] = useState('Login');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
        {currentState === 'Login' ? null : <input className='w-full px-3 py-2 border border-gray-800' type="text" placeholder='Name' required />}
        <input className='w-full px-3 py-2 border border-gray-800' type="email" placeholder='Email' required />
        <input className='w-full px-3 py-2 border border-gray-800' type="password" placeholder='Password' required />
    </form>
  )
}

export default Step1
