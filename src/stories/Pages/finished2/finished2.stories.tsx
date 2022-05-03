import React from "react";
import Finished2 from "./finished2";
import card1 from './1.png';
import card2 from './2.png';

const fcards = [
    {
    image:card1,
    title:'Beyond Entrepreneurship',
    author:'Jim collins & Bill Lazier',
    readtime:'13',
    reads:''
    },
    {
    image:card2,
    title:'Bring Human to Work',
    author:'Erica Keswin',
    readtime:'13',
    reads:'1.9k'
    }
]

export default {
    title:'Pages/finishedcard',
    component:Finished2
}

export const Finishedcard = ()=><Finished2></Finished2>