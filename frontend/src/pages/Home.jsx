import React, { useContext, useState } from 'react'
import { Stepper, Step } from 'react-form-stepper';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const Home = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => setActiveStep(prev => Math.min(prev + 1, 2));
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
    <div>
        <Stepper styleConfig={{activeBgColor: '#000000', completedBgColor: '#444444'}} activeStep={activeStep}>
            <Step label="Step 1" />
            <Step label="Step 2" />
            <Step label="Step 3" />
        </Stepper>

        <div className="mt-6">
            {renderStepContent(activeStep)}
        </div>

        <div className="flex justify-between mt-4">
            <button
            onClick={handleBack}
            disabled={activeStep === 0}
            className="px-4 py-2 bg-gray-300 rounded"
            >
            Previous
            </button>

            {activeStep < 2 ? (
            <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Next
            </button>
            ) : (
            <button
                onClick={() => alert('Submit the form')}
                className="px-4 py-2 bg-green-500 text-white rounded"
            >
                Submit
            </button>
            )}
        </div>
    </div>
  )
}

export default Home
