import React from 'react';
import { render, screen } from '@testing-library/react';
import BookCard3 from './card3';
import {BrowserRouter} from "react-router-dom";

const details = {
    id:1,
    image:'/assets/images/1.png',
    title:'Beyond Entrepreneurship',
    author:'Jim collins & Bill Lazier',
    readtime:'13',
    reads:''
}

const details2 = {
    id:1,
    image:'/assets/images/1.png',
    title:'Beyond Entrepreneurship',
    author:'Jim collins & Bill Lazier',
    readtime:'13',
    reads:'1.9k'
}



type bookprops={
    bookid:number
    details:{
        id:number
        image:string
        title:string
        author:string
        readtime:string
        reads:string
    }
    finish:Boolean
    }

const MockCard = (props:bookprops)=>
{
    const {bookid,details,finish} = props

    return(
    <BrowserRouter>
        <BookCard3 bookid={bookid} details={details} finish={finish}/>
    </BrowserRouter>
    )
}

describe("renders bookcard",()=>{

test('renders book title', () => {
  render(< MockCard bookid={details.id} details={details} finish={true}/>);
  const bookTitle = screen.getByText(/Beyond Entrepreneurship/i);
  expect(bookTitle).toBeInTheDocument();
});

test('renders book author name', () => {
    render(< MockCard bookid={details.id} details={details} finish={true}/>);
    const bookAuthor = screen.getByText(/Jim collins & Bill Lazier/i);
    expect(bookAuthor).toBeInTheDocument();
  });

  test('renders add to library button in book card', () => {
    render(< MockCard bookid={details.id} details={details} finish={false}/>);
    const Addtolibrary = screen.getByText(/Add to library/i);
    expect(Addtolibrary).toBeInTheDocument();
  });

  test('renders finish reading button in book card', () => {
    render(< MockCard bookid={details.id} details={details} finish={true}/>);
    const finishreadElement = screen.getByText(/Finish read/i);
    expect(finishreadElement).toBeInTheDocument();
  });


  test('renders book reads in book card', () => {
    render(< MockCard bookid={details.id} details={details} finish={true}/>);
    const finishreadElement = screen.queryByText(/reads/i);
    expect(finishreadElement).toBeNull();
  });

  test('renders book reads when available', () => {
    render(< MockCard bookid={details2.id} details={details2} finish={true}/>);
    const finishreadElement = screen.queryByText(/reads/i);
    expect(finishreadElement).toBeInTheDocument();
  });

})