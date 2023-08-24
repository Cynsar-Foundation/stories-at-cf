import React, { useState } from 'react';

const YourStory = () => {
  const [checkedItems, setCheckedItems] = useState({
    impact: false,
    volunteer: false,
    photos: false,
  });

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Hero Section */}
      <div className="bg-blue-500 text-white p-10 rounded-lg text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Ok, we want to have your story</h1>
        <p className="text-xl">Share your journey and inspire others.</p>
      </div>

      {/* Feature Sections */}
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <input 
            type="checkbox" 
            name="impact" 
            checked={checkedItems.impact} 
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label>Your story has impact and has a social pivot.</label>
        </div>

        <div className="flex items-center space-x-4">
          <input 
            type="checkbox" 
            name="volunteer" 
            checked={checkedItems.volunteer} 
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label>You are a volunteer or just a social change advisor.</label>
        </div>

        <div className="flex items-center space-x-4">
          <input 
            type="checkbox" 
            name="photos" 
            checked={checkedItems.photos} 
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label>You must have photos and proofs to upload on the story.</label>
        </div>
      </div>

      {/* Scrolling Feature */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Scroll to explore more:</h2>
        <div className="border overflow-x-scroll whitespace-nowrap p-4 space-x-4">
          {/* Add your content components here for horizontal scrolling */}
          <div className="inline-block bg-white p-4 rounded shadow">Content 1</div>
          <div className="inline-block bg-white p-4 rounded shadow">Content 2</div>
          <div className="inline-block bg-white p-4 rounded shadow">Content 3</div>
          {/* ... */}
        </div>
      </div>

      {/* Encouragement Section */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold">Keep writing, keep changing the world.</h2>
      </div>
    </div>
  );
};

export default YourStory;
