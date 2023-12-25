import Head from 'next/head';
import React, { useState } from 'react';
import Layout from '../components/layout';
import { CMS_NAME } from '../lib/constants';
import { Container } from '../components/container';
import Header from '../components/header';

const Down = () => {
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

  const allChecked = () => {
    return Object.values(checkedItems).every(item => item);
  };


  return (
    <Layout preview={true}>
      <Head>
          <title>{`Stories at Cynsar Foundation captured by its members ${CMS_NAME}`}</title>
      </Head>

    <Header></Header>
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gray-500 text-white p-10 rounded-lg text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Ok, we no longer writing stories</h1>
        <p className="text-xl">Share your journey and inspire others , We think its not working anymore.</p>
      </div>


      {/* Feature Sections */}
      <div className="space-y-6 max-w-2xl mx-auto">
        <div className="flex items-center space-x-4">
          <input 
            type="checkbox" 
            name="impact" 
            checked={checkedItems.impact} 
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label>Your story has impact and has a social pivot and no one cares.</label>
        </div>

        <div className="flex items-center space-x-4">
          <input 
            type="checkbox" 
            name="volunteer" 
            checked={checkedItems.volunteer} 
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label>You are a volunteer or just a social change advisor who has no money?.</label>
        </div>

        <div className="flex items-center space-x-4">
          <input 
            type="checkbox" 
            name="photos" 
            checked={checkedItems.photos} 
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600"
          />
          <label>You must have photos and proofs to upload on the story but we don't have money to pay the server cost.</label>
        </div>
      </div>

      {allChecked() && (
        <div className="mt-10 p-5 border rounded-md bg-white shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Write your story and send it nowhere!</h3>
          <p>We will review it within an hour and will never publish them</p>
        </div>
      )}

      {/* Encouragement Section */}
      <div className="mt-10 text-center">
        <h2 className="text-3xl font-bold">Keep writing, keep changing the world off course its not gonna happen.</h2>
      </div>
    </div>
    </Layout>
  );
};

export default Down;
