import React, { useContext } from 'react'
import AboutMe from '../components/AboutMe'
import Address from '../components/Address'
import BirthDate from '../components/BirthDate'
import { AppContext } from '../context/AppContext'

const Step2 = () => {
    const {pageTwoComponent} = useContext(AppContext);
  return (
    <div>
      {pageTwoComponent[0] && <AboutMe />}
      {pageTwoComponent[1] && <BirthDate />}
      {pageTwoComponent[2] && <Address />}
    </div>
  )
}

export default Step2
