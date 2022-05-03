import React from 'react';
import { CardMedia } from '@mui/material';
import bookimage from './2.png';

function BookImage(){
    return(
        <CardMedia
        component="img"
        height="250"
        image={bookimage}
        alt="Book image"
       />
    )
}

export default BookImage