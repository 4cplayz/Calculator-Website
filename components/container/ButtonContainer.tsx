"use client";
import React, { useState } from 'react';

const ButtonContainer = ({
  children,
  margin,
  padding,
  invert = false,
  align,
  items,
  Size,
  Weight,
  borderRadius,
  bg,
}: {
  children?: React.ReactNode;
  padding?: number;
  margin?: number;
  invert?: boolean;
  align?: boolean;
  items?: boolean;
  Size?: number;
  Weight?: number;
  borderRadius?: number;
  bg?: boolean;
}) => {
  const [hover, setHover] = useState(false);

  const alignClass = align ? 'content-center' : '';
  const itemsClass = items ? 'items-center' : '';
  const bgClass = bg ? 'bg-blue-300' : '';

  const style = {
    color: hover
      ? invert
        ? 'var(--primary-color)'
        : 'var(--secondary-color)'
      : invert
      ? 'var(--secondary-color)'
      : 'var(--primary-color)',
    backgroundColor: hover
      ? invert
        ? 'var(--secondary-color)'
        : 'var(--primary-color)'
      : invert
      ? 'var(--primary-color)'
      : 'var(--secondary-color)',
    fontSize: Size ? `${Size}rem` : undefined,
    fontWeight: Weight ? Weight : undefined,
    borderRadius: borderRadius !== undefined ? `${borderRadius}rem` : `0.375rem`,
    margin: margin !== undefined ? `${margin}rem` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
    transition: 'all 0.3s ease', // Optional: for smooth transitions
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
