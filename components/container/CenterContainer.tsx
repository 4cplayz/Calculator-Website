import React from 'react';

const CenterContainer = (
  { 
    children, 
    center, 
    between, 
    evenly,
    align,
    items,
    gap,
    margin,
    padding,  // Add margin and padding here
  }: 
  {
    children?: React.ReactNode, 
    center?: boolean, 
    between?: boolean, 
    evenly?: boolean,
    align?: boolean,
    items?: boolean,
    gap?: number,
    margin?: number,
    padding?: number,
  }) => 
{
  const centerClass = center ? 'justify-center' : '';
  const betweenClass = between ? 'justify-between' : '';
  const evenlyClass = evenly ? 'justify-evenly' : '';
  const alignClass = align ? 'content-center' : '';
  const itemsClass = items ? 'items-center' : '';
  
  const style = {
    gap: gap !== undefined ? `${gap}rem` : undefined,
    margin: margin !== undefined ? `${margin}rem` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
  };

  return (
    <div className={`flex ${itemsClass} ${centerClass} ${betweenClass} ${evenlyClass} ${alignClass}`} style={style}>
      {children}
    </div>
  );
}

export default CenterContainer;
