import { Typography } from "@mui/material";
import React from "react";
import './banner.css';
import logo from './logo.png';

function Banner(){
    return(
        <div className="banner">
            <div className="content">
            <Typography variant="h1">Explore books on entrepreneurship</Typography><br/>
            <Typography>Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start</Typography>
            </div>
            <div className="logo">
            <img alt="err" src={logo} height={200}></img>
            </div>
        
        </div>
    )
}

export default Banner