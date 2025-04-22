import React, {useContext, useEffect, useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AppContext } from '../context/AppContext';

const BirthDate = () => {
    const [birthdate, setBirthdate] = useState(null);
    const {user, setUser} = useContext(AppContext);

    useEffect(() => {
        if (user?.birthdate != null) {
          const parsedDate = new Date(user.birthdate);
      
          if (!isNaN(parsedDate)) {
            setBirthdate(parsedDate);
          }
        }
      }, [user]);

    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Birthdate</label>
            <DatePicker
                selected={birthdate}
                onChange={(date) => {
                if (date) {
                    setBirthdate(date);
                    setUser((prevUser) => ({
                        ...prevUser,
                        birthdate: date,
                    }));
                }
                }}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select your birthdate"
                maxDate={new Date()}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                closeOnScroll={true}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
        </div>
      );
}

export default BirthDate
