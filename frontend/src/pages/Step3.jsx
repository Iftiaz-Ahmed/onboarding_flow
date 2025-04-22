import React, { useContext, useEffect } from 'react'
import AboutMe from '../components/AboutMe'
import Address from '../components/Address'
import BirthDate from '../components/BirthDate'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { backendUrl } from '../App';

const Step3 = () => {
    const {stepThreeComponent, setStepThreeComponent} = useContext(AppContext);

    const fetchData = async () => {
      try {
        const response = await axios.get(backendUrl + '/api/admin/component');
        setStepThreeComponent(response.data.component[0].thirdStep);
      } catch (error) {
        
      }
    }

    useEffect(() => {
      fetchData();  
    }, [])

  return (
    <div>
      {stepThreeComponent[0] === 1 && <AboutMe />}
      {stepThreeComponent[1] === 1 && <BirthDate />}
      {stepThreeComponent[2] === 1 && <Address />}
    </div>
  )
}

export default Step3
