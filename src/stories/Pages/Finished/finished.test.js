import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import FinishedPage from './finished';
import image1 from '../Finished/1.png';
import image2 from '../Finished/2.png';
import image3 from '../Finished/3.png';
import image4 from '../Finished/4.png';
import image5 from '../Finished/5.png';
import image6 from '../Finished/6.png';
import image7 from '../Finished/7.png';
import image8 from '../Finished/8.png';
import image9 from '../Finished/9.png';
import image10 from '../Finished/10.png';
import image11 from '../Finished/11.png';
import { BrowserRouter } from 'react-router-dom';

const bookslist = [
  {
      id:1,
      image:image10,
      title:'Being Boss',
      author:'Kathleen Shannon and Emily',
      readtime:'13',
      reads:''
  },
  {
      id:2,
      image:image2,
  title:'Beyond Entrepreneurship',
  author:'Jim collins & Bill Lazier',
  readtime:'13',
  reads:'1.9k'
  },
  {
      id:3,
      image:image11,
      title:'Employee to Entrepreneur',
      author:'Steve Glavesky',
      readtime:'13',
      reads:'1.9k'
  },
  {
      id:4,
      image:image4,
      title:'The Fate of Food',
      author:'Amanda Little',
      readtime:'12',
      reads:'16k'
  },
  {
      id:5,
      image:image5,
      title:'Lives of the Stoics',
      author:'Ryan Holiday,Stephen Hansel',
      readtime:'13',
      reads:''
  },
  {
      id:6,
      image:image6,
      title:'Loving Your Business',
      author:'Debbie King',
      readtime:'13',
      reads:''
  }
];


const justAddedList = [
  {
      id:7,
      image:image7,
      title:'The Lonely Century',
      author:'Noreena Hertz',
      readtime:'15',
      reads:''
  },
  {
      id:8,
      image:image8,
      title:'Eat Better,Feel Better',
      author:'Giada Lee Laurensis',
      readtime:'13',
      reads:'1.9k'
  },
  {
      id:9,
      image:image9,
      title:'Dropshipping',
      author:'James Moore',
      readtime:'12',
      reads:''
  }
];

const FeaturedList = [
  {
      id:1,
      image:image1,
      title:'Bring Your Human to Work',
      author:'Erica Keswin',
      readtime:'13',
      reads:''
  },
  {
      id:2,
      image:image2,
      title:'Beyond Entrepreneurship 2.0',
      author:'Jim Collins & Bill Lazier',
      readtime:'15',
      reads:''
  },
  {
      id:3,
      image:image3,
      title:"Doesn't Hurt to Ask",
      author:'Trey Gowdy',
      readtime:'13',
      reads:'1.9k'
  }
];

test("Entrepreneur books",async()=>{

  render(
  <BrowserRouter>
  <FinishedPage bookslist={bookslist} justAddedList={justAddedList} FeaturedList={FeaturedList}/>
  </BrowserRouter>
  )

  const Element = screen.getByText(/featured audio blinks/i);
  expect(Element).toBeInTheDocument();

  // expect(axios.get).toHaveBeenCalledTimes(1)
  // expect(axios.get).toHaveBeenCalledWith("http://localhost:8000/list")

})