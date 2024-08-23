"use client";
import React, { useState } from 'react';
import CalculationContainer from '../container/CalculationContainer';

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
      <h1 className="text-2xl font-bold text-center mb-4">Simple Calculator</h1>
      <div className="border rounded p-2 mb-4 text-xl text-center">{input}</div>
      <CalculationContainer 
        onButtonClick={handleButtonClick} 
        onEqualClick={handleEqualClick} 
        onClearClick={handleClearClick} 
      />
    </div>
  );
}

export default Calculator;
