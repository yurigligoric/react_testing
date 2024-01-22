import {render, screen} from '@testing-library/react'
import { Greet } from './greet'

describe("Greetings", ()=>{
    test('if greeting is functioning properly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    
    })

    test('if greeting has a name', () =>{
        
        
        render(<Greet name="Visnus"/>)
        const textElement = screen.getByText("Hello Visnus")
       expect(textElement).toBeInTheDocument()
    
    })
})
    
