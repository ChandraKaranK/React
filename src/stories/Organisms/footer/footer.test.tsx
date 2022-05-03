import React from 'react';
import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import Footer from './Footer';

const navigationlist = [
    {
        title:"Editorial",
        items:['Booklists','What is Nonfiction?','What to read next?','Benefits of reading']
    },
    {
        title:"Useful links",
        items:['Pricing','Blinkist business','Gift cards','Blinlist magaine','Contact and help']
    },
    {
        title:"Company",
        items:['About','Career','Partners','Code of Conduct']
    }
]

test('renders footer', () => {
    render(<Footer navlist={navigationlist}/>);
    const Element = screen.getByText(/Editorial/i);
    expect(Element).toBeInTheDocument();
  });