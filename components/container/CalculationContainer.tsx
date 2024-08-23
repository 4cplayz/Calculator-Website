"use client";
import React from 'react';

interface CalculationContainerProps {
  onButtonClick: (buttonValue: string) => void;
  onEqualClick: () => void;
  onClearClick: () => void;
}

function CalculationContainer({
  onButtonClick,
  onEqualClick,
  onClearClick,
}: CalculationContainerProps) {
  const CalculationClasses = "bg-blue-500 text-white p-4 rounded hover:bg-blue-700";

  return (
    <div className="grid grid-cols-4 gap-2">
      {['7', '8', '9', '/'].map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)} className={CalculationClasses}>
          {btn}
        </button>
      ))}
      {['4', '5', '6', '*'].map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)} className={CalculationClasses}>
          {btn}
        </button>
      ))}
      {['1', '2', '3', '-'].map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)} className={CalculationClasses}>
          {btn}
        </button>
      ))}
      <button onClick={onClearClick} className="bg-red-500 text-white p-4 rounded hover:bg-red-700">
        C
      </button>
      <button onClick={() => onButtonClick('0')} className={CalculationClasses}>
        0
      </button>
      <button onClick={onEqualClick} className={CalculationClasses}>
        =
      </button>
      <button onClick={() => onButtonClick('+')} className={CalculationClasses}>
        +
      </button>
    </div>
  );
}

export default CalculationContainer;
