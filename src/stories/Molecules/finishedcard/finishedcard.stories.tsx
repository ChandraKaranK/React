import React from "react";
import FinishedCard from "./finishedcard";
import card1 from './1.png';
import card2 from './2.png';

const finishedbook = 
    {
    id:1,
    image:card1,
    title:'Beyond Entrepreneurship',
    author:'Jim collins & Bill Lazier',
    readtime:'13',
    reads:''
    }

export default{
    title:"molecules/finishedcard",
    component:FinishedCard
}

export const Finished3 = ()=><FinishedCard bookid={finishedbook.id} details={finishedbook}></FinishedCard>