import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import Menu from './Menu';


describe("menu",()=>{

test('renders menu headers', () => {
    render(
    <BrowserRouter>
    <Menu/>
    </BrowserRouter>
    );
    const Element = screen.getByText(/Explore by category/i);
    expect(Element).toBeInTheDocument();
  });

})