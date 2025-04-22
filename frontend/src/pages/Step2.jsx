import React, { useContext, useEffect } from 'react'
import AboutMe from '../components/AboutMe'
import Address from '../components/Address'
import BirthDate from '../components/BirthDate'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { backendUrl } from '../App';

const Step2 = () => {
    const {stepTwoComponent, setStepTwoComponent} = useContext(AppContext);

    const fetchData = async () => {
      try {
        const response = await axios.get(backendUrl + '/api/admin/component');
        setStepTwoComponent(response.data.component[0].secondStep)
      } catch (error) {
        
      }
    }

    useEffect(() => {
      fetchData();  
    }, [])

  return (
    <div>
      {stepTwoComponent[0] === 1 && <AboutMe />}
      {stepTwoComponent[1] === 1 && <BirthDate />}
      {stepTwoComponent[2] === 1 && <Address />}
    </div>
  )
}

export default Step2
