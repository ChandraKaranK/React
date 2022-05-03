import React from 'react';
import Library from './stories/Pages/library/library';
import Finished from './stories/Pages/Finished/finished';
import BookDescription from './stories/Organisms/BookDescription/BookDescription';
import LoginButton from './stories/Atoms/login/loginButton';
import { useAuth0 } from "@auth0/auth0-react";

import image1 from './stories/assets/img/1.png'
import image2 from './stories/assets/img/2.png'
import image3 from './stories/assets/img/3.png'
import image4 from './stories/assets/img/4.png'
import image5 from './stories/assets/img/5.png'
import image6 from './stories/assets/img/6.png'
import image7 from './stories/assets/img/7.png'
import image8 from './stories/assets/img/8.png'
import image9 from './stories/assets/img/9.png'
import image10 from './stories/assets/img/10.png'
import image11 from './stories/assets/img/11.png'


import {Routes,Route} from "react-router-dom";




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



const bookslist = [
  {
    id:10,
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
    id:11,
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

const details = {
  id:2,
  image:image2,
  title:'Beyond Entrepreneurship 2.0',
  tag:'Turning Your Business into an Enduring great company',
  author:'JIm Collins & Bill Lazier',
  readtime:'15'
}

function App() {

  const {isAuthenticated,isLoading} = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
      <>
      {!isAuthenticated &&   <LoginButton/>}
    
      { isAuthenticated && (
      <Routes>
       <Route path='/' element={<Library navlist={navigationlist}/>}/>
       <Route path='/entrepreneurs' element={<Finished bookslist={bookslist} justAddedList={justAddedList} FeaturedList={FeaturedList}/>}/>
       <Route path='/bookpreview' element={<BookDescription details={details} bookid={2}></BookDescription>}/>
      </Routes>
      )}
      </>
  );
}

export default App;
