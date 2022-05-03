import React from "react";
import NaviSection from "./navisection";

export default{
    title:"Organisms/Navigation section",
    component:NaviSection
}

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

export const NavigationSection = ()=><NaviSection navlist={navigationlist}></NaviSection>