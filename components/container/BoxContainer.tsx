import React from 'react'

const BoxContainer = (
  {
    children,
    W,
    minW = 100,
    maxW,
    H, 
    minH = 100,
    maxH,
    invert, 
    borderRadius,
    padding,
    margin,
    center, 
    align,
  }: 
  {
    children?: React.ReactNode,
    W?: number,
    minW?: number,
    maxW?: number,
    H?: number, 
    minH?:number,
    maxH?:number,
    invert?:boolean, 
    borderRadius?:number,
    padding?: number,
    margin?: number,
    center?: boolean, 
    align?: boolean,
  }) => 
{
  const centerClass = center ? 'justify-center' : '';
  const alignClass = align ? 'content-center' : '';
  
  const style = {

    backgroundColor: invert ? 'var(--primary-color)' : 'var(--secondary-color)',
    margin: margin !== undefined ? `${margin}rem` : undefined,
    padding: padding !== undefined ? `${padding}rem` : undefined,
    borderRadius: borderRadius !== undefined ? `${borderRadius}rem` : `0.375rem`,
    Width: `${W}px`,
    maxWidth: `${maxW}px`,
    minWidth: `${minW}px`,
    Height: `${H}px`,
    maxHeight: `${maxH}px`,
    minHeight: `${minH}px`,
  }

  return (
    <div className={`flex ${centerClass} ${alignClass}`} style={style}>
      {children}
    </div>
  )
}

export default BoxContainer