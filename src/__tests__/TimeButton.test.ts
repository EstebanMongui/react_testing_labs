import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import TimeButton from '../components/TimeButton'
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

describe('TimeButton', ()=>{

	it('should render a button with the "click me!" text', ()=>{
		
		//Arrange
		const { queryByText } = render(<TimeButton />) 

		//Act
		const $button = queryByText('click me!', { selector: 'button' })
		
		//Assert
		expect($button).not.toBeNull()
	})
	it('should render a message a second after to be clicked', async() => {
		
		const props = { text:'click me!', message:'This is a test' }
		render(<TimeButton {...props} />)

		const button = screen.queryByText( props.text , {selector: 'button'})

		expect(screen.queryByText(/clicked/)).toBeNull()
		
		await userEvent.click(button)
		
		await waitFor(()=>{
			expect(screen.queryByText(props.message)).toBeVisible()
		})
	})
})

