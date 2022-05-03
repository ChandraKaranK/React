import React from "react";
import { Card, Typography } from '@mui/material';
import { CardMedia } from '@mui/material';
import { CardContent } from '@mui/material';
import { AccessTime } from "@mui/icons-material";
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';
import { PersonOutline } from "@mui/icons-material";
import './card3.css';
import AddToLibrary from '../AddToLIbrary/addtolibrary';
import Finished from "../Finished/Finished";
import {Link} from "react-router-dom";


type CardDetails={
    bookid:number
    details:{
        id:number
        image:string
        title:string
        author:string
        readtime:string
        reads:string
    }
    finish:Boolean
    }
    

function BookCard3(props:CardDetails){

    const {bookid,details,finish} = props
    const reads = details.reads


 return(
    
     <Card style={{width:'300px'}}>
        <Link to={'/bookpreview'} style={{textDecoration:'none'}}>
         <CardMedia
          component="img"
          height="250"
          image={details.image}
          alt="Book image"
         />
        </Link>
    
         <CardContent>
             <Typography  variant="subtitle1" >{details.title}</Typography>
             <br></br>
             <Typography variant="body1">{details.author}</Typography>
             <List className="card">
                 <ListItem disableGutters={true}>
                     <ListItemIcon style={{minWidth:'20px'}}><AccessTime  style={{fontSize:'medium'}}/></ListItemIcon>
                     <ListItemText><Typography variant="caption">{details.readtime}-minute read</Typography></ListItemText>
                 </ListItem>
                {reads ? <ListItem disableGutters={true}>
                     <ListItemIcon style={{minWidth:'20px'}}><PersonOutline style={{fontSize:'medium'}}/></ListItemIcon>
                     <ListItemText> <Typography variant="caption">{details.reads} reads</Typography></ListItemText>
                 </ListItem> : <ListItem></ListItem>}
             </List>
                   {finish?<Finished bookID={details.id}></Finished>:<AddToLibrary bookID={details.id}></AddToLibrary>}            
         </CardContent>
     </Card>
 )   
}

export default BookCard3