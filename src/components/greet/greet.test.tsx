import {render, screen} from '@testing-library/react'
import { Greet }  from './greet'

test('Ttest greet', ()=>{
    render(<Greet />)
    const itemElement = screen.getByText("Hello")
    expect(itemElement).toBeInTheDocument()

})