import React from 'react';
import { render, screen } from '@testing-library/react';
import AddToLibrary from './addtolibrary';
import {BrowserRouter} from "react-router-dom";

const MockAddToLibrary = ()=>{
    return(
    <BrowserRouter>
        <AddToLibrary bookID={1}/>
    </BrowserRouter>
    )
}

test('renders add to library', () => {
  render(<MockAddToLibrary/>);
  const linkElement = screen.getByText(/Add to library/i);
  expect(linkElement).toBeInTheDocument();
});