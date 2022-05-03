import React from "react";
import Current from "./current";
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


const list = [
    {
        image:image10,
        title:'Being Boss',
        author:'Kathleen Shannon and Emily',
        readtime:'13',
        reads:''
    },
    {
        image:image2,
    title:'Beyond Entrepreneurship',
    author:'Jim collins & Bill Lazier',
    readtime:'13',
    reads:'1.9k'
    },
    {
        image:image11,
        title:'Employee to Entrepreneur',
        author:'Steve Glavesky',
        readtime:'13',
        reads:'1.9k'
    },
    {
        image:image4,
        title:'The Fate of Food',
        author:'Amanda Little',
        readtime:'12',
        reads:'16k'
    },
    {
        image:image5,
        title:'Lives of the Stoics',
        author:'Ryan Holiday,Stephen Hansel',
        readtime:'13',
        reads:''
    },
    {
        image:image6,
        title:'Loving Your Business',
        author:'Debbie King',
        readtime:'13',
        reads:''
    },
    {
        image:image7,
        title:'The Lonely Century',
        author:'Noreena Hertz',
        readtime:'15',
        reads:''
    },
    {
        image:image8,
        title:'Eat Better,Feel Better',
        author:'Giada Lee Laurensis',
        readtime:'13',
        reads:'1.9k'
    },
    {
        image:image9,
        title:'Dropshipping',
        author:'James Moore',
        readtime:'12',
        reads:''
    }
];


export default{
    title:'Pages/current',
    component:Current
}

export const Current1 = ()=><Current></Current>