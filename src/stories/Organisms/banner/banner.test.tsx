import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import Banner from './banner';


describe("banner",()=>{

test('renders banner', () => {
    render(<Banner/>);
    const Element = screen.getByText(/Explore books on entrepreneurship/i);
    expect(Element).toBeInTheDocument();
  });

})