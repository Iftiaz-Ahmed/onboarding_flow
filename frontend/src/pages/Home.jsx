import React, { useContext, useEffect, useState } from 'react'
import { Stepper, Step } from 'react-form-stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { AppContext } from '../context/AppContext';
import axios from 'axios'
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Home = () => {
    const { activeStep, setActiveStep, isLogged, setIsLogged, user, setUser} = useContext(AppContext);

    const storeActiveStep = (activeStep) => {
        if (isLogged) {
          localStorage.setItem("activeStep", JSON.stringify(activeStep));
        }
      };

    useEffect(() => {
        storeActiveStep(activeStep);
    }, [activeStep])

    useEffect(() => {
        const savedActiveStep = JSON.parse(localStorage.getItem('activeStep'));
        const savedIsLogged = JSON.parse(localStorage.getItem("isLogged"));
        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (savedIsLogged) {
            setIsLogged(true);
            setActiveStep(savedActiveStep || 0);
            setUser(storedUser);
        }
    }, [])


    const handleNext = async () => {
        if (!isLogged) {
            try {
                const email = user.email;
                const password = user.password;
                
                if (!email || !password) {
                    toast.error("Email/Password cannot be empty!")
                    return;
                }

                const response = await axios.post(backendUrl + '/api/user/login', {email, password });
                if (response.data.success) {
                    setIsLogged(true);
                    localStorage.setItem("isLogged", true);
                    setUser(response.data.data)
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                    toast.success("Login Successfull!")
                
                    setActiveStep(prev => Math.min(prev + 1, 2));
                  } else {
                    toast.error(response.data.message)
                  }
            } catch (error) {
                toast.error(error)
            }
        } else {
            setActiveStep(prev => Math.min(prev + 1, 2));
        }
    };

    const handleBack = () => setActiveStep(prev => Math.max(prev - 1, 0));

    const handleFinish = async () => {
        try {
            const email = user?.email
            const aboutMe = user?.aboutMe
            const birthdate = user?.birthdate
            const address = user?.address
            const activeStep = user?.activeStep

            const response = await axios.post(backendUrl + '/api/user/updateUser', {email, aboutMe, birthdate, address, activeStep });

            if (response.data.success) {
                localStorage.setItem("user", JSON.stringify(response.data.data));
                toast.success("Data Saved!")
              } else {
                toast.error(response.data.message)
              }
        } catch (error) {
            toast.error(error)
        }
    }

    const renderStepContent = (step) => {
        switch (step) {
          case 0: return <Step1 />;
          case 1: return <Step2 />;
          case 2: return <Step3 />;
          default: return <Step1 />;
        }
    };

  return (
    <div className='mb-5'>
        <Stepper styleConfig={{activeBgColor: '#000000', completedBgColor: '#444444'}} activeStep={activeStep}>
            <Step label="Step 1" />
            <Step label="Step 2" />
            <Step label="Step 3" />
        </Stepper>

        <div className="mt-6">
            {renderStepContent(activeStep)}
        </div>

        <div className="flex justify-between mt-4">
            {activeStep > 1 ? (
            <button
            onClick={handleBack}
            disabled={activeStep === 0}
            className="px-4 py-2 bg-gray-300 rounded"
            >
            Previous
            </button>
            ) : (<span/>)}

            {activeStep < 2 ? (
            <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
            {activeStep > 0 ? 'Next' : 'Login'}
            </button>
            ) : (
            <button
                onClick={() => handleFinish()}
                className="px-4 py-2 bg-green-500 text-white rounded"
            >
                Finish
            </button>
            )}
        </div>
    </div>
  )
}

export default Home
