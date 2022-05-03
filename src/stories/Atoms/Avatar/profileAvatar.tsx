import React from "react";
import { Avatar } from "@mui/material";
import { Box } from "@mui/material";

function ProfileAvatar(){


    const username = localStorage.getItem('username')

    return(
        <Box><Avatar sx={{height:"25px",width:"25px",fontSize:"15px",color:'white',backgroundColor:'#69A6E3'}}>{username ? username.charAt(0):null}</Avatar></Box>
    )

}

export default ProfileAvatar