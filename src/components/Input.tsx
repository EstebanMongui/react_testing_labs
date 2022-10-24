import React from 'react'

const Input = ({ 
    placeholder='Text',
    label,
    handleFocus
}) => {
  return (
    <>
        <label htmlFor="">{ label }</label>
        <input type="text" 
          placeholder={ placeholder } 
          onFocus={ handleFocus }
        />
    </>
  )
}

export default Input