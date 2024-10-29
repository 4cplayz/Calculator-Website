"use client";
import React, { useState } from 'react';
import CalculationContainer from '../container/CalculationContainer';
import BoxContainer from '../container/BoxContainer';
import TextContainer from '../container/TextContainer';

// Main Calculator Component
function Calculator() {
  const [input, setInput] = useState<string>('');

  // Function to handle number and operator button clicks
  const handleButtonClick = (buttonValue: string) => {
    setInput((prevInput) => prevInput + buttonValue);
  };

  // Function to handle the equal button click
  const handleEqualClick = () => {
    try {
      // Evaluate the expression using JavaScript's eval function
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  // Function to clear the input
  const handleClearClick = () => {
    setInput('');
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <div className='mb-4'>
        <BoxContainer invert borderWidth={2} minH={50}>
          <TextContainer center Size={1.25} padding={0.5}>
              {input}
          </TextContainer>
        </BoxContainer>
      </div>
      <CalculationContainer 
        onButtonClick={handleButtonClick} 
        onEqualClick={handleEqualClick} 
        onClearClick={handleClearClick} 
      />
    </div>
  );
}

export default Calculator;
