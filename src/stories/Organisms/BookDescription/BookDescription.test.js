import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import BookDescription from './BookDescription';
import book from './2.png';



test("books description",async()=>{

const bookID = 2

  await axios.get.mockResolvedValueOnce({
    books:[
      {
        "title":"Beyond Entrepreneurship 2.0",
        "author":"Bill Lazier"
      }
    ]
  })

  render(
    <BrowserRouter>
    <BookDescription/>
    </BrowserRouter>
  )

  expect(axios.get).toHaveBeenCalledTimes(1)

  const Element = screen.getByText(/send to kindle/i);
   expect(Element).toBeInTheDocument();


})
