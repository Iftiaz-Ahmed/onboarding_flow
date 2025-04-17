import React from 'react';

const Address = ({ addressData: addressData, setAddressData }) => {
  const handleChange = (e) => {
    setFormData({ ...addressData, [e.target.name]: e.target.value });
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
          value={addressData?.street || ''}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">City</label>
        <input
          type="text"
          name="city"
          value={addressData?.city || ''}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">State</label>
        <input
          type="text"
          name="state"
          value={addressData?.state || ''}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">ZIP Code</label>
        <input
          type="text"
          name="zip"
          value={addressData?.zip || ''}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
    </div>
  );
};

export default Address;
