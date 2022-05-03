import React from "react";
import { Search } from "@mui/icons-material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box } from "@mui/material";
import logo from './Blinkist.jpg';
import { Button } from "@mui/material";
import IconFromSvg from "../../Atoms/IconFromSvg/IconFromSvg";
import { useState } from "react";
import Menu from '../Menu/Menu';
import {Link} from "react-router-dom";
import LogoutButton from "../../Atoms/logout/logoutButton";
import ProfileAvatar from "../../Atoms/Avatar/profileAvatar";


function Header2(){

    const [flag,setFlag] = useState(false)

    const changeFlag = ()=>{
        if(flag)
        setFlag(false)
        else
        setFlag(true)
    }


    return(
        <>
        <Box marginTop='10px'>
            <Box display='flex'  flexDirection='row' flexWrap='wrap' columnGap={2} height="50px" marginLeft='23%'marginRight='23%'>
                {/* <IconFromSvg children={SearchIcon}></IconFromSvg> */}
                <Button style={{width:'120px',marginTop:'-10px'}}><img  alt="image" src={logo} height="25px"></img></Button>
                {/* <IconFromSvg children={EntrepreneurIcon}></IconFromSvg> */}
                <Button style={{width:'100px',marginTop:'-10px'}}><Search></Search></Button>
                <Box className="explore1" onClick={changeFlag} sx={{'&:hover':{borderBottom:"2px solid lightgreen"}}}>
                <Button style={{width:'100px'}}>Explore{flag?<KeyboardArrowUp></KeyboardArrowUp>:<KeyboardArrowDown></KeyboardArrowDown>}</Button>
                </Box>
            <Link to="/" style={{textDecoration:'none',flexGrow:"1"}}><Button style={{width:'150px'}}>My library</Button></Link> 
                <Box>
                <LogoutButton></LogoutButton>
                <Button sx={{'&:hover':{background:'none'},width:'100px'}}>
                <ProfileAvatar/>
                <KeyboardArrowDown></KeyboardArrowDown>
                </Button>
                </Box>       
            </Box>
         </Box>
             {flag? <Menu></Menu>:<></>}

        </>
    )
}

export default Header2

{/*

    <div className="container1">
            <Button style={{width:'120px'}}><img  alt="image" src={logo} height="25px"></img></Button>
            <Button style={{width:'100px'}}><Search></Search></Button>
            <div className="explore" onClick={changeFlag}>
            <Button style={{width:'100px'}}>Explore{flag?<KeyboardArrowUp></KeyboardArrowUp>:<KeyboardArrowDown></KeyboardArrowDown>}</Button>
            </div>
           <Link to="/" style={{textDecoration:'none',flexGrow:"1"}}><Button style={{width:'150px'}}>My library</Button></Link> 
            <div>
            <LogoutButton></LogoutButton>
            <Button sx={{'&:hover':{background:'none'}}}>
            <ProfileAvatar/>
            <KeyboardArrowDown></KeyboardArrowDown>
            </Button>
            </div>       
        </div>

*/}