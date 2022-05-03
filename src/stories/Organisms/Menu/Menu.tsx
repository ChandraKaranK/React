import React from "react";
import { List, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material";
import './Menu.css';
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { Box } from "@mui/material";
import entrepreneur from './entrepreneur.png';
import culture from './culture.png';
import economics from './economics.png';
import nature from './nature.png';
import politics from './politics.png';
import psychology from './psychology.png';
import science from './science.png';
import health from './health.png';
import history from './history.png';
import productivity from './productivity.png';
import money from './money.png';
import motivation from './motivation.png';
import personal from './personal.png';
import relation from './relation.png';
import marketing from './marketing.png';
import communication from './communication.png';
import career from './career.png';
import education from './education.png';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { lightGreen, grey, blue } from '@mui/material/colors';


export const theme = createTheme({
    palette: {
      primary:{
        main:grey[800],
      },
      secondary: {
        main: blue[800],
      },
    },
     typography: {
       h1:{
        fontFamily: 'Cera Pro',
        fontWeight: 700,
        fontSize: 36,
        color:'#03314B'
       },

       h3:{
        fontFamily: 'Cera Pro',
        fontWeight: 700,
        fontSize: 24,
        color:'#03314B'
       },

       h4:{
        fontFamily: 'Cera Pro',
        fontWeight: 700,
        fontSize: 36
       },

       h5:{
        fontFamily: 'Cera Pro',
        fontWeight: 400,
        fontSize: 20
       },

       h6:{
        fontFamily: 'Cera Pro',
        fontWeight: 400,
        fontSize: 16
       },
  
       subtitle1:{
        fontWeight: 700,
        fontSize: 18,
        color: '#03314B',
       
       },
       subtitle2:{
        fontWeight: 400,
        fontSize: 18,
        color: '#6D787E',
       },
  
       body1:{
        fontFamily: 'Cera Pro',
        fontWeight: 500,
        fontSize: 16,
        color:'#6D787E',
        lineHeight:'20px'
       },

       body2:{
        fontFamily: 'Cera Pro',
        fontWeight: 400,
        fontSize: 16,
        color: '#03314B'
       },
  
       caption:{
        fontFamily: 'Cera Pro',
        fontWeight: 400,
        fontSize: 14,
        color: '#6D787E',
        lineHeight:'17px',
        padding:0
       },
  
       button:{
        fontFamily:'Cera Pro',
        fontSize:16,
        fontWeight:500,
        textTransform:'capitalize'
       },
      fontFamily: 'Cera Pro',
   
      
    },
  
  });


function Menu(){

const navigate = useNavigate();


const handleClick = ()=>
{
    navigate('/entrepreneurs');
}


       return(
           <ThemeProvider theme={theme}>
           <Box className="menu">   
               <Box>
               <List className="menutitle">
                   <ListItem> <Typography color="blue" variant="body1">Explore by category</Typography></ListItem> 
                   <ListItem><Typography variant="body1">See recently added items</Typography></ListItem>
                   <ListItem><Typography variant="body1">See popular titles</Typography></ListItem>
               </List>
               </Box>
               <Box className="menuitems">

            <List>
             <ListItem> <ListItemButton  onClick={handleClick}><ListItemIcon><img src={entrepreneur}/></ListItemIcon><Typography className="menuitem" variant="body2">Entrepreneurship</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={science}/></ListItemIcon><Typography className="menuitem" variant="body2">Science</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={economics}/></ListItemIcon><Typography className="menuitem" variant="body2">Economics</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={culture}/></ListItemIcon><Typography className="menuitem" variant="body2">Corporate culture</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={psychology}/></ListItemIcon><Typography className="menuitem" variant="body2">Psychology</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={nature}/></ListItemIcon><Typography className="menuitem" variant="body2">Nature and environment</Typography></ListItemButton></ListItem>
            </List>
            <List>    
             <ListItem>  <ListItemButton><ListItemIcon><img src={politics}/></ListItemIcon><Typography className="menuitem" variant="body2">Politics</Typography></ListItemButton></ListItem>
             {/* <ListItem className="menuitem"> <ListItemButton><ListItemIcon><img src={health}/><ListItemIcon><Typography>Health and Nutrition</Typography></ListItemButton></ListItem> */}
             {/* <ListItem className="menuitem"> <ListItemButton><ListItemIcon><img src={history}/><ListItemIcon><Typography>History</Typography></ListItemButton></ListItem> */}
             <ListItem> <ListItemButton><ListItemIcon><img src={motivation}/></ListItemIcon><Typography className="menuitem" variant="body2">Motivation & inspiration</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={productivity}/></ListItemIcon><Typography className="menuitem" variant="body2">Productivity</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={career}/></ListItemIcon><Typography className="menuitem" variant="body2">Career and Success</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={health}/></ListItemIcon><Typography className="menuitem" variant="body2">Health and Nutrition</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={history}/></ListItemIcon><Typography className="menuitem" variant="body2">History</Typography></ListItemButton></ListItem>
            </List>
            <List>    
             <ListItem> <ListItemButton><ListItemIcon><img src={marketing}/></ListItemIcon><Typography className="menuitem" variant="body2">Marketing &Sales</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={personal}/></ListItemIcon><Typography className="menuitem" variant="body2">Personal Development</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={money}/></ListItemIcon><Typography className="menuitem" variant="body2">Money & Investment</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={communication}/></ListItemIcon><Typography className="menuitem" variant="body2">Communication skills</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={relation}/></ListItemIcon><Typography className="menuitem" variant="body2">Sex & Relationship</Typography></ListItemButton></ListItem>
             <ListItem> <ListItemButton><ListItemIcon><img src={education}/></ListItemIcon><Typography className="menuitem" variant="body2">Education</Typography></ListItemButton></ListItem>
            </List>
               </Box>
           </Box>
        </ThemeProvider>
       )
}

export default Menu

