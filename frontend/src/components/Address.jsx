import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Address = () => {

  const {user, setUser} = useContext(AppContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        [name]: value,
      },
    }));
  };

  return (
    <div className="mb-6">
        <label htmlFor="aboutMe" className="block text-lg font-semibold mb-2">
        Address
      </label>
      <div>
        <label className="block text-sm font-medium mb-1">Street</label>
        <input
          type="text"
          name="street"
          value={user?.address?.street != null ? user.address.street : ""}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">City</label>
        <input
          type="text"
          name="city"
          value={user?.address?.city != null ? user.address.city : ""}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">State</label>
        <input
          type="text"
          name="state"
          value={user?.address?.state != null ? user.address.state : ""}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">ZIP Code</label>
        <input
          type="text"
          name="zip"
          value={user?.address?.zip != null ? user.address.zip : ""}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default Address;
