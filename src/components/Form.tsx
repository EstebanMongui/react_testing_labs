import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import PasswordValidator from './PasswordValidator'

const Form = () => {

  const [isFocused, setIsFocused] = useState(false)

  const handleFocus = (e) =>{
    e.preventDefault()
    setIsFocused(e.isTrusted)
  }

  return (
    <form action="">
        <Input 
          label='New password' 
          placeholder='New password'
          handleFocus={ handleFocus }
        />
        {
          isFocused
          &&
          <PasswordValidator />
        }
        <Input label="Password confirmation" placeholder='Password confirmation'/> 
        <Button callToAction='Submit' />
    </form>
  )
}

export default Form