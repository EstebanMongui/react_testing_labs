import React from 'react'

const Button = ({ 
    callToAction = 'Button Text',
    state = true 
}) => {
  return (
    <button disabled={ state }>
        { callToAction }
    </button>
  )
}

export default Button