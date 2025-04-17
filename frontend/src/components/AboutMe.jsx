import React from 'react';

const AboutMe = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label htmlFor="aboutMe" className="block text-lg font-semibold mb-2">
        About Me
      </label>
      <textarea
        id="aboutMe"
        name="aboutMe"
        value={value}
        onChange={onChange}
        rows="6"
        className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-black-500"
        placeholder="Tell us a bit about yourself..."
      />
    </div>
  );
};

export default AboutMe;
