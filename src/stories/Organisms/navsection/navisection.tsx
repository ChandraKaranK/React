import { NativeSelectInputProps } from "@mui/material/NativeSelect/NativeSelectInput";
import React from "react";
import NavItems from "../navitems/nav";
import './navisection.css';

type navigationlist = {
navlist:{
    title:string
    items:string[]
}[]
}

function NaviSection(props:navigationlist){

    const {navlist}= props 

    return(
        <div className="navcontainer">
            {navlist.map(section => (
                <div>
                <NavItems key={section.title} title={section.title} items={section.items}></NavItems>
                </div>
            ))}
        </div>
    )
}

export default NaviSection