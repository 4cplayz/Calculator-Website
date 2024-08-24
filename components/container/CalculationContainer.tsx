"use client";
import React from 'react';
import ButtonContainer from './ButtonContainer';

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
  return (
    <div className="grid grid-cols-4 gap-2">
      {['7', '8', '9', '*'].map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)}>
          <ButtonContainer padding={1.2} minW={50}>
            {btn}
          </ButtonContainer>
        </button>
      ))}
      {['4', '5', '6', '-'].map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)}>
          <ButtonContainer padding={1.2} minW={50}>
            {btn}
          </ButtonContainer>
        </button>
      ))}
      {['1', '2', '3', '+'].map((btn) => (
        <button key={btn} onClick={() => onButtonClick(btn)}>
          <ButtonContainer padding={1.2} minW={50}>
            {btn}
          </ButtonContainer>
        </button>
      ))}
      <button onClick={onClearClick}>
        <ButtonContainer padding={1.2} minW={50} primaryBgColor="var(--accent-color)">
          C
        </ButtonContainer>
      </button>
      <button onClick={() => onButtonClick('0')}>
        <ButtonContainer padding={1.2} minW={50}>
          0
        </ButtonContainer>
      </button>
      <button onClick={() => onButtonClick('/')}>
        <ButtonContainer padding={1.2} minW={50} primaryBgColor="#1E90FF">
          /
        </ButtonContainer>
      </button>
      <button onClick={onEqualClick}>
        <ButtonContainer padding={1.2} minW={50}>
          =
        </ButtonContainer>
      </button>
    </div>
  );
}

export default CalculationContainer;
