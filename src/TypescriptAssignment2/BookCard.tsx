import React from 'react';
import { Card} from '@mui/material';
import './book.css';
import BookImage from './BookImage';
import BookDetails from './BookDetails';

function BookCard(){

    return(
        <Card style={{width:'300px'}}>
            <BookImage/>
            <BookDetails></BookDetails>
        </Card>
 )   

}

export default BookCard