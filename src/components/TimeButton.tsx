import React, { useState } from 'react'

const TimeButton = ({ text='click me!', message='clicked'}) => {
  
  const [showParagraph, setShowParagraph] = useState(false)

  const handleClick = () => {
    setTimeout(() => {
	    setShowParagraph(true)
    }, 500)
  }

  return (
    <>
      <button onClick={handleClick}>{text}</button>
      {
        showParagraph
	      &&
	      <p>{message}</p>
      }
    </>
  )
}

export default TimeButton
