import React from 'react'
import CenterContainer from '../container/CenterContainer'
import TextContainer from '../container/TextContainer'

const Header = () => {
  return (
    <CenterContainer center gap={10} margin={0.5} items>
      <div className='fixed top-1'>
        <TextContainer Size={1} invert={false} margin={0.25}>
          This is a simple calculator to practice my coding skills. Hoping this turns out well.
        </TextContainer>
      </div>
    </CenterContainer>
  )
}

export default Header