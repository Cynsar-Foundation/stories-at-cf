import React, { useState } from 'react';
import { Scrollama, Step } from 'react-scrollama';

const ScrollamaService = ({ children, steps, offset = 0.5, onStepEnter, debug = false }) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
  
    const handleStepEnter = ({ data }) => {
      setCurrentStepIndex(data);
      if (onStepEnter) {
        onStepEnter(data);
      }
    };
  
    return (
      <div className="sticky  w-screen">
        <div className="sticky inset-0 z-0 w-full h-screen md:h-auto object-cover">
          {children}
        </div>
        <Scrollama offset={offset} onStepEnter={handleStepEnter} debug={debug}>
          {steps.map((stepContent, stepIndex) => (
            <Step data={stepIndex} key={stepIndex}>
              <div
                className={`max-w-2xl mx-auto relative my-12 md:my-48 p-2 md:p-5 text-white text-2xl md:text-5xl text-center text-shadow-md ${currentStepIndex === stepIndex ? 'opacity-100' : 'opacity-20'} z-10`}
              >
                {stepContent}
              </div>
            </Step>
          ))}
        </Scrollama>
      </div>
    );
};

export default ScrollamaService;
