"use client";
import React, { useState } from 'react';

const ButtonContainer = (
  {
    children,
    margin,
    padding,
    invert = false,
    primaryColor,
    primaryBgColor,
    secondaryColor,
    secondaryBgColor,
    align,
    items,
    Size,
    Weight,
    borderRadius,
    bg,
    minW,
  }: 
  {
    children?: React.ReactNode;
    padding?: number;
    margin?: number;
    align?: boolean;
    invert?: boolean;
    primaryColor?: string | boolean,
    primaryBgColor?: string | boolean,
    secondaryColor?: string | boolean,
    secondaryBgColor?: string | boolean,
    items?: boolean;
    Size?: number;
    Weight?: number;
    borderRadius?: number;
    bg?: boolean;
    minW?: number,
  }) =>  
{
  const [hover, setHover] = useState(false);

  const alignClass = align ? 'content-center' : '';
  const itemsClass = items ? 'items-center' : '';
  const bgClass = bg ? 'bg-blue-300' : '';

  const primaryColorClass = primaryColor ? `${primaryColor}` : 'var(--primary-color)';
  const primaryBgColorClass = primaryBgColor ? `${primaryBgColor}` : 'var(--primary-color)';
  const secondaryColorClass = secondaryColor ? `${secondaryColor}` : 'var(--secondary-color)';
  const secondaryBgColorClass = secondaryBgColor ? `${secondaryBgColor}` : 'var(--secondary-color)';
  

  const style = {
    color: hover
      ? invert
        ? `${primaryColorClass}`
        : `${secondaryColorClass}`
      : invert
      ? `${secondaryColorClass}`
      : `${primaryColorClass}`,
    backgroundColor: hover
      ? invert
        ? `${secondaryBgColorClass}`
        : `${primaryBgColorClass}`
      : invert
      ? `${primaryBgColorClass}`
      : `${secondaryBgColorClass}`,
    fontSize: Size ? `${Size}rem` : undefined,
    fontWeight: Weight ? Weight : undefined,
    borderRadius: borderRadius !== undefined ? `${borderRadius}rem` : `0.375rem`,
    margin: margin !== undefined ? `${margin}rem` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
    transition: 'all 0.3s ease', // Optional: for smooth transitions
    minWidth: `${minW}px`,
  };

  return (
    <div>
      <button
        className={`flex ${bgClass} ${alignClass} ${itemsClass}`}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonContainer;
