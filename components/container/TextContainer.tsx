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
    align,
    items,
    invert,
    bg,
  }:
  {
    children?: React.ReactNode,
    margin?: boolean,
    padding?: boolean,
    Size?: number,
    Weight?: number,
    center?: boolean,
    justify?: boolean,
    align?: boolean,
    items?: boolean,
    invert?: boolean,
    bg?: boolean,
  }) => 
{
  const paddingClass = padding ? 'p-2' : '';
  const marginClass = margin ? 'm-2' : '';
  const centerClass = center ? 'text-center' : '';
  const justifyClass = justify ? 'text-justify' : '';
  const alignClass = align ? 'content-center' : '';
  const itemsClass = items ? 'items-center' : '';
  
  const bgClass = bg ? 'bg-blue-300' : '';

  const style = {
    color: invert ? 'var(--primary-color)' : 'var(--secondary-color)',
    fontSize: Size ? `${Size}rem` : undefined,
    fontWeight: Weight ? Weight : undefined,
  }

  return (
    <p className={`flex ${itemsClass} ${alignClass} ${bgClass} ${marginClass} ${centerClass} ${justifyClass} ${paddingClass}`} style={style}>
      {children}
    </p>
  )
}

export default TextContainer