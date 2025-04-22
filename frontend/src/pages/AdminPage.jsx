import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'
import { backendUrl } from '../App';

const AdminPage = () => {
    
    const [pageTwoComponents, setPageTwoComponents] = useState([1, 0, 0]);

    const updateDB = async (page, array) => {
        try {
            let response;
            if (page === 'two') {
                const secondStep = array;
                const thirdStep = pageThreeComponents;
                response = await axios.post(backendUrl + '/api/admin/updateComponent', { secondStep, thirdStep });
            } else {
                const secondStep = pageTwoComponents;
                const thirdStep = array;
                response = await axios.post(backendUrl + '/api/admin/updateComponent', { secondStep, thirdStep });
            }
            
            console.log(response);
            if (!response.data.success) {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error(error);
        }
    }

    const toggleOption2 = (index) => {
        const enabledCount2 = pageTwoComponents.filter((v) => v).length;
        const updated2 = [...pageTwoComponents];

        if (pageTwoComponents[index] && enabledCount2 === 1) {
            toast.error("Should have atleast one component!");
            return;
        }
        updated2[index] = pageTwoComponents[index] === 1 ? 0 : 1;
        setPageTwoComponents(updated2);

        updateDB('two', updated2);
    };

    const labels2 = ['About Me', 'Birth Date', 'Address'];

    const [pageThreeComponents, setPageThreeComponents] = useState([0, 0, 1]);

    const toggleOption3 = (index) => {
        const enabledCount3 = pageThreeComponents.filter((v) => v).length;
        const updated3 = [...pageThreeComponents];

        if (pageThreeComponents[index] && enabledCount3 === 1) {
            toast.error("Should have atleast one component!");
            return;
        }
        updated3[index] = pageThreeComponents[index] === 1 ? 0 : 1;
        setPageThreeComponents(updated3);

        updateDB('three', updated3);
    };

    const labels3 = ['About Me', 'Birth Date', 'Address'];

    const fetchData = async () => {
        try {
          const response = await axios.get(backendUrl + '/api/admin/component');
          if (response.data.success) {
            setPageTwoComponents(response.data.component[0].secondStep)
            setPageThreeComponents(response.data.component[0].thirdStep)
          }
        } catch (error) {
          toast.error(error)
        }
      }
  
      useEffect(() => {
        fetchData();  
      }, [])

  return (
    <div>
        <p className='text-center mb-10 text-3xl '>Admin Panel</p>

        <p className='text-2xl mb-5'>Step Two Components</p>
        <div className="flex gap-4">
            {labels2.map((label, i) => (
                <button
                key={i}
                onClick={() => toggleOption2(i)}
                className={`px-6 py-3 rounded border transition 
                    ${pageTwoComponents[i] ? 'bg-green-600 text-white' : 'bg-white border-gray-300 text-gray-600'}`}
                >
                {label}
                </button>
            ))}
        </div>


        <p className='text-2xl my-5'>Step Three Components</p>
        <div className="flex gap-4">
            {labels3.map((label, i) => (
                <button
                key={i}
                onClick={() => toggleOption3(i)}
                className={`px-6 py-3 rounded border transition 
                    ${pageThreeComponents[i] ? 'bg-green-600 text-white' : 'bg-white border-gray-300 text-gray-600'}`}
                >
                {label}
                </button>
            ))}
        </div>
    </div>
  )
}

export default AdminPage
