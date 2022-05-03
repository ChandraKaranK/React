import React from "react";
import { Card, Typography } from '@mui/material';
import { CardHeader } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { AccessTime } from "@mui/icons-material";
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { PersonOutline } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import './card.css';
import bookimage from './1.png';

function BookCard(){
 return(
     <Card style={{width:'300px'}}>
         <CardMedia
          component="img"
          height="250"
          image={bookimage}
          alt="Book image"
         />
         <CardContent>
             <Typography style={{fontWeight:'bold'}}>Bring your human to work</Typography>
             <br></br>
             <Typography variant="subtitle1">Erica Keswin</Typography>
             <List className="card">
                 <ListItem disableGutters={true}>
                     <ListItemIcon style={{minWidth:'20px'}}><AccessTime style={{fontSize:'medium'}}/></ListItemIcon>
                     <ListItemText><Typography variant="subtitle2">13-minute read</Typography></ListItemText>
                 </ListItem>
                 <ListItem disableGutters={true}>
                     <ListItemIcon style={{minWidth:'20px'}}><PersonOutline style={{fontSize:'medium'}}/></ListItemIcon>
                     <ListItemText sx={{fontSize:'4px'}}> <Typography variant="subtitle2">1.9k reads</Typography></ListItemText>
                 </ListItem>
             </List>
             <div style={{display:'flex',justifyContent:'flex-end'}}>
                 <MoreHoriz/>
             </div>
             
         </CardContent>


     </Card>
 )   
}

export default BookCard