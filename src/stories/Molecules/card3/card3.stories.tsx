import React from "react";
import BookCard3 from "./card3";
import image3 from './2.png';

export default{
    title:"Molecules/Card3",
    component:BookCard3
}

// const details = {
//     image:'/assets/images/1.png',
//     title:'Beyond Entrepreneurship',
//     author:'Jim collins & Bill Lazier',
//     readtime:'13',
//     reads:''
// }

const details = {
    id:1,
    image:'/assets/images/1.png',
    title:'Beyond Entrepreneurship',
    author:'Jim collins & Bill Lazier',
    readtime:'13',
    reads:''
}

export const Book3 = ()=><BookCard3  bookid={details.id} details={details} finish={true}></BookCard3>