import React from 'react';
import { render, screen } from '@testing-library/react';
import FinishedCard from './finishedcard';
import card1 from '../../assets/img/1.png';
import {BrowserRouter} from "react-router-dom";

const finishedbook = 
    {
    id:1,
    image:card1,
    title:'Beyond Entrepreneurship',
    author:'Jim collins & Bill Lazier',
    readtime:'13',
    reads:''
    }

const MockFinishedCard = ()=>
{

    return(
    <BrowserRouter>
       <FinishedCard bookid={finishedbook.id} details={finishedbook}></FinishedCard>
    </BrowserRouter>
    )
}

describe("renders reading finished bookcard",()=>{

test('renders finished book card read again element', () => {
    render(<MockFinishedCard/>);
    const readAgainElement = screen.getByText(/Read again/i);
    expect(readAgainElement).toBeInTheDocument();
  });

  test('renders finished book card readtime', () => {
    render(<MockFinishedCard/>);
    const readtimeElement = screen.getByText(/13-minute read/i);
    expect(readtimeElement).toBeInTheDocument();
  });

})