import React, { useContext } from 'react'
import AboutMe from '../components/AboutMe'
import Address from '../components/Address'
import BirthDate from '../components/BirthDate'
import { AppContext } from '../context/AppContext'

const Step2 = () => {
    const {stepTwoComponent} = useContext(AppContext);
  return (
    <div>
      {stepTwoComponent[0] && <AboutMe />}
      {stepTwoComponent[1] && <BirthDate />}
      {stepTwoComponent[2] && <Address />}
    </div>
  )
}

export default Step2
