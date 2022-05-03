import React from "react";
import './nav.css';
import Box, { Typography } from "@mui/material";
import Theme from '../../theme';
import { ThemeProvider } from '@mui/material/styles';
import { List, ListItem, ListItemButton, ListItemIcon } from "@mui/material";

type navitems = {
    title:string
    items:string[]
}

function NavItems(props:navitems){

    const {title,items} = props

    return(
        <ThemeProvider theme={Theme}>
        <div>
        <List>
            <ListItem><Typography variant="subtitle1" sx={{fontStyle:'bold',fontSize:'16px'}}>{title}</Typography></ListItem>
            {items.map(item => (
                <ListItem key={item}><Typography variant="h6">{item}</Typography></ListItem>
            )
            )}
        </List>
    </div>
    </ThemeProvider>

    )
}

export default NavItems


// <div>
// <ul>
//     <b><li id="title">{title}</li></b>
//     {items.map(item => (
//         <li key={item}>{item}</li>
//     )
//     )}
// </ul>
// </div>