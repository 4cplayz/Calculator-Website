import React from 'react'
import CenterContainer from '../container/CenterContainer'
import TextContainer from '../container/TextContainer'

const Header = () => {
  return (
    <div>
      <CenterContainer center align gap={10} margin={1}>
        <TextContainer Size={1} invert={false}>
          This is a simple caculator to practice my coding skills hopefully this turns out well 
        </TextContainer>
      </CenterContainer>
    </div>
  )
}

export default Header