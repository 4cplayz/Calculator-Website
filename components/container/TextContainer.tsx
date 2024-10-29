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
    margin?: number,
    padding?: number,
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
  const centerClass = center ? 'text-center' : '';
  const justifyClass = justify ? 'text-justify' : '';
  const alignClass = align ? 'content-center' : '';
  const itemsClass = items ? 'items-center' : '';
  
  const bgClass = bg ? 'bg-blue-300' : '';

  const style = {
    color: invert ? 'var(--primary-color)' : 'var(--secondary-color)',
    fontSize: Size ? `${Size}rem` : undefined,
    fontWeight: Weight ? Weight : undefined,
    margin: margin !== undefined ? `${margin}rem` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
  }

  return (
    <p className={`flex ${itemsClass} ${alignClass} ${bgClass}  ${centerClass} ${justifyClass}`} style={style}>
      {children}
    </p>
  )
}

export default TextContainer