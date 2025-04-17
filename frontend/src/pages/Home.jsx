import React from 'react'
import { Stepper, Step } from 'react-form-stepper';

const Home = () => {
  return (
    <div>
        <Stepper activeStep={0}>
            <Step label="Step 1" />
            <Step label="Step 2" />
            <Step label="Step 3" />
        </Stepper>
    </div>
  )
}

export default Home
