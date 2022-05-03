import React from "react";
import BookDescription from "./BookDescription";
import book from './2.png';

export default {
    title:'organisms/bookdescription',
    component:BookDescription
}

const details = {
    id:2,
    image:book,
    title:'Beyond Entrepreneurship 2.0',
    tag:'Turning Your Business into an Enduring great company',
    author:'JIm Collins & Bill Lazier',
    readtime:'15'
}

export const book1 = ()=> <BookDescription bookid={2}></BookDescription>