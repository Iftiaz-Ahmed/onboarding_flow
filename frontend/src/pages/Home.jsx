import React, { useContext, useState } from 'react'
import { Stepper, Step } from 'react-form-stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import { AppContext } from '../context/AppContext';

const Home = () => {
    const { activeStep, setActiveStep, isLogged, setIsLogged} = useContext(AppContext);

    const handleNext = () => {
        setActiveStep(prev => Math.min(prev + 1, 2));
        if (!isLogged) {
            setIsLogged(true);
        }
    };

    const handleBack = () => setActiveStep(prev => Math.max(prev - 1, 0));

    const renderStepContent = (step) => {
        switch (step) {
          case 0: return <Step1 />;
          case 1: return <Step2 />;
          case 2: return <Step3 />;
          default: return <div>Unknown Step</div>;
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
                onClick={() => alert('Submit the form')}
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
