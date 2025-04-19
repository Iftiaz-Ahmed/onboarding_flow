import React, { useContext } from 'react'
import AboutMe from '../components/AboutMe'
import Address from '../components/Address'
import BirthDate from '../components/BirthDate'
import { AppContext } from '../context/AppContext'

const Step3 = () => {
    const {stepThreeComponent} = useContext(AppContext);
  return (
    <div>
      {stepThreeComponent[0] && <AboutMe />}
      {stepThreeComponent[1] && <BirthDate />}
      {stepThreeComponent[2] && <Address />}
    </div>
  )
}

export default Step3
