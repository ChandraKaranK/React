import React from "react";
import Footer from "./Footer";

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

export default{
    title:"Organisms/footer",
    component:Footer

}

export const Footers = ()=><Footer navlist={navigationlist}></Footer>