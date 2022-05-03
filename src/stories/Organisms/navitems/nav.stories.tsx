import React from 'react';
import NavItems from './nav';

export default{
    title:"Organisms/navigation",
    component:NavItems
}

const title = 'Editorial'
const items = ['Book list','What is Nonfiction?','What to read next?','Benefits of reading']

export const EditorialNav = ()=><NavItems title={title} items={items}></NavItems>