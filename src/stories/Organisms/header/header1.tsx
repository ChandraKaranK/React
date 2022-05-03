import React from "react";
import { Search } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Typography } from "@mui/material";
import './header1.css';
import logo from './Blinkist.jpg';
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";


function Header1(){
    return(
        <div className="headercontainer">
            <img src={logo}></img>
            <Search></Search>
            <Typography display="inline">Explore</Typography>
            <KeyboardArrowDown></KeyboardArrowDown>
            <Typography  className="account">My library</Typography>
            {/* <Typography display="inline">Account</Typography> */}
            <Avatar>A</Avatar>
            <KeyboardArrowDown display="inline"></KeyboardArrowDown>
        </div>
    )
}

export default Header1