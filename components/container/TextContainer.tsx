import React from 'react'


const TextContainer = (
  {
    children,
    margin,
    padding,
    Size,
    Weight,
    center,
    justify,
    invert,
  }:
  {
    children?: React.ReactNode,
    margin?: boolean,
    padding?: boolean,
    Size?: number,
    Weight?: number,
    center?: boolean,
    justify?: boolean,
    invert?: boolean,
  }) => 
{
  const paddingClass = padding ? 'p-2' : '';
  const marginClass = margin ? 'm-2' : '';
  const centerClass = center ? 'text-center' : '';
  const justifyClass = justify ? 'text-justify' : '';

  const style = {
    color: invert ? 'var(--primary-color)' : 'var(--secondary-color)',
    fontSize: Size ? `${Size}rem` : undefined,
    fontWeight: Weight ? Weight : undefined,
  }

  return (
    <div className={`flex ${marginClass} ${centerClass} ${justifyClass} ${paddingClass}`} style={style}>
      {children}
    </div>
  )
}

export default TextContainer