import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const ScrollamaServiceLeft = ({ stepsData, images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const onStepEnter = ({ data }) => {
    setCurrentImage(images[data]);
    setCurrentStepIndex(data);
  };

  return (
    <div style={{ display: 'flex', maxWidth: '70rem', margin: '6rem auto', backgroundColor: '#f4f4f4' }}>
      {/* Image Container Wrapper */}
      <div style={{ position: 'sticky', width: '100%', height: '81vh', top: '10vh' }}>
        <img 
          src={currentImage} 
          alt="Step related" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'contain',
            opacity: currentStepIndex !== null ? 1 : 0,
            transition: 'opacity 500ms'
          }} 
        />
      </div>

      {/* Steps Container */}
      <div style={{ minHeight: '67vh', marginBottom: '1rem', transition: 'background-color 250ms ease-in-out' }}>
        <Scrollama offset={0.5} onStepEnter={onStepEnter}>
          {stepsData.map((step, index) => (
            <Step data={index} key={index}>
              <div className={'max-w-2xl'} style={{ margin: '50vh 0', opacity: currentStepIndex === index ? 1 : 0.2 }}>
                {step}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    </div>
  );
};

export default ScrollamaServiceLeft;
