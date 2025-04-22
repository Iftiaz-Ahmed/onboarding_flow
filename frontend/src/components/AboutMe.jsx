import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const AboutMe = () => {
  const {user, setUser} = useContext(AppContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="mb-6">
      <label htmlFor="aboutMe" className="block text-lg font-semibold mb-2">
        About Me
      </label>
      <textarea
        id="aboutMe"
        name="aboutMe"
        value={user?.aboutMe != null ? user.aboutMe : ""}
        onChange={handleInputChange}
        rows="6"
        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black-500"
        placeholder="Tell us a bit about yourself..."
      />
    </div>
  );
};

export default AboutMe;
