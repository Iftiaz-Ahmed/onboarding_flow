import React, { useContext } from 'react'
import AboutMe from '../components/AboutMe'
import Address from '../components/Address'
import BirthDate from '../components/BirthDate'
import { AppContext } from '../context/AppContext'

const Step3 = () => {
    const {pageThreeComponent} = useContext(AppContext);
  return (
    <div>
      {pageThreeComponent[0] && <AboutMe />}
      {pageThreeComponent[1] && <BirthDate />}
      {pageThreeComponent[2] && <Address />}
    </div>
  )
}

export default Step3
