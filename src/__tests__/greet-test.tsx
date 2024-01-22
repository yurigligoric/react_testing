import {render, screen} from '@testing-library/react'
import { Greet } from '../components/greet/greet'

describe("Greetings", ()=>{
    it('if greeting is functioning properly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    
    })

    it('if greeting has a name', () =>{
        
        
        render(<Greet name="Visnus"/>)
        const textElement = screen.getByText("Hello Visnus")
       expect(textElement).toBeInTheDocument()
    
    })
})
    
