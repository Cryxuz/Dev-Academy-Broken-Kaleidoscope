import React, { useState } from 'react'

function Pixel() {
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 0x1000000)
      .toString(16)
      .padStart(6, '0')}`
  }
  const [colour, setColour] = useState(getRandomColor())

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setColour(getRandomColor)
  }

  const handleDoubleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setColour('white')

    console.log('color change')
  }
  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setColour('black')
  }
  const handleContextMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setColour('aquamarine')
  }
  return (
    <button
      onContextMenu={handleContextMenu}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      style={{
        backgroundColor: colour,
        height: '15px',
        width: '15px',
      }}
    ></button>
  )
}

export default Pixel
