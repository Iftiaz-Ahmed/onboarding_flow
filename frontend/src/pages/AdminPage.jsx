import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const AdminPage = () => {
    const [pageTwoComponents, setPageTwoComponents] = useState([true, false, false]);

    const toggleOption2 = (index) => {
        const enabledCount2 = pageTwoComponents.filter((v) => v).length;
        const updated2 = [...pageTwoComponents];

        if (pageTwoComponents[index] && enabledCount2 === 1) {
            toast.error("Should have atleast one component!");
            return;
        }
        updated2[index] = !pageTwoComponents[index];
        setPageTwoComponents(updated2);
    };

    const labels2 = ['About Me', 'Birth Date', 'Address'];

    const [pageThreeComponents, setPageThreeComponents] = useState([false, false, true]);

    const toggleOption3 = (index) => {
        const enabledCount3 = pageThreeComponents.filter((v) => v).length;
        const updated3 = [...pageThreeComponents];

        if (pageThreeComponents[index] && enabledCount3 === 1) {
            toast.error("Should have atleast one component!");
            return;
        }
        updated3[index] = !pageThreeComponents[index];
        setPageThreeComponents(updated3);
    };

    const labels3 = ['About Me', 'Birth Date', 'Address'];

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
