import React from "react";
import ChangePassword from "../../Pages/ChangePassword";
import { render, screen, waitFor, act } from "@testing-library/react";

import '@testing-library/jest-dom/extend-expect'

describe('<ChangePassword />', ()=>{
    describe('When users haven\'t introduced characters', ()=>{
        it('Should show submit button disabled', ()=>{
            //Arrange
            render(<ChangePassword />)
            const $submitButton = screen.queryByText('Submit', { selector:'button' })
            //Assert
            expect($submitButton).toBeDisabled()

        })
        
        it('Should hide password validator component', ()=>{
            //Arrange
            render(<ChangePassword />)
            const $passwordValidator =  screen.queryByTestId('passwordValidator')

            //Assert
            expect($passwordValidator).toBeNull()
        })

        it('Should show password validator component when the user focus the password input', async()=>{
            //Arrange
            render(<ChangePassword />)
            const $passwordInput =  screen.queryByPlaceholderText('New password')
            
            //Act
            await act(() => $passwordInput?.focus())
            
            //Assert
            return waitFor(()=>{
                const $passwordValidator =  screen.queryByTestId('passwordValidator')
                expect($passwordValidator).toBeVisible()
            })
        })
    })
    
    describe('When users typed characters on the password\'s inputs', ()=>{
        xit('Should render the password errors by default', ()=>{
            
        })
    })
})