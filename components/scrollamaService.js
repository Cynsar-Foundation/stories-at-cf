import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

const ScrollamaService = ({
  children,
  steps,
  offset = 0.5,
  onStepEnter,
  debug = false,
}) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(null);

  const handleStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
    if (onStepEnter) {
      onStepEnter(data);
    }
  };

  return (
    <div className="sticky w-screen">
      <div className="sticky inset-0 z-0 h-screen w-full object-cover md:h-auto">
        {children}
      </div>
      <Scrollama offset={offset} onStepEnter={handleStepEnter} debug={debug}>
        {steps.map((stepContent, stepIndex) => (
          <Step data={stepIndex} key={stepIndex}>
            <div
              className={`text-shadow-md relative mx-auto my-12 max-w-2xl p-2 text-center text-2xl text-white md:my-48 md:p-5 md:text-5xl ${currentStepIndex === stepIndex ? "opacity-100" : "opacity-20"} z-10`}
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
